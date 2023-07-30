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
      Typography,
      Grid,
      Rating
} from '@mui/material'

// INTERNAL IMPORTS
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { BookForm } from '../BookForm';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';

export const BasicCard = () => {
    const { bookData, getData } = useGetData()
    const [open, setOpen ] = useState(false)
    const [cardData, setData ] = useState<GridRowSelectionModel>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    return (
        <Grid container spacing={3}>
            {bookData.map((item: any) => 
            <Grid item xs={10} md={4} lg={3} key={item.id}>
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        height=""
                        width=""
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
                        <Rating />
                        <Button onClick={handleOpen}>Update</Button>
                        <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>
                    </CardActions>
                </Card>
            </Grid>
        )}
        </Grid>
    );
};

export default BasicCard;