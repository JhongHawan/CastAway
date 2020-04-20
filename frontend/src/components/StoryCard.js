import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



// TODO REDO determine if it's usable still
function StoryCard(props) {


    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Woman and Child"
                    height="200"
                    image={props.imageProp}
                    title="Woman and Child"
                    style={{ filter: 'grayscale(100%' }}
                />
                <CardContent>
                    <h4>{props.detailProp}</h4>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}


export default StoryCard;