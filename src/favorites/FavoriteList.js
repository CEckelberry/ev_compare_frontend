import React, { useState, useEffect, useContext } from "react";
import EVApi from "../api/api";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";
import { Grommet, Box, Button, Grid, Text, ResponsiveContext} from 'grommet';
import EVCard from "../evs/EVCard"
import background from "../images/ev_list_background.jpg"
import UserContext from "../auth/UserContext";

function FavoriteList(){
    console.debug("EVList")
    const { currentUser } = useContext(UserContext);
    const [evs, setEVs] = useState([]);
    const size = useContext(ResponsiveContext);
    const [allFavs, setallFavs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let abort = false;
        const getAllFavs = async () => {
          let favorites = await EVApi.getFavorites(currentUser.googleid);
          console.log(`in getAllFavs favorites: ${favorites}`)
          return favorites;
        }
        getAllFavs().then( favorites => {
          if(abort) { return; }
          setallFavs(favorites);
        //   console.log(`in getAllFavs favorites.then(): ${favorites}`)
          console.log('in getAllFavs favorites.then():' , favorites)
        });

        return function() { abort = true; }
      }, []);

    useEffect(function getEVsOnMount() {
        console.debug("EVList useEffect getEVsOnMount");
        const getSearch = async () => {
            await search();
            setLoading(false);
        }
        getSearch();
      }, [allFavs]);


    /** Triggered by search form submit; reloads companies. */
    async function search(term) {
        let evs = await EVApi.getEVs(term);
        evs = evs.filter(ev => {
            console.log('single ev:', ev)
            console.log('allFavs: ', allFavs)
            return allFavs.includes(ev.id)
        })
        console.log(evs)
        setEVs(evs);
    }



    if (loading) return <Box pad={{bottom: "20%"}}><LoadingSpinner /></Box>;

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
            <Grid columns={size !== 'medium' ? 'medium' : '100%'} gap="small" justify="center">
                    {evs.length
                        ? (
                            <>
                            {evs.map(ev => (
                              <Box>
                                <EVCard
                                    key={ev.id}
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

export default FavoriteList;