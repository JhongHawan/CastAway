import React from 'react';
import { Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { Timeline, TimelineItem, VerticalTimeline } from 'vertical-timeline-component-for-react';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';


import { useStyles } from './Styles';

import Hero from './Hero';
import Footer from './About/Footer';


function History() {
    const classes = useStyles();

    // SCROLL TO FUNCTIONS
    let scrollTo1890 = React.createRef();
    let executeScrollTo1890 = () => {
        scrollTo1890.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1910 = React.createRef();
    let executeScrollTo1910 = () => {
        scrollTo1910.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1920 = React.createRef();
    let executeScrollTo1920 = () => {
        scrollTo1920.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1930 = React.createRef();
    let executeScrollTo1930 = () => {
        scrollTo1930.current.scrollIntoView({ behavior: "smooth" })
    }
    let scrollTo1940 = React.createRef();
    let executeScrollTo1940 = () => {
        scrollTo1940.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1950 = React.createRef();
    let executeScrollTo1950 = () => {
        scrollTo1950.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1960 = React.createRef();
    let executeScrollTo1960 = () => {
        scrollTo1960.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1980 = React.createRef();
    let executeScrollTo1980 = () => {
        scrollTo1980.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo1990 = React.createRef();
    let executeScrollTo1990 = () => {
        scrollTo1990.current.scrollIntoView({ behavior: "smooth" })
    }

    let scrollTo2000 = React.createRef();
    let executeScrollTo2000 = () => {
        scrollTo2000.current.scrollIntoView({ behavior: "smooth" })
    }
    let scrollTo2010 = React.createRef();
    let executeScrollTo2010 = () => {
        scrollTo2010.current.scrollIntoView({ behavior: "smooth" })
    }

    // let scrollHere = React.createRef();

    // let scrollSmoothHandler = () => {
    //     scrollHere.current.scrollIntoView({ behavior: "smooth" })
    // }

    /**
      * @param {Int} props.date - year of the event
      * @param {String} props.title - title of the event
      * @param {String} props.detail - description of the event
      */
    function Event(props) {
        return (
            <TimelineItem
                key={props.key}
                dateText={props.date}
                dateInnerStyle={{ background: '#c9d6df', color: '#002851' }}
                style={{ color: '#F16841' }}
                bodyContainerStyle={{
                    background: '#F0F5F9',
                    padding: '20px',
                    borderRadius: '8px',
                    // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography style={{ paddingBottom: '0.5em' }} component="h5" variant="h5" color="secondary">
                    {props.title}
                </Typography>
                <Typography component="body1" variant="body1">
                    {props.detail}
                </Typography>
            </TimelineItem>
        )
    }


    function TimelineFunction() {
        return (
            <Timeline lineColor={'#F0F5F9'}>
                <Box ref={scrollTo1890}>
                    <Event
                        key="001"
                        date="1891"
                        title="Bureau of Immigration is Established"
                        detail="After realizing how much attention immigration needed, Congress authorized an immigration bureau. This Bureau was  responsible for enforcing immigration laws and processing legal immigrants."
                    />
                </Box>
                <Box ref={scrollTo1910}>
                    <Event
                        key="002"
                        date="1917"
                        title="The Immigration Act of 1917"
                        detail="Also known as the Literacy Act or the Asiatic Barred Zone Act. This act was passed with the goal of restricting immigration by imposing a literacy test on immigrants.This created a new category of inadmissible persons."
                    />
                </Box>
                <Box ref={scrollTo1920}>
                    <Event
                        key="003"
                        date="1921-1924"
                        title="The Quota Acts"
                        detail="Initially passed in 1921 the Emergency Quota Act limited the number of immigrants who could enter the United States. In 1924 the quotas were made stricter and more permanent."
                    />
                </Box>
                <Box ref={scrollTo1930}>
                    <Event
                        key="004"
                        date="1939-1945"
                        title="World War II"
                        detail="The persecution of Jews and other minorities during World War II and the Holocaust created a refugee crisis. There were more refugees than nations were able to accept."
                    />
                </Box>
                <Box ref={scrollTo1940}>
                    <Event
                        key="005"
                        date="1945"
                        title="The United Nations is Established"
                        detail="The United Nations is a government organization that strives to establish peace, security, friendly relations with other nations, and achieve international cooperation."
                    />
                </Box>
                <Event
                    key="006"
                    date="1945"
                    title="Presidential Directive on Displaced Persons"
                    detail="President Truman authorized that any displaced person or refugee receive expedited admission into the United States. This presidential decision also allowed refugees that were already in the United States to achieve lawful resident status."
                />
                <Event
                    key="007"
                    date="1948"
                    title="Displaced Persons Act of 1948"
                    detail="This was the first act that was specific to refugees, intended to help the millions of displaced persons that came out of World War II. The Displaced Persons Act expired in 1952, and admitted more than 350,000 people. "
                />
                <Box ref={scrollTo1950}>
                    <Event
                        key="008"
                        date="1950-1951"
                        title="The United Nations High Commissioner for Refugees"
                        detail="In response to the refugee crisis that occured after World War II the United Nations established the United Nations High Commissioner for Refugees (UNHCR). In 1951 the Convention Relating to the Status of Refugees was held. This convention defined legal protections for refugees."
                    />
                </Box>
                <Event
                    key="009"
                    date="1952"
                    title="Immigration and Nationality Act"
                    detail="The Immigration and Nationality Act helped with the reorganization and placement of immigration and nationality laws under the same statute. This Act helped maintain the quota system but was not entirely refugee specific. This caused refugees to be admitted in other programs separate from the quota system. "
                />
                <Event
                    key="010"
                    date="1953"
                    title="Refugee Relief Act of 1953"
                    detail="The Refugee Relief Act authorized visas for 200,000 immigrants. These visas were non-quota and helped refugees escape from communist countries. These visas were distributed between 1953 and 1956. "
                />
                <Box ref={scrollTo1960}>
                    <Event
                        key="011"
                        date="1959-1960"
                        title="Fair Share Act of July 14, 1960"
                        detail="The United Nations designated the year from 1959-1960 as World Refugee year. This was meant to raise awareness on the global refugee crisis. In response, the Fair Share Act of July 14, 1960 was passed. This act allowed 5,000 refugees to enter the US under the attorney general’s parole authority.  Additionally, refugees were allowed to become lawful residents after two years. "
                    />
                </Box>
                <Event
                    key="012"
                    date="1962"
                    title="Migration and Refugee Assistance Act of 1962"
                    detail="This act allowed Congress refugees fleeing from the Cold War in a monetary sense. This act also allowed about 20,000 additional refugees to enter the US between the years 1960-1965. "
                />
                <Event
                    key="013"
                    date="1967"
                    title="The 1967 United Nations High Commissioner for Refugees Refugee Protocol"
                    detail="In 1967 the UNHCR removed the parameters of the United Nations Convention Relating to the Status of Refugees. The Convention was now available universally."
                />
                <Box ref={scrollTo1980}>

                    <Event
                        key="014"
                        date="1980"
                        title="Refugee Act of 1980"
                        detail="After the influx of refugees from both Vietnam and Cambodia following the Vietnam War, Congress passed the Refugee Act of 1980. This act created new protocols to handle refugee admission. For example, the act provided the first statutory basis for asylum, increased the number of refugees that could be admitted each year, created an Office of Refugee Resettlement to oversee resettlement programs, and much more. "
                    />
                </Box>
                <Box ref={scrollTo1990}>
                    <Event
                        key="015"
                        date="1990"
                        title="The Lautenberg Amendment"
                        detail="In 1990, this Amendment reduced the amount of refugee applications from certain categories of people, including Jews, Christian minorities from the Former Soviet Union, and people from Vietnam, Laos, and Cambodia. Because the language of this Amendment is not permanent it must be extended each fiscal year."
                    />
                </Box>
                <Box ref={scrollTo2000}>
                    <Event
                        key="016"
                        date="2002"
                        title="Homeland Security Act"
                        detail="This Act is responsible for creating the Department of Homeland Security. This was done by joining 22 different agencies and bureaus. The creation of the Department of Homeland Security was a response to the terrorist attack on September 11th 2001"
                    />
                </Box>
                <Box ref={scrollTo2010}>
                    <Event
                        key="017"
                        date="2012"
                        title="Deferred Action for Childhood Arrivals (DACA)"
                        detail="This executive order was a response to the millions of unauthorized immigrants living in the US. This order gave minor children that had lived in the US since June 2007 protection from deportation."
                    />
                </Box>
                <Event
                    key="018"
                    date="2014"
                    title="Deferred​ Action for Parents of Americans and Lawful Permanent Residents (DAPA) and DACA Program expanded"
                    detail="This executive order was issued by Obama during his presidency with the intention of protecting unauthorized immigrants who had children that were American citizens or lawful permanent residents from deportation."
                />
                <Event
                    key="019"
                    date="2017"
                    title="President Trump's Travel Ban/Muslim Travel Ban"
                    detail="On the 27h of January President Donald Trump signed an executive order halting all refugee admissions and temporarily barring people from seven Muslim-majority countries. The seven countries included Iraq, Syria, Iran, Libya, Somalia, Sudan, and Yemen. The ban on Syrian refugees was indefinite. The order also introduced a quota on the number of refugees accepted in that year."
                />
                <Event
                    key="020"
                    date="2019"
                    title="Final Rule on Public Charge Ground of Inadmissibility"
                    detail="Under President Trump's administration the Department of Homeland Security reviewed and finalized the list of benefits and other factors that must be considered when determining whether or not an applicant is likely to become a public charge."
                />
            </Timeline>
        );
    }

    return (
        <div>
            <Hero
                showCard={false}
                sectionTitle="History"
            />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Container className={classes.historyScroll}>
                    <Box onClick={executeScrollTo1890}>
                        <Typography variant="h6" color="secondary">
                            1890
                        </Typography>
                    </Box>


                    <Box onClick={executeScrollTo1910}>
                        <Typography variant="h6" color="secondary">
                            1900
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1910}>
                        <Typography variant="h6" color="secondary">
                            1910
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1920}>
                        <Typography variant="h6" color="secondary">
                            1920
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1930}>
                        <Typography variant="h6" color="secondary">
                            1930
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1940}>
                        <Typography variant="h6" color="secondary">
                            1940
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1950}>
                        <Typography variant="h6" color="secondary">
                            1950
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1960}>
                        <Typography variant="h6" color="secondary">
                            1960
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1980}>
                        <Typography variant="h6" color="secondary">
                            1970
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1980}>
                        <Typography variant="h6" color="secondary">
                            1980
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo1990}>
                        <Typography variant="h6" color="secondary">
                            1990
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo2000}>
                        <Typography variant="h6" color="secondary">
                            2000
                        </Typography>
                    </Box>

                    <Box onClick={executeScrollTo2010}>
                        <Typography variant="h6" color="secondary">
                            2010
                        </Typography>
                    </Box>
                </Container>
            </Container>
           
           {/*  //TODO ADD Scroll to TOop Button */}

            <TimelineFunction />
            {/* <Footer /> */}
        </div>
    );
}

export default History; 
