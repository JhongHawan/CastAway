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
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[today.getMonth()]
    var date = month + " " + today.getDate() + ', ' + today.getFullYear() + "\n \n";
    return (
      date
    );
  }

  function getEmailAttention() {
    let attention = "The Honorable [ CONGRESS MEMBER NAME ] \n"
    let address = "[ OFFICE ADDRESS ] \n[ UNITED STATES HOUSE OF REPRESENTATIVES / UNITED STATES SENATE ] \n[ CITY ], [ STATE ], [ ZIP CODE]\n"
    return(
      attention + address + "\n"
    )
  }

  function getSubject() {
    return (
      "RE: Support The Refugees Coming to America\n\n"
    )
  }

  function getEmailContent() {
    let greeting = "Dear [ REPRESENTATIVE / SENATOR ]:\n\n"
    let intro = "My name is [ FIRST NAME ] [ LAST NAME ]. I am a concerned [ CITIZEN / RESIDENT ] within your district. I wish to express my passion for refugee rights to you. I hope you listen and understand the community you represent a bit more in this letter.\n"
    let selfIntro = "{ OPTIONALLY - SHARE ABOUT YOURSELF. BEING PERSONABLE MATTERS }\n\n"
    let main = "I am writing to you to urge you to support refugees. Our country holds strength in our diversity and our power to support those in need. As a proud American citizen, I encourage you to create a country where all are welcome. My community is enriched by the many cultures that resides within it. America is a country built on by immigrants, our greatness comes from our differences. We must do the right thing by supporting those that need our help.\n\n"
    let personalStory = "{ OPTIONALLY - SHARE A PERSONAL STORY YOU HAVE ABOUT REFUGEES OR IMMIGRANTS }\n\n"
    return (
      greeting + intro + selfIntro + main + personalStory
    )
  }

  function getClosing() {
    let ending = "Sincerely,\n\n"
    let name = "[ FIRST NAME ] [ LAST NAME ]\n"
    let address = "[ STREET ADDRESS ] \n[ CITY ], [ STATE ], [ ZIP CODE ]\n\n"
    return (
      ending + name + address
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
                Templated Email
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
                    getSubject() +
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