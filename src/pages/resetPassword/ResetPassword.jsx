import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const useStyle=makeStyles({
    fgttxt:{
        position:'relative',
        top:'20vh',
        fontSize:'30px',
        color:'black'
    },
    forgetBox:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        height:'46vh',
        width:'28vw',
        // left:'35vw',
        top:'25vh',
    },
    innerBox:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        // height:'26vh',
        width:'22vw',
        left:'3vw',
        top:'3.5vh',
        // border:'1px solid black'
    },
    txtboth: {
        fontSize: '12px',
        fontWeight: '500'
    },
    acc1:{
        display:'flex',
        position:'relative',
        top:'6.5vh',
        height:'26%',
        backgroundColor:'#E4E4E4',
        boxSizing:'border-box',        
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid #F9F9F8'
    }
})
function ResetPassword() {
    const classes=useStyle()

    const navigate=useNavigate()
     
    const navSignIn=()=>{
        navigate('/')
    }

  return (
    <Box style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Box className={classes.fgttxt}>
            <Typography sx={{fontSize:'25px',fontWeight:'600'}}>Reset Your Password?</Typography>
        </Box>
        <Paper className={classes.forgetBox} elevation={3}>
            <Box className={classes.innerBox}>
                <Box>
                    <span className={classes.txtboth}>New Password</span>
                    <TextField fullWidth='true' size='small' style={{height:'45px'}}/>
                </Box>
                <Box>
                    <span className={classes.txtboth}>Confirm Password</span>
                    <TextField fullWidth='true' size='small' style={{height:'55px'}}/>
                </Box>
                <Box>
                    <Button variant="contained" fullWidth='true' sx={{ backgroundColor: '#A03037 !important',height:'40px' }} >Reset Password</Button>
                </Box>
            </Box>
            <Box className={classes.acc1}>
                <Button variant="text" sx={{height:'40px',fontWeight:'700',fontSize:'15px',color:'black'}} onClick={navSignIn}>Login Account</Button>
            </Box>
        </Paper>        
    </Box>
  )
}

export default ResetPassword;