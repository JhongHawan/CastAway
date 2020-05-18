// ! DOUBLE CHECK IF NEEDED ! 
// import React from 'react';
// import { CardActions, IconButton, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Container, Row, Col } from 'react-bootstrap';


// // PRE  - Requires mythTitle and mythDetails to render title and expansion details
// // POST - Renders expansion for myth used in context page
// class contextCard extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     // add to action to this
//     render() {
//         return (
//             <Row>
//                 <ExpansionPanel style={{ background: '#F2F2F2' }}>
//                     <ExpansionPanelSummary
//                         expandIcon={<ExpandMoreIcon />}
//                     >
//                         <Container>
//                             <Row>
//                                 <h4 style={{ paddingBottom: '0.5em' }}>{this.props.mythTitle}</h4>
//                             </Row>
//                             <Row>
//                                 <span style={{ background: "#FF6464", opacity: "0.7" }}>Confrimed FALSE</span>
//                                 <p style={{ paddingTop: '1em' }}><strong>Fact Check:</strong>{this.props.mythSummary}</p>
//                             </Row>
//                         </Container>

//                     </ExpansionPanelSummary>
//                     <ExpansionPanelDetails>
//                         <p>{this.props.mythDetails}</p>
//                     </ExpansionPanelDetails>
//                 </ExpansionPanel>
//             </Row>




//         );
//     }
// }

// export default contextCard;