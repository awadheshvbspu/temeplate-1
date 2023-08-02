import React from 'react';
import Sidenav from '../Sidenav';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from '../page/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../Dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../page/AccordianDsah';
import { BarCharts } from '../charts/BarCharts';
import CountUp from 'react-countup';


export default function Home() {
    return (
        <>
        <div style={{backgroundColor:'#edf5ef'}}>
        <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction='row'> 
                                <Card sx={{ minWidth: '49%', height: '150',color:'white' }} className='gradiant'>
                                <CardContent>
                                    <div>

                                            <CreditCardIcon/>
                                    </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                         $<CountUp delay={2} end={900} />
                                        </Typography>
                                        <Typography variant='body2' component='div'>
                                        Total Earning
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: '49%', height: '150',color:'white' }} className='gradiantlight'>

                                    <CardContent>
                                    <div>

                                            <ShoppingBagIcon/>
                                    </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                         $<CountUp delay={2} end={950} />
                                        </Typography>
                                        <Typography variant='body2' component='div'>
                                        Total Order
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <Card sx={{ maxWidth: '100%', height: '70', display: 'flex', paddingLeft: '14px',color:'white' }} className='gradiantlight'>
                                    <div style={{ marginTop: "15px" }}>
                                        <StorefrontIcon size={35} />

                                    </div>

                                    <Stack direction='row' spacing={1} >
                                        <div className='padd'>
                                            <span style={{ fontWeight: 'bold' }}>$345k</span><br />
                                            <span>Total income</span>
                                        </div>
                                    </Stack>

                                </Card>
                                <Card sx={{ maxWidth: '100%', height: '70', display: 'flex', paddingLeft: '14px' }} className=''>
                                    <div style={{ marginTop: '15px' }}>

                                        <StorefrontIcon />
                                    </div>

                                    <Stack direction='row' spacing={1}>
                                        <div className='padd'>
                                            <span style={{ fontWeight: 'bold' }}>$345k</span><br />
                                            <span>Total income</span>
                                        </div>
                                    </Stack>

                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>

                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + 'vh' }}>

                                <CardContent>
                                <BarCharts/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + 'vh' }}>

                                <CardContent>
                                Popular Product
                                <AccordionDash/>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </div>
            

        </>
    )
}
