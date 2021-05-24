import React, { useState, useEffect } from "react";
import { useHistory, useLocation  } from "react-router-dom";
import { Grommet, Box, Grid } from 'grommet';
import CollapsableNav from "../navbar/CollapsableNav";
import {Footer} from "../footer/Footer";

function FinishLogin ({ login }) {

    const [id, setId] = useState([])

    const history = useHistory();

    async function doLogin(googleid) {
        let result = await login(googleid);
        if (result.success) {
          history.push("/");
        } else {
          history.push("/login")
        }
      }
    

    const query = new URLSearchParams(useLocation().search); 
    let gid = query.get("googleid")

    function handleChange(){
        // console.log(gid)
        setId(gid)
        doLogin(gid)
    }

    useEffect(() => {
        handleChange();
    }, [])

    return(        
        <div className="FinishLogin">
            <CollapsableNav />
            <Grommet background="#F8F8F8">
                <Grid
                fill
                rows={{count: 6, size: 'auto'}}
                columns={{count: 'fit', size: 'full'}}
                >
                    <Box direction="row" align="center" justify="center">
                    </Box>
                </Grid>
                
            </Grommet>
            <Footer />
        </div>
  )
}

export default FinishLogin;

