import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class contextCard extends React.Component {
    constructor(props) {
        super(props)
        
    }

    // add to action to this
    render() {
        let imageProp = this.props.imgTitle
        let detailProp = this.props.details
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Woman and Child"
                        height="200"
                        // width="100"
                        image="prof_1.svg"
                        title="Woman and Child"
                    />
                    <CardContent>
                        <h4>Test</h4>
                        {/* <p>Hello world</p> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default contextCard;