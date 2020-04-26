import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function DatePicker(props) {

  const [selected, setSelectedDate] = React.useState(props.parsedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={props.label}
          format={props.dateFormat}
          maxDate={Date.parse(new Date().getFullYear())}
          minDate={Date.parse('January 1, 2003')}
          value={selected}
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