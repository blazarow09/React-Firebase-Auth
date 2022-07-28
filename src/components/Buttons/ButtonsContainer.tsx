import { Col, Row } from "antd";
import React from "react";
import Button from "./Button";

const ButtonsContainer: React.FC = () => {
    return <Row justify="center">
        <Col>
            <Button />
            <Button disabled />
            <Button primary />
            <Button secondary />
            <Button warning />
            <Button danger />
            <Button dashed />
        </Col>
    </Row>
}

export default ButtonsContainer;