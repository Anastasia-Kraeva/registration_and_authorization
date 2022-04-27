// @ts-nocheck
import React, {FC} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {INavElement, INavBarProps} from './types';

const NavBar: FC<INavBarProps> = ({title, navElements}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6"
                      component="div"
                      sx={{flexGrow: 1}}>
            {title}
          </Typography>
          <Box>
            {
              navElements.map((el, i) => (
                <el.tag key={`$ne-${i}`} {...el.props}/>
              ))
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
