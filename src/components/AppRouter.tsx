import React from 'react';
import { useAuth } from '../services/Authentication/AuthGuard';
import { IAuthContext } from '../services/Authentication/interfaces/IAuthContext';
import { BrowserRouter as Router, Navigate, Route, Routes as Switch } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import MainLayout from './Layout/MainLayout';
import Home from './Home/Home';
import Posts from './Posts/Posts';

const AppRouter: React.FC = () => {
    const { loggedIn, userId, email } = useAuth();

    const userContext: IAuthContext = {
        userId: userId,
        loggedIn: loggedIn,
        email: email,
    };

    window.authContext = userContext;

    return (
        <>
            <Router>
                <Switch>
                    <Route element={<MainLayout userId={userId} loggedIn={loggedIn} />}>
                        {/* Auth Routes */}
                        <Route path={AppRoutes.loginRoute} element={<Login loggedIn={loggedIn} />} />
                        <Route path={AppRoutes.registerRoute} element={<Register loggedIn={loggedIn} />} />
                        {/* Auth Routes */}

                        {/* Private Routes */}
                        <Route path={AppRoutes.homeRoute} element={loggedIn ? <Home /> : <Navigate replace to={AppRoutes.loginRoute} />} />
                        <Route path={AppRoutes.postsHome} element={loggedIn ? <Posts /> : <Navigate replace to={AppRoutes.loginRoute} />} />
                        {/* Private Routes */}

                        {/* <Route path={AppRoutes.postsHome + '/*'} element={<AppTabs userId={userId} loggedIn={loggedIn} />} /> */}
                        <Route path='*' element={<Navigate replace to={AppRoutes.loginRoute} />} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default AppRouter;
