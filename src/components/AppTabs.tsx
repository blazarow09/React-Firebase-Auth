import * as React from 'react';
import { Button } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { IUserStore } from '../stores/UserStore';
import { AppRoutes } from './AppRoutes';
import './App.css';

interface IAppTabsProps {
    userId: string;
    loggedIn: boolean;
    userStore?: IUserStore;
}

@inject('userStore')
@observer
export default class AppTabs extends React.Component<IAppTabsProps> {
    public render() {
        if (!this.props.loggedIn) {
            return <Redirect to={AppRoutes.loginRoute} />;
        }

        return (
            // Here comes your private content.
            <div className="r-private-content">
                <h1>Private content</h1>
                <h2>Welcome, {window.authContext.email}</h2>
                <Button variant="outlined" onClick={async (): Promise<void> => await this.props.userStore.handleLogout()}>
                    Log out
                </Button>
            </div>
        );
    }
}
