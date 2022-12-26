import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import Book from '../../components/book/Book';
import Header from '../../components/header/Header';
import { getAllBooks } from '../../services/DataService';

const useStyle = makeStyles({
    bookDash: {
        display: 'flex',
        boxSizing: 'border-box',
        position: 'relative',
        left: '210px',
        width: '73vw',
        top: '10vh',
        flexWrap: 'wrap',
        border: '1px solid black'
    }
})

function DashboardMain() {
    const classes = useStyle()

    const [booksArray, setBooksArray] = useState([])


    useEffect(() => {
        getAllBooks()
        .then((response) => {
            console.log(response)
            setBooksArray(response.data.response)
        })            
        .catch((error) => console.log(error))
        console.log('Get all')
    }, [])

    return (
        <div>
            <Header />
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