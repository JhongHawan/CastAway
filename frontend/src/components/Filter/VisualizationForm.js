import React from 'react'
import { Form, Field } from 'react-final-form'
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker'; 
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import apiCalls from '../../features/visualization/apiCalls'; 

const ChartTypeAdapter = ({ input, ...rest }) => (
   <Select 
      {...input} 
      {...rest}
   searchable />
);

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

const required = value => (value ? undefined : 'Required')

const defaultDate = new Date('2020'); 

const defaultOrig = ['']; 

const defaultDest = ['']; 

/**
 * * Returns an array of years between a given startYear(Inclusive) and endYear(Inclusive).
 * @param {Number} startYear 
 * @param {Number} endYear 
 */
const getYearRange = (startYear, endYear) => {
   let years = [];
   while (startYear <= endYear) {
      years.push(startYear++); 
   }
   console.log(years);
   return years; 
}

const mapOrig = (orig) => {
   if(orig == null) {
      return [''];  
   } else {
      return orig.map(country => country.value);
   }
}

const mapDest = (dest) => {
   if(dest == null) {
      return ['']; 
   } else {
      return dest.map(country => country.value);
   } 
}

function VisualizationForm(props) {

   const dispatch = useDispatch();


   const { unhcrSubData, loading } = useSelector(
      (state) => {
         return {
            unhcrSubData: state.unhcrSub.data,
            loading: state.refugee.loading
         }
      },
      shallowEqual
   ); 

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

   return(
      <Form
         onSubmit={onSubmit}
         render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
               <Paper style={{ padding: 16, background: "primary" }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                     <Grid item xs={12}>
                        <Field
                           name='chartType'
                           initialValue='bar'
                           placeholder='Chart Type'
                           allowNull={false}
                           component={ChartTypeAdapter}
                           options={props.chartType}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                           name='orig'
                           initialValue={defaultOrig}
                           placeholder='Origin Country'
                           allowNull={false}
                           component={ReactSelectAdapter}
                           options={origFormat}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                           name='dest'
                           initialValue={defaultDest}
                           placeholder='Destination Country'
                           allowNull={false}
                           component={ReactSelectAdapter}
                           options={destFormat}
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                        name='startYear'
                        dateFormat="yyyy"
                        validate={required}
                        initialValue={defaultDate}
                        component={DatePickerAdapter}
                        label='Start Year'
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                        name='endYear'
                        dateFormat="yyyy"
                        validate={required}
                        initialValue={defaultDate}
                        component={DatePickerAdapter}
                        label='End Year'
                        />
                     </Grid>
                     <Grid item style={{ marginTop: 16 }}>
                        <Button color="secondary" variant="contained" onClick={() => {
                           apiCalls.fetchUnhcrSub(
                              dispatch,
                              {
                                 year: getYearRange(values.startYear.getFullYear(), values.endYear.getFullYear()),
                                 origin: mapOrig(values.orig),
                                 resettlement: mapDest(values.dest)
                              }  
                           );

                           // No data was retrieved then the user chose countries which don't share any data. 
                           // Have to access store data here.  
                           if (unhcrSubData.length == 0) {
                              alert('No records were found for the given input. Please try adding or removing countries and expanding the year range.');
                           }
                        }}>
                           Get UNHCR Sub Data
                        </Button>
                     </Grid>
                     {/* <Grid item style={{ marginTop: 16 }}>
                        <Button
                        type="button"
                        variant="contained"
                        disabled={submitting || pristine}
                        onClick={reset}
                        >
                        Reset
                        </Button>
                     </Grid> */}
                  </Grid>
               </Paper>
               <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
         )}
      />
   );
}

export default VisualizationForm; 