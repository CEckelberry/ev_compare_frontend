import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import EVApi from "../api/api";
import { Grommet, Box, Button, Grid, Text, ResponsiveContext, Tab, Tabs, Image, Heading} from 'grommet';
import UserContext from "../auth/UserContext";
import background from "../images/ev_list_background.jpg"
import LoadingSpinner from "../common/LoadingSpinner";
import Version from "./Version";


function EV(){
    const { id } = useParams();
    const { currentUser } = useContext(UserContext);
    const [versions, setVersions] = useState([]);
    const size = useContext(ResponsiveContext);

    const [index, setIndex] = useState(0);
    
    const onActive = nextIndex => {
      console.log('nextIndex: ',nextIndex);
      setIndex(nextIndex)
    };


    useEffect(function getEVOnMount() {
      console.debug("EVList useEffect getEVOnMount");
      getEV();
    }, []);

  /** Triggered by search form submit; reloads evs. */
  async function getEV() {
      let ev = await EVApi.getEV(id);
      setVersions(ev);
  }
    
  const versionsList = versions.length > 0 ? versions.map(version => {
    return(
      <Tab title={version.version_name}>
          <Version 
            key = {version.id}
            name = {version.version_name}
            price = {version.price}
            range = {version.range}
            battery_capacity = {version.battery_capacity}
            efficiency = {version.efficiency}
            seats = {version.seats}
            weight = {version.weight}
            charge_time = {version.charge_time}
            available_now = {version.available_now}
            acceleration = {version.acceleration}
            power = {version.power}
            torque = {version.torque}
            drive = {version.drive}
            towing_capacity = {version.towing_capacity}
            />
      </Tab>)
      
  })
      : <Text>Sorry, No Electric Vehicle Version</Text>


    console.log(versions);

    if (versions.length === 0) return <Box pad={{bottom: "20%"}}><LoadingSpinner /></Box>;

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
        <Box background={{image: `url(${background}) `, opacity: "weak"}}>
            <Grommet theme={theme}> 
            <Box direction="row" justify="center">
                <Box margin="small"><Image fit="cover" src={versions[0].car_image}></Image></Box>
            </Box>
            <Box direction="row" justify="center" background="#DADADA" margin={{horizontal: "small"}} round="medium">
              <Box ><Heading level="1"> {versions[0].year} {versions[0].make} {versions[0].model}</Heading></Box>
            </Box>
            <Tabs activeIndex={index} onActive={onActive} margin={{top: "2%"}}>
                  {versionsList}
                </Tabs>
            </Grommet>
        </Box>
    )
}

export default EV;