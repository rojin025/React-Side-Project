import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { createGuest, getGuest } from './data-service';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  providers: [
    Credentials({
      authorize(c) {
        return { fullName: 'Demo Account', email: 'demo@mail.com' };
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
    async signInDemo({ user }) {
      try {
        // user = { fullName: 'Demo Account', email: 'demo@mail.com' };

        console.log('Auth | Guest: ', isGuest);

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

// export const providerMap = authConfig.providers.map((provider) => {
//   if (typeof provider === 'function') {
//     const providerData = provider();
//     return { name: providerData.name };
//   }

//   return { name: provider.name };
// });

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signInDemo,
  signOut,
} = NextAuth(authConfig);
