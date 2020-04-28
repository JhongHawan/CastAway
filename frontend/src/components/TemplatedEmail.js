import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';  
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form'
import Select from 'react-select';
import Divider from '@material-ui/core/Divider'; 
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#52616B"
  }
})); 

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select 
    {...input} 
    {...rest}
  searchable />
);

/**
 * ! Don't Really need the onSubmit and stuff I guess. 
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
                  <Grid
                    container alignItems="flex-start" spacing={2}
                  >
                    <Grid className={classes.recipient} item xs={12}> 
                      <Field
                        name='recipient'
                        defaultValue={'rep1'}
                        placeholder='Representative'
                        allowNull={false}
                        component={ReactSelectAdapter}
                        options={recipients}
                      >
                      </Field>
                    </Grid> 
                    <Divider light/>
                    <Grid className={classes.subject} item xs={12}> 
                      <Field
                        name='subject'
                        component={TextFieldAdapter}
                        validate={required}
                        label='Subject Line'
                      >
                      </Field>
                    </Grid>
                    <Divider light/>
                    <Grid className={classes.textArea} item xs={12}> 
                    
                    </Grid>
                  </Grid>
                </Card>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            <Button
              color="primary"
              size="large"
              variant="contained"
              onClick={onSubmit}
            >
              COPY
            </Button>
          </form>
          
        )}
    />
    
  );
}

export default TemplatedEmail; 