import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Carousel from './Carousel';
import MythCard from './MythCard';

import { useStyles } from './Theme';


function HomePage() {
    const classes = useStyles(); 

    return (
        <div>
            <Carousel />
            <Box className={classes.homeSectionSpace}>
                <h1 className={classes.homeSectionTitle}>WHY IT MATTERS</h1>
                <h6 className={classes.homeSectionSubtext}>WHY IT MATTERS TO US & WHY IT SHOULD MATTER TO YOU.</h6>
                <p className={classes.text}>There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.  </p>
                <p className={classes.text}>Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.</p>
            </Box>
            <Box className={classes.homeSectionSpace}>
                <h1 className={classes.homeSectionTitle}>CALL TO ACTION</h1>
                <h6 className={classes.homeSectionSubtext}>WHAT IS YOU ROLE?</h6>
                <p className={classes.text}>Often with political issues people assume that they don’t have enough power to do anything, that they are not strong enough to make a difference. This however is one of the most harmful mindsets to have. Every citizen has both the right and responsibility to vote, get involved in their communities, and enact the change they wish to see. Voting is a basic action that allows every individual in the United States to express their personal opinion on issues they consider important to them. This includes state, federal, and local elections. It is important that this right is both appreciated and respected. A lot of people around the world have this kind of privilege.  </p>
                <p className={classes.text}>It doesn’t just end there. There are many more ways beyond just voting to get your voice heard. It is important to know what is going on in your community and ultimately your country. Staying up to date with news and policies allows for informed opinions that have more impact. Individuals can also make a lot of impact by writing letters to public officials about issues that are important to them. Your, congressmen all represent you, your voice. Shedding light on important topics and letting your representatives know ignites a conversation with endless possibilities. </p>
                <p className={classes.text}>On the other side of things, misinformation and fake news are both extremely dangerous and harmful when it comes to politics, society, and the ability for the public to make knowledgeable decisions. Additionally, the spread of misinformation often goes unnoticed but causes unmatchable harm. </p>
                <p className={classes.text}>It is your chance to make a change. No action is too small. It is time to stand up and fight for what is right, and give a platform to those who haven’t had access to it in the past. </p>
            </Box>
            <Box className={classes.homeSectionSpace}>
                <h1 className={classes.homeSectionTitle}>COMMON REFUGEE MYTHS</h1>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <MythCard
                            mythTitle="Refugees are not vetted"
                            mythDetails="blah" />
                    </Grid>
                    <Grid item lg={4}>
                        <MythCard
                            mythTitle="All refugees are terrorists with an agenda"
                            mythDetails="blah" />
                    </Grid>
                    <Grid item lg={4}>
                        <MythCard
                            mythTitle="The refugee crisis is over"
                            mythDetails="blah" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HomePage;