import { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router'
import Amplify, { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
        background: '#FFFFFF',
        color: '#363D44'
    },
    iconBtn: {
        color: '#fff'
    },
    inputRoot: {
        color: 'inherit',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
    avatar: {
        marginLeft: theme.spacing(2),
    }
}));

const NavbarComponent = () => {
    const classes = useStyles();
    const router = useRouter()
    const [user, setUser] = useState(null);
    useEffect(() => {
        checkCurrentUser()
    }, [])

    const checkCurrentUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log('user', user)
        } catch (error) {
            console.log('--->', error)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Container >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Amplified
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                        {
                            !user ? <Button color="inherit" onClick={() => router.push('/login')}>
                                    Login
                                </Button> : 
                            (
                                <>
                                    <Button variant="contained" color="primary" style={{ textTransform: 'none' }}>
                                        Write a post
                                    </Button>

                                    <IconButton className={classes.avatar} color="inherit">
                                        <NotificationsIcon />
                                    </IconButton>

                                    <Avatar
                                        className={classes.avatar}
                                        alt="Remy Sharp" 
                                        src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg" 
                                    />

                                </>
                            )
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavbarComponent;