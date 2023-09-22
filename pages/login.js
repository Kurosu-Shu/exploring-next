import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Login = () => {
    const router = useRouter();
    const onLoginClick = async () => {
        await router.push('/dashboard');
    }

    useEffect(() => {
        router.prefetch('/dashboard');
    }, []);

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={onLoginClick} className="text-green-600">login</button>
        </div>
    );
};

export default Login;