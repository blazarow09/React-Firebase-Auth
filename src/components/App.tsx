import React from 'react';
import { AuthContext, useAuthInit } from '../services/Authentication/AuthGuard';
import AppRouter from './AppRouter';
import './App.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
    const { isLoading, auth } = useAuthInit();

    // if(isLoading) Show loading indicator.

    return (
        <AuthContext.Provider value={{ loggedIn: auth?.loggedIn, userId: auth?.userId, email: auth?.email }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

export default App;
