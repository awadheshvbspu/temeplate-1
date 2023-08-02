import { IconButton, Typography,Box, Grid, Button,Stack} from '@mui/material'
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from "../firebase-config";
import { addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import {
    collection,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { useAppStore } from '../AppStore';

const currencies = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Electronic',
      label: 'Electronic',
    },
    {
      value: 'Food',
      label: 'Food',
    },
  ];
export default function AddProduct({CloseEvent}) {
        const [name,setName] = useState('');
        const [price,setPrice] = useState(0);
        const [category,setCategory] = useState('');
        // const [rows, setRows] = useState([]);
        const setRows = useAppStore((state)=>state.setRows);

        const empCollectionRef = collection(db, "products");
    const createUser=async()=>{
     await addDoc(empCollectionRef,{
      name:name,
      price:Number(price),
      category:category,
      Date:String(new Date())
     }) ;
     getUsers();
     CloseEvent();
     Swal.fire("Submitted","Your File submitted Successfully","Success")

    }
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
     const handleCategory = (e) =>{
        setCategory(e.target.value)
     }
  return (
    <>
    <Box sx={{m:2}} />
     <Typography variant='h5' align='center'>
        Add Product
     </Typography>
     <IconButton  style={{position:'absolute',top:'0',right:'0'}}
     onClick={CloseEvent}
     >

        <CloseIcon/>
     </IconButton>
     <Grid container spacing={2} sx={{mt:1}}>
        <Grid item xs={12} >
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{minWidth:'100%'}} value={name} onChange={handleName}/>
        </Grid>
        <Grid item xs={6} >
        <TextField id="outlined-basic" label="Price" variant="outlined" size='small' sx={{minWidth:'100%'}} value={price}
       InputProps={{
        startAdornment: (
            <InputAdornment position="start">
              <CurrencyRupeeIcon />
            </InputAdornment>
        ),
       }}
         onChange={handlePrice} type='number'/>
        </Grid>
        <Grid item xs={6} >
        <TextField id="outlined-basic" label="Category" variant="outlined" size='small' sx={{minWidth:'100%'}} value={category} onChange={handleCategory} select>
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography variant='h5' align='center'>
            <Button variant='contained' onClick={createUser}>
                Submit
            </Button>
        </Typography>

        </Grid>
        </Grid>
        

    </>
  )
}
