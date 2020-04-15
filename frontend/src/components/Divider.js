import React from 'react';

// import { Box, Grid } from '@material-ui/core';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { useStyles } from './Styles';
// import { Container } from '@material-ui/core';


function Divider(props) {
    const classes = useStyles();
    return (
        // <div className={classes.dividerWrapper}>
        //     <h2 className={classes.dividerTitle}>
        //         <span className={classes.dividerSpan}>
        //             {props.title}
        //         </span>
        //     </h2>
        // </div>
        <Container className="container-fluid">
            <Row className="justify-content-sm-center">
                {/* <Col>
                    <hr className={classes.hrWidth}/>
                    <h2>
                        {props.title}
                    </h2>
                    <hr className={classes.hrWidth} />
                </Col> */}
                <Col className="col-4">
                    <hr className={classes.lineBreak}/>
                </Col>
                <Col className="col-4">
                    <h2 style={{
                        fontSize: "1.5rem",
                        textAlign: "center"
                    }}>
                        {props.title}
                    </h2>
                </Col>
                <Col className="col-4">
                    <hr className={classes.lineBreak}/>
                </Col>
            </Row>
        </Container>
    )
}





export default Divider;
