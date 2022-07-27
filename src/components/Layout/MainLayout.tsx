import React from "react";
import { Outlet } from "react-router";
import { Button } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { IUserStore } from "../../stores/UserStore";
import './MainLayout.css'
import { Col, Divider, Row } from "antd";

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