import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  wrapper: {
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  login: {
    textTransform: 'none',
    background: 'linear-gradient(45deg, #FB76C1 30%, #F2BF6C 90%)'
  }
}));

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const classes = useStyles();
    
    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} className={classes.wrapper} >
                <form className={classes.root} noValidate autoComplete="off" >
                    <div>
                        <TextField id="username" label="Username" fullWidth/>
                    </div>
                    <div>
                        <TextField id="password" label="Password" fullWidth/>
                    </div>
                    <Button variant="contained" color="primary" className={classes.login} >
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default LoginPage;