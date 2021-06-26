import React from "react";
import { Grommet, Box, Button, Grid, Anchor} from 'grommet';
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

function LoginForm() {


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
        
        <div className="LoginForm">
            <Grommet background="#F8F8F8" theme={theme}>
                <Grid
                fill
                rows={{count: 6, size: 'auto'}}
                columns={{count: 'fit', size: 'full'}}
                >
                    <Box direction="row" align="center" justify="center">
                        <Box gap="large" pad="large">
                        <Anchor href="http://localhost:3001/auth/google"><Button label="Login" primary size="large" icon={<LoginIcon />}></Button></Anchor>
                        </Box>
                    </Box>
                </Grid>
                
            </Grommet>
        </div>
  )

}

export default LoginForm