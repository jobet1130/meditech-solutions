import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// Get health records (protected route)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Patients can only see their own records
    // Doctors can see records of their patients
    // Admins can see all records
    const whereClause = {
      ...(session.user.role === 'PATIENT' && { patientId: session.user.id }),
      ...(session.user.role === 'DOCTOR' && { doctorId: session.user.id }),
    };

    const healthRecords = await prisma.healthRecord.findMany({
      where: whereClause,
      include: {
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        doctor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                specialization: true,
              },
            },
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    });

    return NextResponse.json(healthRecords);
  } catch (error) {
    console.error('Error fetching health records:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new health record (protected route for doctors and admins)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || (session.user.role !== 'DOCTOR' && session.user.role !== 'ADMIN')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { patientId, diagnosis, treatment, notes, attachments = [] } = await req.json();

    // Check if patient exists
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Create the health record
    const healthRecord = await prisma.healthRecord.create({
      data: {
        patientId,
        doctorId: session.user.id,
        diagnosis,
        treatment,
        notes,
        attachments,
      },
      include: {
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        doctor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                specialization: true,
              },
            },
          },
        },
      },
    });

    // TODO: Send notification to patient

    return NextResponse.json(healthRecord, { status: 201 });
  } catch (error) {
    console.error('Error creating health record:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
