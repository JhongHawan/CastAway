import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Footer from './About/Footer';
import Hero from './Hero';
import { useStyles } from './Styles'


function YourRole() {
   const classes = useStyles();

   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Your Role."
         />
      </div>
   );
}

export default YourRole; 
