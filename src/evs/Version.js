import React, { useState, useEffect, useContext } from "react";
import EVApi from "../api/api";
import {
    Anchor,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Collapsible,
    Heading,
    Grommet,
    Image,
    Paragraph,
    Text,
    Tab,
    Tabs
  } from 'grommet';
import UserContext from "../auth/UserContext";

function Version ({key, name, price, range, battery_capacity, efficiency, seats, weight, charge_time, available_now, acceleration, power, torque, drive, towing_capacity}){

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
        <>
          <Card background="#999999" margin="large" elevation="large">
            <Box direction="row" justify="center" margin={{top: "2%"}}><Text size="large" color="#6FFFB0">Price: {price}</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0" color="#6FFFB0">Range: {range} Miles</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Battery Efficiency: {battery_capacity} Kw/Hr</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Efficiency: {efficiency}</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Seats: {seats} seats</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Weight: {weight} lbs</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Charge Time 0-80%: {charge_time} min</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Available Now?: {available_now}</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Acceleration 0-60 Mph: {acceleration} seconds</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Power: {power} HP</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Torque: {torque} lb/ft</Text></Box>
            <Box direction="row" justify="center"><Text size="large" color="#6FFFB0">Drive: {drive}</Text></Box>
            <Box direction="row" justify="center" margin={{bottom: "2%"}}><Text size="large" color="#6FFFB0">Towing Capacity: {towing_capacity} lbs</Text></Box>
          </Card>
        </>
    )
}

export default Version;