import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Styles';
import { Typography } from '@material-ui/core';


function Divider(props) {
    const classes = useStyles();
    return (
        <Container className="container-fluid" style={{ paddingTop: '4rem', paddingBottom: '2rem'}}>
            <Row className="justify-content-sm-center">
                <Col sm={3}>
                    <hr className={classes.lineBreak} />
                </Col>
                <Col sm={6} style={{ textAlign: 'center'}}>
                    <Typography component="h4" variant="h4" align="center" color="primary">
                        {props.title}
                    </Typography>
                </Col>
                <Col sm={3}>
                    <hr className={classes.lineBreak} />
                </Col>
            </Row>
        </Container>
    )
}





export default Divider;
