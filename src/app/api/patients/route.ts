import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import bcrypt from 'bcrypt';

// Get all patients (protected route)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Only admins and doctors can list all patients
    if (session.user.role !== 'ADMIN' && session.user.role !== 'DOCTOR') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const patients = await prisma.patient.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new patient (public route for registration)
export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName, dateOfBirth, bloodType } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and patient in a transaction
    const result = await prisma.$transaction([
      prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          role: 'PATIENT',
          patient: {
            create: {
              dateOfBirth: new Date(dateOfBirth),
              bloodType,
            },
          },
        },
        include: {
          patient: true,
        },
      }),
    ]);

    // Extract stored password to validate it was saved correctly, then exclude from response
    const { password: storedPassword, ...userData } = result[0];
    if (!storedPassword) {
      console.warn('No password was stored in the user data');
    }
    return NextResponse.json(userData, { status: 201 });
  } catch (error) {
    console.error('Error creating patient:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
