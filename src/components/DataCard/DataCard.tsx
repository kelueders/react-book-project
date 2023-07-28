import React, { useState } from 'react'; 
import {
      Box,
      Card,
      CardActions,
      CardContent,
      CardMedia,
      Button,
      Dialog,
      DialogActions,
      DialogContent,
      DialogContentText,
      DialogTitle,
      Typography
} from '@mui/material'

// INTERNAL IMPORTS
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { BookForm } from '../BookForm';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';

export const BasicCard = () => {
    const { bookData, getData } = useGetData()
    // const [open, setOpen ] = useState(false)
    // const [cardData, setData ] = useState<GridRowSelectionModel>([])

    // const handleOpen = () => {
    //     setOpen(true)
    // }

    // const handleClose = () => {
    //     setOpen(false)
    // }

    // const deleteData = () => {
    //     serverCalls.delete(`${gridData[0]}`)
    //     getData()
    // }

    
    const listItems = {bookData.map((item, index) => {   /* this is like enumerating*/
        <Card sx={{ minWidth: 275 }}>
            <CardMedia
                component="img"
                height="194"
                width="45"
                image="src\assets\images\open_book.jpg"
                alt="open book"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{item.price}</Typography>
                <Typography variant="h5" component="div">{item.title}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">`${item.author_first} ${item.author_last}</Typography>
                <Typography variant="body2">{item.summary}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
           
        })}


    const listItems = bookData.map()


        return (
            <Box sx={{ height: 20, width: '20%'}}>

            </Box>
            )}
}