import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
class Header extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3 </Col    >
                </Row>
            </Container>
        );

    }
}
export default Header;