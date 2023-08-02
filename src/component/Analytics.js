import { Typography,Box,Card, Stack } from '@mui/material';

import Grid from '@mui/material/Grid';
import React from 'react';
import Sidenav from '../Sidenav';
import Navbar from '../page/Navbar';
import GeoCharts from '../charts/GeoCharts'
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HoriBarChart from '../charts/HoriBarChart';
import DoughNut from '../charts/DoughNut';
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';

export default function Analytics() {
  return (
    <>
        <Navbar/>
    <Box height={30}/>
     <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <Box component="main" sx={{ flexGrow: 1, p: 3,backgroundColor:'lightgrey' }}>
     <Grid container spacing={2} sx={{height:'140',marginTop:'15px'}}>
        <Grid item xs={5}>
        <Stack spacing={2} direction='row'>
        <Card sx={{ minWidth: '49%', height: '150',padding:'20px',color:'white'}} className='analyticCards'>
        <Typography gutterBottom variant="h5" component="div">
          <span>Visitors</span><br/>
          <CountUp delay={0.4} end={2650600} duration={4}/>
          
        </Typography>
          <span>Since last week</span>
      
    </Card>
    <Card sx={{ minWidth: '49%', height: '150',padding:'20px',color:'white'}} className='analyticCard'>
        <Typography gutterBottom variant="h5" component="div">
          <span>Visitors</span><br/>
          <CountUp delay={0.4} end={3452340} duration={4}/>
          
        </Typography>
          <span>Since last week</span>
      
    </Card>
    </Stack>
    <Grid sx={{marginTop:'10px',color:'white'}}>
    <Stack direction='row' spacing={2}>
    <Card sx={{ minWidth: '49%', height: '150',padding:'20px',color:'white'}} className='analyticCards'>
        <Typography gutterBottom variant="h5" component="div">
          <span>Visitors</span><br/>
        <CountUp delay={0.4} end={4370000} duration={4}/>
          
        </Typography>
          <span>Since last week</span>
      
    </Card>
    <Card sx={{ minWidth: '49%', height: '150',padding:'20px',color:'white'}} className='analyticCard'>
        <Typography gutterBottom variant="h5" component="div">
          <span>Visitors</span><br/>
          <CountUp delay={0.4} end={134220000} duration={4}/>
          
        </Typography>
          <span>Since last week</span>
      
    </Card>
    </Stack>
    </Grid>  
        </Grid>
        <Grid item xs={7}>
        <CardContent>
          <Card>
            <HoriBarChart/>
          </Card>
        </CardContent>

        </Grid>
        <Grid container spacing={2}>

                        <Grid item xs={7}>
                            <Card sx={{ height: 45 + 'vh' }}>

                                <CardContent>
                                <GeoCharts/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ height: 45 + 'vh' }}>

                                <CardContent>
                                
                                <DoughNut/>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
        </Grid>
        
      </Box>
     </Box>
    </>
  )
}
