import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CollapsableNav from "../navbar/CollapsableNav";
import {Footer} from "../footer/Footer";
import { Grommet, Box, Button, Grid, Image, Heading} from 'grommet';
import UserContext from "../auth/UserContext";
import windmillsSolar from "../images/windmills_solar.jpg";
import lightBulb from "../images/newlights.jpg";
import evIllustration from "../images/ev_illustration.jpg";
import windmills from "../images/windmills.jpg";

import downArrow from "../images/down-arrow.png";

function Aboutus() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);
  
    const theme = {
      global: {
        colors: {
          brand: '#7D4CDB',
          },
    
        font: {
          family: 'Roboto',
          size: '18px',
          height: '20px',
        },
      },
    };

    return(
        <div>
        <CollapsableNav />
        <Grommet>
            <Grid>
                <Box height={{ min: '475px' }} width={{min:' 250px' }} direction="row" background={{image: `url(${windmillsSolar}) `, opacity: 'weak'}} justify="center" margin="medium">
                    <Box background="##F8F8F8" align="center" pad="none" margin="medium" >
                        <Heading size="large" color="#333333" margin={{bottom: "-1%"}}>Who We Are</Heading>
                        <Heading level="3" size="small" color="#333333">Ever notice how there is no "one stop shop" for comparing every EV on the market in the United States?</Heading>
                        <Box height="small" width="small">
                            <Image src={downArrow} fit="contain"></Image>
                        </Box>
                    </Box>
                </Box>
                <Box height={{ min: '475px' }} width={{min:' 250px' }} margin={{bottom:''}} direction="row" background={{image: `url(${lightBulb}) `, opacity: 'weak',}} justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" margin="medium">
                        <Heading size="large" color="#333333" margin={{bottom: "-1%"}}>I Had An Idea</Heading>
                        <Heading level="3" size="small" color="#333333">Why not make an application accessible by all, with the information you really need, about one of your life's biggest purchases?</Heading>
                        <Box height="small" width="small">
                            <Image src={downArrow} fit="contain"></Image>
                        </Box>
                    </Box>
                </Box>
                <Box height={{ min: '475px' }} width={{min:' 250px' }} direction="row" background={{image: `url(${evIllustration}) `, opacity: 'weak'}} justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" margin="medium" >
                        <Heading size="large" color="#333333" margin={{bottom: "-1%"}}>EVCompare To The Rescue!</Heading>
                        <Heading level="3" size="small" color="#333333">I built EVCompare when I realized consumers had no solid options to compare electric vehicles from multiple different manufacturers</Heading>
                        <Box height="small" width="small">
                            <Image src={downArrow} fit="contain"></Image>
                        </Box>
                    </Box>
                </Box>
                <Box height={{ min: '475px' }} width={{min:' 250px' }} direction="row" background={{image: `url(${windmills}) `, opacity: 'weak'}} justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" margin="medium" >
                        <Heading size="large" color="#333333" margin={{bottom: "-1%"}}>EV Benefits</Heading>
                        <Heading level="3" size="small" color="#333333">Based on where you live (and where your energy comes from) you can drop your emissions over the life cycle of a car by up to 65% by switching to an EV</Heading>
                        <Box height="small" width="small">
                            <Image src={downArrow} fit="contain"></Image>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grommet>

        <Footer />
        </div>
    )
}

export default Aboutus