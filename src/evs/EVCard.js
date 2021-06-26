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
    Text
  } from 'grommet';
import { Link } from "react-router-dom";
import { FormDown, FormUp, Favorite, ShareOption, Star } from 'grommet-icons';
import UserContext from "../auth/UserContext";
import "./EVCard.css"

/** Show information about an EV
 *
 * Is rendered by EVList to show a cardfor each ev.
 *
 * EVList -> EVCard
 */

function EVCard({vehicle_id, make, model, safety_rating, length, width, height, body_type, chargeport, year, image, price, range, favorites}){
    const { currentUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [added, setAdded] = useState();
      
  
    /** Add a vehicle to favorites for logged in user */
    async function handleAdd(evt) {
      EVApi.addToFavorites(currentUser.googleid, vehicle_id);
      setAdded(true)
    }

    useEffect(async function compareFavorites(){
      if(favorites){
        if(favorites.indexOf(vehicle_id) !== -1){
          console.log(`vehicle_id in favorites`);
          setAdded(true)
        }
      }
    }, [])

    async function handleRemove(evt) {
      if (favorites.indexOf(vehicle_id) !== -1){
        console.log(`this vehicle id in favorites, in handleRemove`)
        EVApi.removeFavorite(currentUser.googleid, vehicle_id)
        setAdded(false);
      }
    }

    
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

    const ExpandButton = ({ ...rest }) => {
        const Icon = open ? FormUp : FormDown;
            return (
                <Button
                hoverIndicator="light-4"
                icon={<Icon color="brand" />}
                {...rest}
                />
            );
    };

    return (    
    <Grommet theme={theme}>
        <Box pad="medium" align="start">
        
          <Card elevation="large" width="medium" gap="small" margin="small" background="#F8F8F8" key={vehicle_id}>
            <CardBody height="medium">
              <Image
                fit="cover"
                src={image}
                a11yTitle="bridge"
                style={{minHeight: "25vh"}}
              />
            </CardBody>
            <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Link className="EVlink" to={`/evs/${vehicle_id}`} onClick={() => {}}><Button id="carbutton" fill="vertical" hoverIndicator={{elevation: "medium"}} primary style={{background: "#7D4CDB"}} label={`${make} ${model}`} size="large" margin={{bottom: "small"}}></Button></Link>
            <Heading id="cardstats" alignSelf="start" level="3" margin="small" size="medium">Year:  <span>{year}</span></Heading>
            <Heading id="cardstats" alignSelf="start" level="3" margin="small" size="medium">Body Type: <span>{body_type}</span></Heading>
            <Heading id="cardstats" alignSelf="start" level="3" margin="small" size="medium">Min Range: <span>{range}</span></Heading>
            <Heading id="cardstats" alignSelf="start" level="3" margin="small" size="medium">Min Price: <span>{price}</span></Heading>
            <Heading id="cardstats" alignSelf="start" level="3" margin="small" size="medium">Safety: <span>{[...Array(safety_rating)].map((e, i) => <Star id="stars" key={i} size="medium"/>)}</span></Heading>
            </Box>
            <CardFooter>
              <Box direction="row" align="center" gap="small">
                <Button
                  icon={<Favorite color={added ? 'red' : 'grey'} />}
                  hoverIndicator
                  onClick={() => added ? handleRemove() : handleAdd()}
                />
                <Button icon={<ShareOption color="plain" />} hoverIndicator />
                <Anchor
                  href="https://www.collinsdictionary.com/us/dictionary/english/bridge"
                  label="Learn More"
                />
              </Box>
              <ExpandButton onClick={() => setOpen(!open)} />
            </CardFooter>
            <Collapsible open={open}>
              <Paragraph margin="medium" color="dark-3">
                The greatest bridge builders of antiquity were the ancient Romans.
                The Romans built arch bridges and aqueducts that could stand in
                conditions that would damage or destroy earlier designs. Some
                stand today.
              </Paragraph>
            </Collapsible>
          </Card>
        </Box>
      </Grommet>
        
    )
}

export default EVCard;