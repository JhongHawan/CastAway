import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/GridList';
import TeamCard from './TeamCard'; 

const useStyles = makeStyles(theme => ({
  footer: {
    color: "#FFFFFF",
    background: "#52616B",
    marginTop: "15%"
  },
  copyright: {
    color: "#FFFFFF"
  }
}));

function Footer() {
  const classes = useStyles(); 

  return(
   <div className={classes.footer}>
    <Container>
      <Grid
        container
        direction="row"
        spacing={3}
        align="center"
      >
        <Grid item xs={12} sm={6}>
           
        </Grid>
        <Grid item xs={12} sm={6}>
        
        </Grid>
      </Grid>
      <div className={classes.copyright}>
        © 2020 Copyright: <a className={classes.copyright} href="https://jhonghawan.github.io/InfoCapstone2020/">CAST||AWAY</a>
      </div>
    </Container>
   </div>
  );
}

export default Footer; 