import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { HexaContextProvider } from './context/AppContext';

const Root: React.FC = () => {
    return (
        <HexaContextProvider>
        <Router>
            <Routes>
                <Route path="/"  element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
        </HexaContextProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
