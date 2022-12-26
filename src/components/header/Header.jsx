import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { TextField, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BorderLeft } from '@mui/icons-material';

const useStyle = makeStyles({
    headBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '9vh',
        width: '100vw',
        // border: '1px solid black',
        // alignIt  ems: 'center',
        backgroundColor: '#A03037 !important'
    },
    outHeadBox: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        height: '100%',
        width: '70%',
        left:'15vw',
        justifyContent:'space-between',
    },
    inHeadBox: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        top: '20%',
        height: '60%',
        width: '70%',
    },
    bookimg: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        width: '19%',
        alignItems: 'center',
        height: '100%',
    },
    booktxt: {
        color: 'white',
        fontSize: '20px'
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '50px',
        width: '70%',
        backgroundColor: '#FCFCFC',
        borderRadius: '5px'
    },
    field: {
        display: 'flex',
        width: '100%',
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Iconlogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItem: 'center',
        color:'#FCFCFC',
        wodth:'50%',
        borderLeft:'1px solid #8F2B2F'
    },
    Itxt:{
        display:'flex',
        justifyContent:'center',
        width:'80px',
        position:'relative',
        bottom:'3px'
    }
})

function Header() {
    const classes = useStyle()

    return (
        <Box className={classes.headBox}>
            <Box className={classes.outHeadBox}>
                <Box className={classes.inHeadBox}>
                    <Box className={classes.bookimg}>
                        <img src='../assets/education.svg' />
                        <Box className={classes.booktxt}>
                            BookStore
                        </Box>
                    </Box>
                    <Box className={classes.search}>
                        <Box>
                            <IconButton ><SearchIcon size='small' /></IconButton>
                        </Box>
                        <Box className={classes.field}>
                            <input placeholder='Search...' style={{ width: '100%', border: 'none', outline: 'none', fontSize: '17px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.icons}>
                    <Box className={classes.Iconlogo}>
                        <IconButton color="inherit" ><PersonOutlineOutlinedIcon size='large' /> </IconButton>                                
                        <Box className={classes.Itxt}>Profile</Box>
                    </Box>
                    <Box className={classes.Iconlogo} style={{borderRight:'1px solid #8F2B2F'}}>                               
                        <IconButton color="inherit" ><ShoppingCartOutlinedIcon size='large' /> </IconButton>                                
                        <Box className={classes.Itxt}>Cart</Box>
                    </Box>
                </Box>                
            </Box>
        </Box>
    )
}

export default Header;