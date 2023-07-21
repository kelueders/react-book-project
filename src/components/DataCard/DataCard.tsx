import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import {
      Box,
      Card,
      CardActions,
      CardContent,
      CardMedia,
      Button,
      Typography
} from '@mui/material'

// INTERNAL IMPORTS
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { BookForm } from '../BookForm';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardMedia
            component="img"
            height="194"
            width="30"
            image="src\assets\images\open_book.jpg"
            alt="open book"
        />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            $9.99
            </Typography>
            <Typography variant="h5" component="div">
            The Summons
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            John Grisham
            </Typography>
            <Typography variant="body2">
            A judge leaves behind a shocking secret
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">More</Button>
        </CardActions>
    </Card>
  ) 
}