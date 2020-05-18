import React from 'react';
import { Container, Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '../Divider';
import Hero from '../Hero';
import TemplatedEmail from './TemplatedEmail';
import Stepper from '../Stepper';


function YourRole() {
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