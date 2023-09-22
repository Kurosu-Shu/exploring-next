import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
    const router = useRouter();

    const onLogoutClick = async () => {
        await router.push('/login')
    }
    return (
        <div>
            <p className=' text-green-500'>
                User is succefully logged in!!
            </p>
            <button onClick={onLogoutClick} className="text-red-600">logout</button>
        </div>

    );
};

export default Dashboard;