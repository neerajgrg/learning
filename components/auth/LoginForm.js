// components/LoginForm.js

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from '../../styles/components/auth/LoginForm.module.css'

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", user);
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{loading ? "Processing" : "Login"}</h1>
      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        className={styles.input}
      />
      <label htmlFor="password" className={styles.label}>Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
        className={styles.input}
      />
      <button onClick={onLogin} className={styles.button}>Login</button>
      <Link href="/signup" className={styles.link}>Visit signup page</Link>
    </div>
  );
}