import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// Get all appointments (protected route)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Patients can only see their own appointments
    // Doctors can see their own appointments
    // Admins can see all appointments
    const whereClause = {
      ...(session.user.role === 'PATIENT' && { patientId: session.user.id }),
      ...(session.user.role === 'DOCTOR' && { doctorId: session.user.id }),
    };

    const appointments = await prisma.appointment.findMany({
      where: whereClause,
      include: {
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
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
        dateTime: 'asc',
      },
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new appointment (protected route)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { doctorId, dateTime, notes } = await req.json();

    // Check if doctor exists
    const doctor = await prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    // Check if patient exists
    const patient = await prisma.patient.findUnique({
      where: { userId: session.user.id },
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Check if the time slot is available
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        doctorId,
        dateTime: new Date(dateTime),
        status: 'SCHEDULED',
      },
    });

    if (existingAppointment) {
      return NextResponse.json(
        { error: 'Time slot is not available' },
        { status: 400 }
      );
    }

    // Create the appointment
    const appointment = await prisma.appointment.create({
      data: {
        patientId: patient.id,
        doctorId,
        dateTime: new Date(dateTime),
        notes,
      },
      include: {
        patient: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
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

    // TODO: Send confirmation email to patient and notification to doctor

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
