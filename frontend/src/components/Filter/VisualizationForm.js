import React from 'react'
import { Form, Field } from 'react-final-form'
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker'; 
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import apiCalls from '../../features/visualization/apiCalls'; 
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';

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

const defaultStartDate = new Date('2003'); 
const defaultEndDate = new Date('2020'); 
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

   const useStyles = makeStyles(theme => ({
      cardStyle: {
         padding: 24, 
         boxShadow: '0 5px 10px rgba(0,0,0,0.19), 0 1px 3px rgba(0,0,0,0.23)',
         backgroundColor: props.color
      }
    }));

   const dispatch = useDispatch();

   const classes = useStyles(); 

   const { unhcrSubData, loading } = useSelector(
      (state) => {
         return {
            unhcrSubData: state.unhcrSub.data,
            loading: state.refugee.loading
         }
      },
      shallowEqual
   );
   
   /** 
    * * Function to write to json file for user to download if data has been retrieved from API.
    * * Otherwise alerts user to fetch data first. 
    * ! Currently only downloading data from UNHCR API.
  */
  const downloadFile = async () => {
   if (unhcrSubData.length == 0) {
     alert("No data has been retrieved yet, you'd be downloading an empty file! HINT: Try getting the data first!");
   } else {
     const fileName = "data";
     const json = JSON.stringify(unhcrSubData);
     const blob = new Blob([json],{type:'application/json'});
     const href = await URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.href = href;
     link.download = fileName + ".json";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   }
 }

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
               <Card className={classes.cardStyle}>
                  <Grid container alignItems="flex-start" spacing={2}>
                     <Grid item xs={12}>
                        <Typography
                           variant="h5"
                        >
                           Choose different options to change the data of your charts.
                        </Typography>
                        <Typography
                           color="secondary"
                        > 
                           NOTICE: If charts remain blank the api does not have the requested data
                        </Typography>
                     </Grid>
                     {/* <Grid item xs={12}>
                        <Field
                           name='chartType'
                           initialValue='bar'
                           placeholder='Chart Type'
                           allowNull={false}
                           component={ChartTypeAdapter}
                           options={props.chartType}
                        />
                     </Grid> */}
                     <Grid item xs={12}>
                        <Field
                           name='orig'
                           initialValue={defaultOrig}
                           placeholder='Origin Country'
                           allowNull={false}
                           component={ReactSelectAdapter}
                           options={origFormat}
                        />
                     </Grid>
                     <Grid item xs={12}>
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
                        parsedDate={Date.parse('January 1, 2003')}
                        initialValue={defaultStartDate}
                        component={DatePickerAdapter}
                        label='Start Year'
                        />
                     </Grid>
                     <Grid item xs={6}>
                        <Field
                        name='endYear'
                        dateFormat="yyyy"
                        validate={required}
                        parsedDate={Date.parse('January 1, 2019')}
                        initialValue={defaultEndDate}
                        component={DatePickerAdapter}
                        label='End Year'
                        />
                     </Grid>
                     <Grid item xs={12} style={{ marginTop: 16 }}>
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
                           // if (unhcrSubData.length == 0) {
                           //    alert('No records were found for the given input. Please try adding or removing countries and expanding the year range.');
                           // }
                        }}>
                           Create Visualization
                        </Button>
                     </Grid>
                     <Grid item xs={12} style={{ marginTop: 16 }}>
                     <Button color="primary" variant="contained" onClick={downloadFile}>
                        Download Data 
                     </Button>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography component="h2">
                           Data Source: <a href="https://api.unhcr.org/docs/index.html">UNHCR API</a>
                        </Typography>
                     </Grid>
                  </Grid>
               </Card>
               {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
         )}
      />
   );
}

export default VisualizationForm; 