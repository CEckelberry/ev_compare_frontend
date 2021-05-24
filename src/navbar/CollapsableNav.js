import React from 'react';
import './CollapsableNav.css'
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/logo_EVCompare/png/white_transparent_logo.png'
import { Menu as MenuIcon } from 'grommet-icons';
import {Anchor, Box, Grommet, Header, Nav, Menu, ResponsiveContext, Image, Button} from 'grommet';
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
              <NavLink id="RouterNavLink" className="RouterNavLink" to="/evs" label="evs" style={{color: '#EDEDED', textDecoration: 'none' , fontWeight: 'bold'}}>EVList</NavLink>
              <NavLink id="RouterNavLink"  to="/evs/compare" label="Compare" style={{color: '#EDEDED', textDecoration: 'none' , fontWeight: 'bold'}} activeStyle={{color: '#EDEDED', textDecoration: 'bold'}}>Compare</NavLink>
              <NavLink id="RouterNavLink"  to="/favorites" label="favorites" style={{color: '#EDEDED', textDecoration: 'none' , fontWeight: 'bold'}} activeStyle={{color: '#EDEDED', textDecoration: 'bold'}}>Favorites</NavLink>
              <NavLink id="RouterNavLink"  to="/aboutus" label="About Us" style={{color: '#EDEDED', textDecoration: 'none' , fontWeight: 'bold'}} activeStyle={{color: '#EDEDED', textDecoration: 'bold'}}>About Us</NavLink>
              <Link to="/profile"><Avatar id="profAvatar"></Avatar></Link>  
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

export default CollapsableNav;
