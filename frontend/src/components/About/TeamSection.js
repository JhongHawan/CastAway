import React from 'react';
import Grid from '@material-ui/core/Grid';
import TeamCard from './TeamCard'; 

function TeamSection() {

  return(
   <div>
      <Grid
         container
         spacing={3}
         align="center"
      >
         <Grid item xs={12} md={3}>
         <TeamCard 
            imgPath="/angela.png"
            imgTitle="angela"
            teamName="Angela Shen"
            description="UX Designer"
            contact="angelashen0607@gmail.com"
            />
         </Grid>
         <Grid item xs={12} md={3}>
         <TeamCard 
            imgPath="/brian.jpg"
            imgTitle="brian"
            teamName="Brian Jhong"
            description="Full-Stack Developer"
            contact="jhongb@uw.edu"
            />
         </Grid>
         <Grid item xs={12} md={3}>
         <TeamCard 
            imgPath="/rahma.jpg"
            imgTitle="rahma"
            teamName="Rahma Kamel"
            description="Project Manager/Front-end Developer"
            contact="kamelr@uw.edu"
            />
         </Grid>
         <Grid item xs={12} md={3}>
         <TeamCard 
            imgPath="/tracy.jpg"
            imgTitle="tracy"
            teamName="Tracy Huynh"
            description="Project Manager/Front-end Developer"
            contact="thuynh12@uw.edu"
            />
         </Grid>
      </Grid>
   </div>
);
}

export default TeamSection; 