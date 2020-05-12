import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '../Divider';
import Hero from '../Hero';
import CallToAction from '../CallToAction';
import { useStyles } from '../Styles';
import TemplatedEmail from './TemplatedEmail';
import Container from '@material-ui/core/Container';
import Stepper from '../Stepper';
import Typography from '@material-ui/core/Typography';

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
            <Typography variant="body1">
              Please be advised that this email template needs to be filled out with personal information and some parts will need to be removed.
            </Typography>
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