import React, { useState, useEffect, useContext } from "react";
import EVApi from "../api/api";
import SearchForm from "../common/SearchForm";
import {useParams, useLocation} from "react-router-dom"
import LoadingSpinner from "../common/LoadingSpinner";
import { Grommet, Box, Button, Grid, Text, ResponsiveContext,} from 'grommet';
import EVCard from "./EVCard"
import "./EVList.css"
import background from "../images/ev_list_background.jpg"
import UserContext from "../auth/UserContext";
import { SearchAdvanced, Star } from "grommet-icons";
import FormLayer from "../filters/FormLayer"
import queryString from 'query-string';


/** Show page with list of evs.
 *
 * On mount, loads evs from API.
 * Re-loads filtered evs on submit from search form.
 *
 * This is routed to at /evs
 *
 * Routes -> { EVCard, SearchForm }
 */



function EVList(){
    console.debug("EVList")
    // let {make} = useParams();
    // let {model} = useParams();
    // let {price} = useParams();
    // let {range} = useParams();
    // let {body_type} = useParams();

    const searchQuery = useLocation();
    console.log(searchQuery)
    const {make, model, price, range, body_type} = queryString.parse(searchQuery.search)
    console.log(make, model, price, range, body_type)

    const { currentUser } = useContext(UserContext);
    const [evs, setEVs] = useState(null);
    const size = useContext(ResponsiveContext);
    const [allFavs, setallFavs] = useState(null);

    useEffect(async function getAllFavs() {
      let favorites = await EVApi.getFavorites(currentUser.googleid);
      console.log(`in getAllFavs favorites: ${favorites}`)
      setallFavs(favorites)
    }, []);

    useEffect(function getEVsOnMount() {
        console.debug("EVList useEffect getEVsOnMount");
        search();
      }, []);

    /** Triggered by search form submit; reloads evs. */
    async function search() {
       
        console.log('inside async function search,,,,,, make: ', make)
        let evs = await EVApi.getEVs(make, model, price, range, body_type);
        setEVs(evs);
    }

    if (!evs) return <Box pad={{bottom: "20%"}}><LoadingSpinner /></Box>;

    console.log(evs)

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

      
        <Box background={{image: `url(${background}) `, opacity: "weak"}}>

        <Grommet  theme={theme}>   
            <Box margin="small" pad={{top: "2%"}}><FormLayer search={search} evs={evs}/></Box>
            <Grid columns={size !== 'medium' ? 'medium' : '100%'} gap="small">
                    {evs.length
                        ? (
                            <>
                            {evs.map(ev => (
                              <Box pad={{right: "2.5%"}}>
                                <EVCard
                                    vehicle_id={ev.id}
                                    make={ev.make}
                                    model={ev.model}
                                    safety_rating={ev.safety_rating}
                                    length={ev.length}
                                    width={ev.width}
                                    height={ev.height}
                                    body_type={ev.body_type}
                                    chargeport={ev.chargeport}
                                    year={ev.year}
                                    image={ev.car_image}
                                    price={ev.price}
                                    range={ev.range}
                                    favorites={allFavs}
                                />
                                </Box>
                            ))}
                            </>
                        ) : (
                            <Text>Sorry, No Electric Vehicles Found</Text>
                        )}
            </Grid>
        </Grommet>
        </Box>
    )

}

export default EVList;