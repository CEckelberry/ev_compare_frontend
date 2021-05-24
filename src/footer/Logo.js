import React from "react";
import logo from '../images/logo_EVCompare/png/white_transparent_logo.png'
import { Box, Stack, Image} from "grommet";

const Logo = () => (
  <Stack anchor="center">
    <Box
      width="small"
      height="small"
      round="small"
      align="center"
      justify="center"
      margin={{top: "-10%", bottom: "-10%"}}
    ><Image fit="cover" src={logo}></Image></Box>
  </Stack>
);

export { Logo };