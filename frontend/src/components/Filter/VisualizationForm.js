import React from 'react'
import { Form, Field } from 'react-final-form'
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker'; 
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import apiCalls from '../../features/visualization/apiCalls'; 

const ReactSelectAdapter = ({ input, ...rest }) => (
   <Select 
      {...input} 
      {...rest}
      isMulti
   searchable />
);

const DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
   <DatePicker selected={value} onChange={date => onChange(date)} {...rest} />
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
   await sleep(300)
   window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : "Required");

function VisualizationForm(props) {

   const dispatch = useDispatch();

   const orig = props.orig; 
   const origFormat = orig.map(({ code:value, region, country_name:label }) => ({
      value,
      region,
      label,
   }));

   const dest = props.dest; 
   const destFormat = dest.map(({ code:value, region, country_name:label }) => ({
      value,
      region,
      label,
   }));

   // // Grab all the values from the object. The only things that need filtering are the date. 
   // const options = ({
   //    year: [values.startYear.getYear(), values.endYear.getYear()],
   //    origin: values.orig.map(country => country.value),
   //    resettlement: values.dest.map(country => country.value)
   //  });

   return(
      <Form
         onSubmit={onSubmit}
         render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
               <Paper style={{ padding: 16, background: "primary" }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                     <Grid item xs={12}>
                        <Field
                           name='chartType'
                           placeholder='Chart Type'
                           validate={required}
                           component={ReactSelectAdapter}
                           options={props.chartType}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                           name='orig'
                           placeholder='Origin Country'
                           component={ReactSelectAdapter}
                           options={origFormat}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                           name='dest'
                           placeholder='Destination Country'
                           component={ReactSelectAdapter}
                           options={destFormat}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                        name='startYear'
                        dateFormat="yyyy"
                        validate={required}
                        component={DatePickerAdapter}
                        label='Start Year'
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                        name='endYear'
                        dateFormat="yyyy"
                        validate={required}
                        component={DatePickerAdapter}
                        label='End Year'
                        />
                     </Grid>
                     <Grid item style={{ marginTop: 16 }}>
                     <Button color="secondary" variant="contained" onClick={() => {
                        apiCalls.fetchUnhcrSub(
                           dispatch,
                           {
                              year: [2003, 2004, 2005, 2006, 2012],
                              origin: values.orig.map(country => country.value),
                              resettlement: values.dest.map(country => country.value)
                           }  
                        );
                     }}>
                        Get UNHCR Sub Data
                     </Button>
                     </Grid>
                     <Grid item style={{ marginTop: 16 }}>
                        <Button
                        type="button"
                        variant="contained"
                        onClick={reset}
                        disabled={submitting || pristine}
                        >
                        Reset
                        </Button>
                     </Grid>
                  </Grid>
               </Paper>
               <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
         )}
      />
   );
}

export default VisualizationForm; 