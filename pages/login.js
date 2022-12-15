import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import styles from "../styles/Survey.module.css";
import TextField from "@mui/material/TextField";

export default function LoginScreen() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      // router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }
  return (
    <form className={styles.logInGrid} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.mb}>
        <div className={styles.pageLogIn2}>Log In</div>

        <Link href={`/register?redirect=${redirect || "/"}`}>
          <div className={styles.pageRegister2}>Register</div>
        </Link>
      </div>
      <h1 className={styles.title}>Log In</h1>
      <div className={styles.mb}>
        {/* <label htmlFor='email'>Email</label> */}
        <TextField
          type='email'
          id='email'
          label='Email'
          variant='filled'
          size='large'
          sx={{ maxWidth: 420, minWidth: 420 }}
          autoFocus
          {...register("email", {
            required: "Please enter email",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: "Please enter valid email",
            },
          })}
        />
        {errors.email && (
          <div className={styles.errorText}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.mb}>
        {/* <label htmlFor='password'>Password</label> */}
        <TextField
          type='password'
          id='password'
          label='Password'
          variant='filled'
          size='large'
          sx={{ maxWidth: 420, minWidth: 420 }}
          autoFocus
          {...register("password", {
            required: "Please enter password",
            minLength: { value: 6, message: "password is more than 5 chars" },
          })}
        />

        {errors.password && (
          <div className={styles.errorText}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.mb}>
        <button className={styles.btnRegister}>Login</button>
      </div>
      {/* <div className={styles.mbLink}>
        Don&apos;t have an account? &nbsp;
        <Link href={`/register?redirect=${redirect || "/"}`}>Register</Link>
      </div> */}
    </form>
  );
}
