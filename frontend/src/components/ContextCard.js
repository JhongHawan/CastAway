import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions, IconButton, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



// Tracy's Note - Don't like the expansion panel as much (looks boring) 
// the card code is still here, but couldn't figure out the expansion handleClick part yet. 

// PRE  - Requires mythTitle and mythDetails to render title and expansion details
// POST - Renders expansion for myth used in context page
class contextCard extends React.Component {
    constructor(props) {
        super(props)
    }

    // add to action to this
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h4>{this.props.mythTitle}</h4>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p>{this.props.mythDetails}</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            // TODO: Uncomment to see the unfinished card. Missing the handleExpandClick function. 
            // <Card>
            //     <CardMedia
            //         component="img"
            //         alt="Temp Myth Image"
            //         height="200"
            //         // width="100"
            //         image="https://via.placeholder.com/200x200.png?text=MYTH"
            //         title="Temp Myth Image"
            //     />
            //     <CardContent>
            //         <h4>{this.props.mythTitle}</h4>
            //     </CardContent>
            //     <CardActions>
            //         <IconButton
            //             onClick={this.handleExpandClick}
            //             // aria-expanded={expanded}
            //             aria-label="show more"
            //         >
            //             <ExpandMoreIcon />
            //         </IconButton>
            //     </CardActions>
            // </Card>





        );
    }
}

export default contextCard;