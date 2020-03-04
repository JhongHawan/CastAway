import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.imgTitle}
          height="250"
          image={props.imgPath}
          title={props.imgTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.teamName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" href={`mailto:${props.contact}`} className={classes.button}>
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeamCard; 