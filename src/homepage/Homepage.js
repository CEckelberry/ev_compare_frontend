import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
import cityIllustration from '../images/city_illustration.jpg';

import ford from '../images/evlogos/ford.png';
import tesla from '../images/evlogos/tesla.png';
import nissan from '../images/evlogos/nissan.png';
import rivian from '../images/evlogos/rivian.png';
import nio from '../images/evlogos/nio.svg';
import vw from '../images/evlogos/vw.png';
import gm from '../images/evlogos/gm-.png'
import volvo from '../images/evlogos/volvo.png'

import { Grommet, Box, Button, Grid, Text, Image, Heading } from 'grommet';
import { User } from 'grommet-icons';

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  //console.debug("Homepage", "currentUser=", currentUser);

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

  return (

      <div className="Homepage">
              <Grommet background="#F8F8F8" theme={theme}>
                <Grid
                    fill
                    columns={{count: 'fit', size: 'full'}}
                >

                        {currentUser
                            ? 
                            <div>
                            <Box height={{ min: '475px' }} justify="center" width={{min:' 250px' }}direction="row" align="center" fit='contain' pad="large" background={{image: `url(${cityIllustration}) `, opacity: 'strong', }}>
                                <Box elevation="medium" background="#7D4CDB" align="center" round="small">
                                    <Text size='5xl' margin="small">
                                        Welcome Back, {currentUser.firstName || currentUser.username}!
                                    </Text> 
                                </Box>
                            </Box>
                            <Box direction="row" justify="center">
                                <Heading size="medium" margin="3%">EVCompare is now yours to explore! Have fun comparing those electric vehicles!</Heading>
                            </Box>
                            <Box direction="row" background="#white" gap="small" justify="center">
                                <Box height="small" width="small">
                                    <Image src={ford}  fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={tesla} fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={nio} fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={nissan} fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={rivian} fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={vw}  fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={gm}  fit="contain"></Image>
                                </Box>
                                <Box height="small" width="small">
                                    <Image src={volvo}  fit="contain"></Image>
                                </Box>
                            </Box>

                            </div>

                            : (
                            <>  
                                <div>
                                    <Box height={{ min: '475px' }} width={{min:' 250px' }}direction="row" fit='contain' pad="large" background={{image: `url(${cityIllustration}) `, opacity: 'strong', }}>
                                        <Box pad={{ vertical: 'medium' }} elevation="medium" height={{ max: '12rem' }} width={{ min: '18rem' }} background="#7D4CDB" align="center" justify="center" round="small">
                                                <Heading level={2} size="medium" margin="2%">EV Shopping</Heading>
                                                <Heading level={2} size="medium" margin="2%">Made Simple.</Heading>
                                                <Box direction="row" justify="center" gap="small" pad={{horizontal: 'medium'}}> 
                                                    <Link pad="medium" to="/login"><Button icon={<User />} label="LOGIN&nbsp;" onClick={() => {}}  size="medium"/></Link>
                                                    <Link pad="medium" to="/signup"><Button icon={<User />} label="SIGNUP" onClick={() => {}}  size="medium"/></Link>
                                                </Box>
                                        </Box>
                                    </Box>
                                    <Box direction="row" justify="center">
                                        <Heading size="medium" margin="3%">Compare Electric Vehicles from multiple manufacturers with detailed insights on the things you care about most!</Heading>
                                    </Box>
                                    <Box direction="row" background="#white" gap="small" justify="center">
                                        <Box height="small" width="small">
                                            <Image src={ford}  fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={tesla} fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={nio} fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={nissan} fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={rivian} fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={vw}  fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={gm}  fit="contain"></Image>
                                        </Box>
                                        <Box height="small" width="small">
                                            <Image src={volvo}  fit="contain"></Image>
                                        </Box>
                                    </Box>
                                </div>
                            </>
                            )}
                </Grid>
        </Grommet>
      </div>
  );
}

export default Homepage;