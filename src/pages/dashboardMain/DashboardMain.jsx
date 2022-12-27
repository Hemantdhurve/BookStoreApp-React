import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Book from '../../components/book/Book';
import Box from '@mui/material/Box';
import Header from '../../components/header/Header';
import { getAllBooks } from '../../services/DataService';

const useStyle = makeStyles({
    topbox: {
        display: 'flex',
        position: 'relative',
        left: '15.3vw',
        width: '69.5vw',
        top:'3vh',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topinbox: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        width: '13%'
    },
    txtBook: {
        fontSize: '20px',
        fontWeight: '600'
    },
    subtxt: {
        position: 'relative',
        left: '5px',
        fontSize: '12px',
        fontWeight: '500',
        color: '#9D9D9D'
    },
    dropselect: {
        height: '5vh',
        width: '13vw',
        outline: 'none',
        fontSize: '15px',
    },
    bookDash: {
        display: 'flex',
        boxSizing: 'border-box',
        position: 'relative',
        left: '210px',
        width: '73vw',
        top: '8vh',
        flexWrap: 'wrap',
    }
})

function DashboardMain() {
    const classes = useStyle()

    const [booksArray, setBooksArray] = useState([])

    useEffect(() => {
        getAllBooks()
        .then((response) => {
            console.log(response)
            //response getting in response.data.response now
            console.log(response.data.response)
            setBooksArray(response.data.response)
        })            
        .catch((error) => console.log(error))
        console.log('Retrived all Books')
    }, [])

    return (
        <div>
            <Header />
            <Box className={classes.topbox}>
                <Box className={classes.topinbox}>
                    <Box className={classes.txtBook}>
                        Books
                    </Box>
                    <Box className={classes.subtxt}>(10 items)</Box>
                </Box>
                <select className={classes.dropselect}>
                    <option value="Sort by relevance">Sort by relevance</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest Arrivals">Newest Arrivals</option>
                </select>
            </Box>
            {/* <Book /> */}
            <div className={classes.bookDash}>
                {
                    booksArray.map((book) => (< Book book={book} />))
                }
            </div>
        </div>
    )
}

export default DashboardMain;