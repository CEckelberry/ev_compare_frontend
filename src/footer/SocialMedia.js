import React from "react";
import { Anchor, Box } from "grommet";
import { FacebookOption, Instagram, Twitter } from "grommet-icons";

const SocialMedia = () => (
  <Box direction="row" gap="xxsmall" justify="center" align="center">
    <Anchor
      target="_blank"
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="#F2F2F2" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="#F2F2F2" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="#F2F2F2" size="medium" />}
    />
  </Box>
);

export { SocialMedia };