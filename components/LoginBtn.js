import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button className={styles.btnLogOutHome} onClick={() => signOut()}>
        Sign out
      </button>
    );
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button className={styles.btnLogInHome} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
