import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  button: {
    color: "#FFFFFF",
    background: "#F16841"
  }
});

const TeamCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={props.imgTitle}
        height="250"
        image={props.imgPath}
        title={props.imgTitle}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
          {props.teamName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" href={`mailto:${props.contact}`} className={classes.button}>
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeamCard; 