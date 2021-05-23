import React from 'react';
import './CollapsableNav.css'
import {Link} from 'react-router-dom';
import logo from '../images/logo_EVCompare/png/white_transparent_logo.png'
import { Menu as MenuIcon } from 'grommet-icons';
import {Anchor, Box, Grommet, Header, Nav, Menu, ResponsiveContext, Image} from 'grommet';
import Avatar from './Avatar'

const theme = {
    global: {
      colors: {
        brand: '#7D4CDB',
        },
  
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
        color: '#EDEDED'
      },
    },
  };

const CollapsableNav = () => (
  <Grommet theme={theme}>
    <Header background="brand" pad="small" border={{ size: "small", side:"bottom", color:"#555555" }}>
      <Box direction="row" align="center">
        <Link to="/">
          <Box height="100px" width="200px">
            <Image fit="cover" src={logo} margin={{top: "-10%", bottom: "-10%"}}></Image>
          </Box>
        </Link>
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              icon={<MenuIcon />}
              items={[
                { label: 'CompareList', onClick: () => {} },
                { label: 'Favorites', onClick: () => {} },
                { label: 'Profile', onClick: () => {}},
                { label: 'About Us', onClick: () => {}},
              ]}
            />
          ) : (
            <Nav direction="row" id="navLinks">
              <Link to="/evs"><Anchor color="#EDEDED" href="evlist" label="EVList" /></Link>
              <Link to="/evs/compare"><Anchor color="#EDEDED" href="#" label="Compare"/></Link>
              <Link to="/favorites"><Anchor color="#EDEDED" href="#" label="Favorites"/></Link>
              <Link to="/aboutus"><Anchor color="#EDEDED" href="#" label="About Us"/></Link>
              <Link to="/profile"><Anchor href="EDEDED" id="profAnchor"><Avatar id="profAvatar"></Avatar></Anchor></Link>  
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

export default CollapsableNav;
