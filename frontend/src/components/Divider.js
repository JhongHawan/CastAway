import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { useStyles } from './Styles';
import { Typography } from '@material-ui/core';


function Divider(props) {
    const classes = useStyles();
    return (
        <Container className="container-fluid" style={{ paddingTop: '3em', paddingBottom: '3em'}}>
            <Row className="justify-content-sm-center">
                <Col className="col-4">
                    <hr className={classes.lineBreak} />
                </Col>
                <Col className="col-4">
                    <Typography component="h5" variant="h5" align="center" color="primary">
                        {props.title}
                    </Typography>
                </Col>
                <Col className="col-4">
                    <hr className={classes.lineBreak} />
                </Col>
            </Row>
        </Container>
    )
}





export default Divider;
