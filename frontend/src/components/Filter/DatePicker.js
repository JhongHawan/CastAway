import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

/**
 * TODO: Pull the options out from here and give it to the visualization.js file for the API call query params. 
 */
function DatePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(Date.parse(new Date().getFullYear()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={props.label}
          format="yyyy"
          maxDate={Date.parse(new Date().getFullYear())}
          minDate={Date.parse('January 1, 2003')}
          value={selectedDate}
          onChange={handleDateChange}
          openTo="year"
          views={["year"]}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker; 