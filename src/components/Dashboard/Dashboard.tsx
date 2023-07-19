import React, { useState } from 'react';
import { Drawer as MUIDrawer,
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../Theme/themes';

const drawerWidth = 240;

const myStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }) 
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth, 
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {     
        width: drawerWidth,
        flexShrink: 0    // don't want it shrinking depending on screen size
    },
    drawerPaper: {
        width: drawerWidth, 
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,    // brings in all the rest of the key value pairs
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: 0
    },
    contentShift: {
        transitions: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut, 
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    toolbar: {
        display: 'flex',
      },
    toolbarButton: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.contrastText
    }
}

export const Dashboard = () => {
    // The first 2 lines are using React Hooks to create a navigation function 
    // and set classic state properties. The next 2 functions use the classic state properties.
    // React applications are built from components. 
    // Components are built from Hooks, whether built-in or custom.
    const navigate = useNavigate();
    const [ open, setOpen ] = useState(false);   // drawer is set to false or closed at first

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        {
            text: 'Sign In',
            onClick: () => navigate('/signin')
        }
    ]

    return (
        // think of this as a div, just Material Mui's way of doing it
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            {/* Allows are component to render a top bar with an icon at a position=fixed to the top */}
            {/* Then we style it with sx prop and switch it based on the state of open */}
            <AppBar
                sx={ open ? myStyles.appBarShift : myStyles.appBar }   // coming directly from styles object
                position='fixed'
            >
                <Toolbar sx={myStyles.toolbar}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={ open ? myStyles.hide : myStyles.menuButton }  // don't want to see it unless it's open
                >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap> Dashboard</Typography>
                    <Button sx={ myStyles.toolbarButton }>Create New Book</Button>
                </Toolbar>
            </AppBar>
            {/* Display our navigation options, shows the things inside the itemsList */}
            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant="persistent"
                anchor="left"
                open={open}
                style={{width:drawerWidth}}
            >
                <Box sx={myStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {/* uses this a lot when wanting to conditionally render something */}
                        { theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}     
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {/* maps over the contents of the itemsList */}
                    {itemsList.map((item, index) => {   /* this is like enumerating*/
                        const { text, onClick } = item;
                        return (
                        <ListItemButton key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        )
                })}
                </List>
            </MUIDrawer>
            {/* display the data we wish to see, styling with classes we created before */}
            {/* Box component is basically a div that we use to access our theme */}
            <Box sx={ myStyles.content } >
                <Box sx={ myStyles.drawerHeader} />
                    <h1>Hello World Until Data Shows Up</h1>
                </Box>
            </Box>
    )
}