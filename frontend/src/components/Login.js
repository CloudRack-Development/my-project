import React, { useState } from 'react';
import client from '../appwriteConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await client.account.createSession(email, password);
            console.log('Logged in successfully');
            // Redirect to dashboard or perform other actions upon successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
