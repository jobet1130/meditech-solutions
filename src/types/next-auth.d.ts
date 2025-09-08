import 'next-auth';

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

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    firstName: string;
    lastName: string;
  }
}
