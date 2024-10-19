import React, { useEffect } from 'react';
import { useHexawareContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { token } = useHexawareContext();
    const navigate = useNavigate();
    useEffect(() => {
        if(!token) {
            navigate('/');
        }
    }, [token])
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard!</p>
            <p> Your token: {token}</p>
        </div>
    );
};

export default Dashboard;
