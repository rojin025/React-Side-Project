import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { createGuest, getGuest } from './data-service';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  providers: [
    Credentials({
      credentials: { password: { label: 'Password', type: 'password' } },
      authorize(credentials) {
        return { name: 'Demo Account', email: 'demo@mail.com', guestId: 1 };
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const isGuest = await getGuest(user.email);
        console.log('Auth | Guest: ', isGuest);

        if (!isGuest) {
          console.log('user:', user);

          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch {
        return false;
      }
    },
    // async signInDemo({ user }) {
    //   try {
    //     // user = { fullName: 'Demo Account', email: 'demo@mail.com' };

    //     console.log('Auth | Guest: ', isGuest);

    //     const isGuest = await getGuest(user.email);
    //     if (!isGuest) return false;

    //     return true;
    //   } catch {
    //     return false;
    //   }
    // },
    async session({ session, user }) {
      // console.log(session);
      // const guest = await getGuest('demo@mail.com');
      const guest = await getGuest(session.user.email);
      // console.log('Aut | Guest: ', guest);

      session.user.guestId = guest.id;
      // console.log('Auth | Session : ', session);
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  // signInDemo,
  signOut,
} = NextAuth(authConfig);
