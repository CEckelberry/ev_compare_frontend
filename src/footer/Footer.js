import React from "react";
import { Box, grommet, ResponsiveContext, Text, Grommet } from "grommet";
import {Logo} from "./Logo";
import {SocialMedia} from "./SocialMedia";
import { FooterContent } from "./FooterContent";

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

const Footer = ({ ...rest }) => (
<Grommet theme={theme}>
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        border={{ side: "top", color: "#F2F2F2" }}
        pad={{ top: "", left: "large", right:"large", bottom:"small"}}
        background="brand"
        {...rest}
      >
        <Box gap="">
          <Box
            gap="small"
            direction="row-responsive"
            align="center"
            pad={{ horizontal: "small" }} // align with margin of icons from SocialMedia
          >
            <Logo />
            {size !== "small" && size !== "xsmall" && (
              <Text weight="bold" size="large" >
               
              </Text>
            )}
          </Box>
          <SocialMedia />
        </Box>
        <FooterContent />
      </Box>
    )}
  </ResponsiveContext.Consumer>
</Grommet>
);

export { Footer };