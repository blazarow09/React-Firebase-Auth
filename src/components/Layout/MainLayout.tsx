import React from "react";
import { Outlet } from "react-router";
import { Button } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { IUserStore } from "../../stores/UserStore";
import { Col, Divider, Row } from "antd";
import { AppRoutes } from "../AppRoutes";
import { Link } from "react-router-dom";
import './MainLayout.css'

interface IMainLayoutProps {
    userId: string;
    loggedIn: boolean;
    userStore?: IUserStore;
}

@inject('userStore')
@observer
export default class LayoutBase extends React.Component<IMainLayoutProps> {
    public render() {
        return (
            <>
                {this.props.loggedIn && <>
                    <Row justify="end">
                        <Col span={18}>
                            <Button className="nav-btn" variant="outlined" size="small" component={Link} to={AppRoutes.homeRoute}>
                                Home
                            </Button>
                            <Button className="nav-btn" variant="outlined" size="small" component={Link} to={AppRoutes.buttonsContainerRoute}>
                                Buttons
                            </Button>
                            <Button className="nav-btn" variant="outlined" size="small" component={Link} to={AppRoutes.hooksExampleRoute}>
                                Hooks
                            </Button>
                        </Col>
                        <Col span={6}>

                            <Button className="log-out-btn" variant="outlined" size="small" onClick={async (): Promise<void> => await this.props.userStore.handleLogout()}>
                                Log out
                            </Button>
                            <h4>Welcome, {window.authContext.email}</h4>
                        </Col>
                        <Divider />
                    </Row>
                </>}

                <Outlet />
            </>
        )
    }
}