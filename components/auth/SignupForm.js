// src/components/SignupForm.js

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../styles/components/auth/SignupForm.module.css';

export default function SignupForm() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/auth/signup", user);
            router.push("/login");
        } catch (error) {
            console.log("Signup failed", error.message);
        }
    };

    return (
        <div className={styles['signup-form']}>
            <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={onSignup}>Sign Up</button>
        </div>
    );
}