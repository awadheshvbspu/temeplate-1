import React from 'react';
import Sidenav from '../Sidenav';
import {Box,Typography} from '@mui/material';
import Navbar from '../page/Navbar';
import ProductList from '../product/ProductList';

export default function About() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
     <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <ProductList/>
      </Box>
     </Box>
      
    </>
  )
}
