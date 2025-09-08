import { NextAuthOptions, User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';
import bcrypt from 'bcryptjs';

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: User & {
      role: string;
      firstName: string;
      lastName: string;
    };
  }
}

// Extend the built-in JWT types
declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    firstName: string;
    lastName: string;
  }
}

// Extend the User type to include role
declare module 'next-auth' {
  interface User {
    role: string;
    firstName: string;
    lastName: string;
  }

  interface Session {
    user: User & {
      role: string;
      firstName: string;
      lastName: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid credentials');
        }

        // Return user object without password
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password;
        return userWithoutPassword;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        const typedUser = user as User & { role: string; firstName: string; lastName: string };
        token.role = typedUser.role;
        token.firstName = typedUser.firstName;
        token.lastName = typedUser.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const typedToken = token as JWT;
        session.user.role = typedToken.role;
        session.user.firstName = typedToken.firstName;
        session.user.lastName = typedToken.lastName;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

// Helper function to check user role
export const checkUserRole = (session: Session | null | undefined, allowedRoles: string[]) => {
  return session?.user?.role && allowedRoles.includes(session.user.role);
};
