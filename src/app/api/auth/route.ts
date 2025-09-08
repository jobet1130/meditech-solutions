import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

// Secret key for JWT - In production, use environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return user data (without password) and token
    const userData = { ...user };
    delete userData.password;
    return NextResponse.json({
      user: userData,
      token,
    });
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
