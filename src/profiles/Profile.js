import React, { useContext } from "react";
import CollapsableNav from "../navbar/CollapsableNav";
import {Footer} from "../footer/Footer";
import { Grommet, Box, Button, Grid, Image, Heading ,Avatar} from 'grommet';
import UserContext from "../auth/UserContext";
import windmills from "../images/windmills.jpg";


function Profile(){

const { currentUser } = useContext(UserContext);





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
    <Grommet theme={theme}>
        <Grid>
            <Box background={{image: `url(${windmills}) `, opacity: 'weak',}} fill>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" >
                        <Heading size="large" color="#333333">Profile</Heading>
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" size="">
                        <Avatar size="3xl" src={currentUser.profile_image}>SY</Avatar>
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none">
                        <Heading size="medium" color="#333333" >Username: {currentUser.username}</Heading>
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none">
                        <Heading size="medium" color="#333333" >First Name: {currentUser.firstName}</Heading>
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" >
                        <Heading size="medium" color="#333333" >Last Name: {currentUser.lastName}</Heading>
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box background="##F8F8F8" align="center" pad="none" >
                        <Heading size="medium" color="#333333" >Email: {currentUser.email}</Heading>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grommet>
    </div>
)

}

export default Profile;