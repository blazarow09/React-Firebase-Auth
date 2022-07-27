import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Routes as Switch } from 'react-router-dom';
import { IUserStore } from '../stores/UserStore';
import { AppRoutes } from './AppRoutes';
import './App.css';
import MainLayout from './Layout/MainLayout';
import Posts from './Posts/Posts';
// import { Redirect } from 'react-router';

interface IAppTabsProps {
    userId: string;
    loggedIn: boolean;
    userStore?: IUserStore;
}

@inject('userStore')
@observer
export default class AppTabs extends React.Component<IAppTabsProps> {
    public render() {
        // if (!this.props.loggedIn) {
        //     return <Redirect to={AppRoutes.loginRoute} />;
        // }

        return (
            // Here comes your private content.
            <div className="r-private-content">
                <Switch>
                    <Route element={<MainLayout userId={this.props.userId} loggedIn={this.props.loggedIn} />}>
                        <Route path={AppRoutes.postsHome} element={<Posts />} />
                    </Route>
                </Switch>
            </div>
        );
    }
}
