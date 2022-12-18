import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import User from "../../../models/User";
import dbConnect from "./lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
export const authOptions = {
  sesstion: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token.user = user;

      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  // secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    signIn: "/login",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({
          email: credentials.email,
        });
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          console.log("...auth", user);

          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            image: "img",
            year: user.year,
            major: user.major,
            campus: user.campus,
            gpa: user.gpa,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
};

export default NextAuth(authOptions);
