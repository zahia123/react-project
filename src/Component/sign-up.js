import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
    let history = useHistory()
  const classes = useStyles();
  const formDefaultValue={
    LastName:"",
        FirstName:"",
        Email:"",
        Passwords:"",
        Role:"",
        EmailError:"",
         PasswordsError :"",
        LastNameError:"",
        FirstNameError:"",
        RoleError:""
    }
    const [formValues, setFormValues]=useState(formDefaultValue)
    const {LastName,FirstName,Email,Passwords,EmailError,PasswordsError, LastNameError,FirstNameError,Role}=formValues
    const changeHndler=(e)=>{
        const target=e.target
        setFormValues(prevState=>({
          ...prevState,
          [target.name]:target.value
        }))
        }
        const validate=()=>{
            let EmailError="";
            let PasswordsError ="";
            let LastNameError=""
            let FirstNameError="";
            let  RoleError=""
            if(!LastName){
                LastNameError="Last Name Requiered ";
            }
            if(!FirstName){
                FirstNameError="First Name Requiered ";
            }
            if(!Passwords){
             PasswordsError="Password Requiered ";
         }
         
             if(!Email.includes("@")){
               EmailError="Email is invalid";
             }
             if(! Role){
              Role="Role is Requiered ";
          }
             
             if(EmailError || PasswordsError ||LastNameError ||FirstNameError || RoleError){
                 setFormValues(prevState=>({
                     ...prevState,
                     EmailError:EmailError,
                     PasswordsError:PasswordsError,
                     LastNameError:LastNameError,
                     FirstNameError:FirstNameError,
                     RoleError:RoleError
                   }))
                 return false
             }
             return true
         }
        const submitHandler= (e)=>{
            e.preventDefault()
            console.log(formValues)
            const isValidate= validate()
            
        //     if(isValidate){
        //     axios.post('http://localhost:4200/addEmail',formValues).then((res)=>{
        //      console.log(res)
        //      setFormValues(prevState=>({
        //         ...prevState,
               
        //         PasswordsError:"You Singed up succefuly",
                
               
        //       }))
        //    history.push("/singin")
        //    })
        //   }
        history.push("/")
        }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                name="LastName"
                value={LastName}
                autoComplete="lname"
                onChange={changeHndler}
              />
               <div style={{fontSize:12,color:"red"}} >{LastNameError}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="FirstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={FirstName}
                autoFocus
                onChange={changeHndler}
              />
               <div style={{fontSize:12,color:"red"}} >{FirstNameError}</div>
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="Email"
                autoComplete="email"
                value={Email}
                onChange={changeHndler}
              />
               <div style={{fontSize:12,color:"red"}} >{EmailError}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Passwords"
                label="Password"
                type="password"
                id="Passwords"
                value={Passwords}
                autoComplete="current-password"
                onChange={changeHndler}
              />
               <div style={{fontSize:12,color:"red"}} >{PasswordsError}</div>
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Role"
            label="Role"
            type="Role"
            id="Role"
            autoComplete="current-password"
            onChange={changeHndler}
            value={Role}
          />
               <div style={{fontSize:12,color:"red"}} >{PasswordsError}</div>
            </Grid>
            
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}