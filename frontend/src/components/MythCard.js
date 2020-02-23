import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


function mythCard() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Woman and Child"
                    // height="140"
                    width="100"
                    image="woman_child.jpg"
                    title="Woman and Child"
                />
                <CardContent>
                    <h4>Woman and Child</h4>
                    <p>Hello world</p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default mythCard;