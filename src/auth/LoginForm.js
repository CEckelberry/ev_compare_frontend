import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import { Grommet, Box, Button, Grid, Text, Image, Heading, Anchor } from 'grommet';
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

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "LoginForm",
      "login=", typeof login,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
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

    return(
        
        <div className="LoginForm">
            <CollapsableNav />
            <Grommet background="#F8F8F8" theme={theme}>
                <Grid
                fill
                rows={{count: 6, size: 'auto'}}
                columns={{count: 'fit', size: 'full'}}
                >
                    <Box direction="row" align="center" justify="center">
                        <Box gap="large" pad="large">
                        <Anchor href="/auth/google"><Button label="To Google" primary size="large" icon={<LoginIcon />}></Button></Anchor>
                        </Box>
                    </Box>
                </Grid>
                
            </Grommet>
            <Footer />
        </div>
  )

}

export default LoginForm