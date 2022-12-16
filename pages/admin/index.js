import React from "react";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data: session, status } = useSession();
  console.log("admin", session);
  if (session && session.user.isAdmin == true) {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
        <label>add instructor</label>

        <label>add college</label>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page!</h1>
      </div>
    );
  }
}
