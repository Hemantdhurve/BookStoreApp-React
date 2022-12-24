import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ForgetPassword from '../forgetPassword/ForgetPassword';
import ResetPassword from '../resetPassword/ResetPassword';


const useStyle=makeStyles({
    head:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        height:'9vh',
        width:'100vw',
        backgroundColor:'#A03037',
        color:'white',
        alignItems:'center'
    },
    book:{
        display:'flex',
        position:'relative',
        right:'30vw',
        top:'2.5vh',
        width:'8vw',
        justifyContent:'space-between',
    }
})

function Dashboard2() {
    const classes = useStyle()
    const [toggle, setToggle]= useState(false)

    const switchReset=()=>{
      setToggle(true)
    }
  return (
    <Box>
        <Box className={classes.head}>
            <Box className={classes.book}>
                <img src='../assets/education.svg'/> 
                Bookstore
            </Box>
                {
                  toggle ? <ResetPassword /> : <ForgetPassword switchReset={switchReset} />
                } 
        </Box>
    </Box>
  )
}

export default Dashboard2;
