import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useHexawareContext } from '../../context/AppContext';
import { useLogin } from '../../hooks/useLogin';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const { setToken } = useHexawareContext();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const token = await useLogin(username, password);
        setToken(token);
        navigate('/dashboard');
        } catch(error) {
            console.log(error);
            setError('Login failed !!!');
        } 
       
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Login</button>
                {error && <div className="error-message">{error}</div>} 
            </form>
        </div>
    );
};

export default Login;
