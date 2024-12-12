import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { createGuest, getGuest } from './data-service';

export const authConfig = {
  providers: [
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
      // user = { fullName: 'Demo Account', email: 'demo@mail.com' };

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
  signOut,
} = NextAuth(authConfig);
