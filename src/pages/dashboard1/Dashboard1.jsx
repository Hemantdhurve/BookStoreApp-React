import React,{useState} from 'react';
import SignIn from '../sign-In/SignIn';
import SignUp from '../sign-Up/SignUp';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const useStyle=makeStyles({
dash1:{
  height:'100vh',
  width:'100vw',
  backgroundColor:'lightgrey',
},
page1:{
  position:'relative',
  top:'10vh',       
  backgroundColor:'lightgrey',
},
mainpage:{
  display:'flex',
  position:'relative',
  width:'55vw',
  height:'58vh',
  top:'20vh',
  left:'25vw',
},
imgbox:{
  display:'flex',
  position:'relative',
  flexDirection:'column',
  boxSizing:'border-box',
  width:'50%'
},
shopimg:{
  position:'relative',
  top:'4vh',
  left:'3vw',
  width:'80%',
  height:'70%'
},
text:{
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center !important',
  position:'relative',
  top:'7vh',
  fontWeight:'700',
  fontSize:'20px',
}
})

function Dashboard1() {
  const classes=useStyle()
  const [toggle, setToggle]= useState(false)

  const switchLogin=()=>{
    setToggle(true)
  }
  const switchSignup=()=>{
    setToggle(false)
  }
  return (
      <Box className={classes.dash1}>
          <Paper className={classes.mainpage} style={{backgroundColor:'#F5F5F5',borderRadius:'21px'}} elevation={4}>
              <Box className={classes.imgbox}>               
                  <img className={classes.shopimg} src='../assets/shopping.png'/>                
                  <span className={classes.text}>ONLINE BOOK SHOPPING</span>
              </Box>
                {
                  toggle ? <SignUp switchSignup={switchSignup}/> : <SignIn switchLogin={switchLogin} />
                } 
          </Paper>
      </Box>    
  )
}

export default Dashboard1;