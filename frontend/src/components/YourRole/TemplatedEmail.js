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
                          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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