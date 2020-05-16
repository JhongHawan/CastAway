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
import Box from '@material-ui/core/Box';

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

        <Divider title="HOW YOU CAN HELP" />
        <Container maxWidth={false} style={{ textAlign: 'center' }}>
          <Stepper />
        </Container>
        <Divider title="TAKE ACTION" />
        <Container maxWidth={false} style={{ textAlign: 'center ' }}>
          <Box style={{ paddingBottom: '2rem'}}>
            <Typography variant="body1">
              Please be advised that this email template needs to be filled out with personal information and some parts will need to be removed.
          </Typography>
          </Box>
          <TemplatedEmail />
        </Container>

      </Container>
    </div>
  );
}

export default YourRole; 