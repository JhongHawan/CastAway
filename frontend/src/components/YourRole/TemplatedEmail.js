import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form'
import Divider from '@material-ui/core/Divider'; 
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#52616B"
  },
  textArea: {
    margin: '5% auto',
    width: '90%'
  },
  copyButton: {
    margin: '2.5%'
  }
})); 
/**
 * ! Don't Really need the onSubmit if it's' not gonna be a form. 
 * @param {*} ms 
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * TODO: Change this to copy the email later. 
 * @param {*} values 
 */
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'Required')

function TemplatedEmail() {
  const classes = useStyles();

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const recipients = [
    {
      value: 'rep1',
      label: 'Representative 1'
    },
    {
      value: 'rep2',
      label: 'Representative 2'
    }
  ]
  
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
    alert('Copied email template to clipboard!');
  };

  function getToday() {
    var today = new Date();
    var date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear() ;
    return(
      date + "\n"
    );
  }
  
  function getEmailAttention() {
    let specialPlaceholder = "(FIRST NAME) (LAST NAME)"
    return(
      "\nThe Honorable " + specialPlaceholder + "\n" + "(CAPITOL ADDRESS)" + "\n"
    )
  }
  
  function getSubject() {
    return(
      "RE: (state the topic or include the bill number, author and subject if you are writing to support or oppose a particular legislative bill) \n"
    )
  }

  function getEmailContent() {
    return(
      "Dear (ASSEMBLY MEMBER/SENATOR) (LAST NAME) My name is (YOUR FIRST NAME, LAST NAME) and I am a regional center consumer (family member/service provider/advocate/community member) who resides in your district. \n \n(State why you support or oppose the bill or other issue here. Choose up to three of the strongest points that support your position and state them clearly.) \n \n(Include a personal story. Tell your representative why the issue is important to you and how it affects you, your family member and your community.) (Tell your representative how you want her or him to vote on this issue and ask for a response. Be sure to include your name and address on both your letter and envelope.)"
    )
  }

  function getClosing() {
    return(
      "\n \nSincerely, \n \n" + "(YOUR FIRST AND LAST NAME) \n" + "(STREET ADDRESS) \n(CITY), (STATE), (ZIP CODE)"
    )

  }

  return (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      variant="h6"
                    >
                      Templated Email to Representative
                    </Typography>
                  </CardContent>
                  <Divider light />
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <TextareaAutosize 
                        className={classes.textArea}
                        ref={textAreaRef}
                        rowsMin={25}
                        placeholder='Type or edit your email here'
                        defaultValue={
                          getToday() + 
                          getEmailAttention() +
                          getEmailContent() +
                          getClosing()
                        }
                      />
                    </Grid>
                  </Grid>
                </Card>
            <Button
              className={classes.copyButton}
              color="primary"
              size="large"
              variant="contained"
              onClick={copyToClipboard}
            >
              COPY
            </Button>
          </form>
          
        )}
    />
    
  );
}

export default TemplatedEmail; 