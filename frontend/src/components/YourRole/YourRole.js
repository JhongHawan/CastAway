import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '../Divider'; 
import Hero from '../Hero';
import CallToAction from '../CallToAction';
import {useStyles} from '../Styles'; 
import TemplatedEmail from './TemplatedEmail'; 
import Container from '@material-ui/core/Container'; 
import Stepper from '../Stepper';

const customStyles = makeStyles(theme => ({
  heroTop: {
    margin: theme.spacing(4)
  }
})); 

function YourRole() {
  const customClasses = customStyles(); 
  const classes = useStyles(); 

  return (
    <div>
      <Hero
        showCard={false}
        sectionTitle='Your Role'
        // cardTitle="WHY DOES IT MATTER?"
        // cardSubtitle="Subtitle Examples"
        // cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
      />
      <Container>
        <Grid
          container
          align="center"
          justify="center"
          spacing={6}
        >
          <Grid item xs={12}           
            className={customClasses.heroTop}
          >
            <Divider title="HOW YOU CAN HELP" />
          </Grid>
          <Grid item xs={12}>
            <Stepper />
          </Grid>
          <Grid item xs={12}>
            <Divider title="TAKE ACTION" />
          </Grid>
          <Grid item xs={12}>
            <TemplatedEmail />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default YourRole; 