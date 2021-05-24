import React from "react";
import { Grommet, Box, Button, Grid, Anchor } from 'grommet';
import CollapsableNav from "../navbar/CollapsableNav";
import {Footer} from "../footer/Footer"
import { Login as LoginIcon }  from "grommet-icons";

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * Routes -> LoginForm -> Alert
 * Routed as /login
 */

function SignupForm() {
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
        
        <div className="SignupForm">
            <CollapsableNav />
            <Grommet background="#F8F8F8" theme={theme}>
                <Grid
                fill
                rows={{count: 6, size: 'auto'}}
                columns={{count: 'fit', size: 'full'}}
                >
                    <Box direction="row" align="center" justify="center">
                        <Box gap="large" pad="large">
                        <Anchor href="http://localhost:3001/auth/google"><Button label="Signup" primary size="large" icon={<LoginIcon />}></Button></Anchor>
                        </Box>
                    </Box>
                </Grid>
                
            </Grommet>
            <Footer />
        </div>
  )

}

export default SignupForm;