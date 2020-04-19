import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   button: {
     display: 'block',
     marginTop: theme.spacing(2),
   },
   formControl: {
     margin: theme.spacing(1),
     minWidth: 120,
   },
 }));

function Filter() {
   const classes = useStyles();
   /**
    * TODO: Edit the state here and set it to the defaults. 
    */
   const [age, setState] = React.useState({
      age: '',
      name: 'hai',
   });
   
   const [open, setOpen] = React.useState(false);

   const handleChange = (event) => {
      setState(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

   /**
   * TODO: Add the available countries from the API. 
   */
   return (
      <div>
         <FormControl className={classes.formControl}>
            <InputLabel id="graph-type">Graph Type</InputLabel>
            <Select
               labelId="graph-type"
               id="graph-type-open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={age}
               onChange={handleChange}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value={10}>United States</MenuItem>
               <MenuItem value={20}>Pakistan</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
         </FormControl>
      </div>
   );
}

export default Filter; 