// EXTERNAL IMPORTS
import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'; 
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, 
    Typography} from '@mui/material'; 
import { getAuth } from 'firebase/auth';

// INTERNAL IMPORTS
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { BookForm } from '../BookForm';

const columns: GridColDef[] = [
    {
        field: 'id', 
        headerName: 'ID', 
        width: 90
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 150
    },
    {
        field: 'author_first',
        headerName: 'Author First Name',
        width: 150
    }, 
    {
        field: 'author_last',
        headerName: 'Author Last Name',
        width: 110
    },
    {
        field: 'summary',
        headerName: 'Summary',
        width: 150
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150
    },
    {
        field: 'num_pages',
        headerName: 'Number of Pages',
        width: 150,
        type: 'number'
    },
    {
        field: 'publisher',
        headerName: 'Publisher',
        width: 150
    },
    {
        field: 'published_year',
        headerName: 'Year Published',
        width: 150
    },
    {
        field: 'isbn',
        headerName: 'ISBN',
        width: 150
    }
];

export const DataTable = () => {
    const { bookData, getData } = useGetData()
    const [open, setOpen ] = useState(false)
    const [gridData, setData ] = useState<GridRowSelectionModel>([])

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

    const myAuth = localStorage.getItem('myAuth')

    if (myAuth === 'true'){
    return (
        <Box sx={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={bookData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>

            {/* Dialog Pop Up for Updating a Book */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update</DialogTitle>
                <DialogContent>
                    <DialogContentText>Book id: {gridData[0]}</DialogContentText>
                    <BookForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                </DialogActions>
            </Dialog>

        </Box>
    )} else {
        return (
            <Box>
                <Typography variant='h4'>Please Sign In to View Your Drones</Typography>
            </Box>
        )
    }
  }