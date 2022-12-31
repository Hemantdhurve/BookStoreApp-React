import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyle = makeStyles({
    cartBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid #E4E4E4',
        width: '55vw',
        left: '15vw',
        top: '8vh',
        height: '38vh',
        alignItems: 'center',
    },
    cartTxt: {
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
    },
    location: {
        height: '6vh',
        width: '19vw',
        outline: 'none',
        fontSize: '17px',
    },
    mainData: {
        display: 'flex',
        width: '90%',
        height: '80%',
    },
    imgbox: {
        position: 'relative',
        top: '10px',
        height: '60%',
        width: '15%',
    },
    dataBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '10px',
        width: '85%',
        height: '95%',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '60%',
        width: '90%',
        left: '4vw',
    },
    price: {
        display: 'flex',
        position: 'relative',
        top: '10px',
        width: '29%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    incdecbox:{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        top: '20px',
        width: '50%',
        height:'20%',
        left: '4vw',
    },
    innerincdecbox: {
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    incdec1:{
        display: 'flex', 
        alignItems: 'center', 
        width: '45%', 
        justifyContent: 'space-between'
    },
    num:{
        width: '40%',
        height: '95%',
        border: '1px solid #DBDBDB'
    },
    placeBtn:{
        display:'flex',
        position:'relative',
        top:'15px',
        justifyContent:'flex-end',
        
    },
    
    //Address Box Part

    addressBox:{
        display: 'flex',
        position: 'relative',
        border: '1px solid #E4E4E4',
        width: '55vw',
        left: '15vw',
        top: '11vh',
        height: '8vh',
        alignItems:'center',
        justifyContent:'center'
    },
    innerAddbox:{
        display: 'flex',
        height:'45%',
        width:'90%',
        fontSize:'16px',
        fontWeight:'500',
        alignItems:'center',
        color:'#333232'
    },
    orderBox:{
        display: 'flex',
        position: 'relative',
        border: '1px solid #E4E4E4',
        width: '55vw',
        left: '15vw',
        top: '14vh',
        height: '8vh',
        alignItems:'center',
        justifyContent:'center'
    }
})

function Cart() {
    const classes = useStyle()
    let [count, setCount] = useState(1)

    function decrement() {
        count = count - 1
        setCount(count)
    }
    function increment() {
        count = count + 1
        setCount(count)
    }
    

    return (
        <div>
            <Box sx={{display:'flex',flexDirection:'column'}}>               
                <Box className={classes.cartBox}>
                    <Box className={classes.cartTxt}>
                        <Box >
                            <Typography style={{ fontSize: '23px', fontWeight: '700' }}>My Cart (01)</Typography>
                        </Box>
                        <Box>
                            <select className={classes.location}>
                                {/* <option ><LocationOnIcon /> Use Current Location</option> */}
                                <option > Use Current Location</option>
                                <option >Bhandara</option>
                                <option >Nagpur</option>
                                <option >Pune</option>
                                <option >Mumbai</option>
                            </select>
                        </Box>
                    </Box>
                    <Box className={classes.mainData}>
                        <Box className={classes.imgbox}>
                            <Box>
                                <img style={{ height: '100%', width: '100%' }} src='../assets/shopping.png'></img>
                            </Box>
                        </Box>
                        <Box className={classes.dataBox}>
                            <Box >
                                <Box className={classes.title}>
                                    <Typography style={{ fontSize: '20px', fontWeight: '550' }}>Book Title</Typography>
                                    <Typography style={{ fontSize: '15px', fontWeight: '450', color: '#9D9D9D' }}>by Author</Typography>
                                    <Box className={classes.price}>
                                        <Typography style={{ fontSize: '20px', fontWeight: '550' }}>Rs. 2000</Typography>
                                        <Typography style={{ color: '#878787', textDecorationLine: 'line-through', fontWeight: '500', fontSize: '14px' }}>Rs. 3000</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.incdecbox}>
                                <Box className={classes.innerincdecbox}>
                                    <Box className={classes.incdec1}>
                                        <Box >
                                            <IconButton onClick={decrement} size='small' style={{ border: '1px solid #DBDBDB' }}>
                                            <RemoveIcon fontSize='small' style={{ color: '#DBDBDB' }} /></IconButton>
                                        </Box>
                                        <Box className={classes.num} >
                                            <span style={{ fontSize: '20px' }} >{count} </span>
                                        </Box>
                                        <Box>
                                            <IconButton onClick={increment} size='small' style={{ border: '1px solid #DBDBDB' }}>
                                            <AddIcon fontSize='small' style={{ color: '#333232' }} /></IconButton>
                                        </Box>
                                    </Box>
                                    <Box style={{ width: '30%' }}>
                                        <Box style={{ color: '#0A0102', fontWeight: '600',fontSize: '16px', position: 'relative', left: '12px' }} >Remove</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.placeBtn}>
                                <Button variant="contained" style={{borderRadius:'0px',width:'25%'}}>Place Order</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.addressBox}>
                    <Box className={classes.innerAddbox}>
                        Address Details
                    </Box>
                </Box>
                <Box className={classes.orderBox} >
                    <Box className={classes.innerAddbox}>
                        Order Summary
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Cart;