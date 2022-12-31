import React from 'react'
import Header from '../../components/header/Header';
import Box from '@mui/material/Box';
import Cart from '../../components/cart/Cart';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    topbox: {
        display: 'flex',
        position: 'relative',
        left: '15.3vw',
        width: '69.5vw',
        top: '3vh',
        alignItems: 'center',
    },
    topinbox: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        width: '13%',
        color: '#9D9D9D'
    },
    txtBook: {
        fontSize: '13px',
        fontWeight: '500'
    },
    subtxt: {
        position: 'relative',
        left: '5px',
        fontSize: '12px',
        fontWeight: '500',
        color: 'black'
    },
})

function CartDashboard() {
    const classes = useStyle()
    return (
        <div>
            <Header />
            <Box className={classes.topbox}>
                <Box className={classes.topinbox}>
                    <Box className={classes.txtBook}>
                        Home /
                    </Box>
                    <Box className={classes.subtxt}>My Cart</Box>
                </Box>
            </Box>
            <Cart />
        </div>
    )
}

export default CartDashboard;