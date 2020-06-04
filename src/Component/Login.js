import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  


   function Log(props) {
     console.log(props)
    let history = useHistory();
    const classes = useStyles();
  const formDefaultValue={
    
        Email:"",
        Passwords:"",
        Role:"",
        EmailError:"",
        PasswordsError:""
    }
    const [formValues, setFormValues]=useState(formDefaultValue)
    const {Email,Passwords,EmailError,PasswordsError,Role}=formValues
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
           if(!Passwords){
            PasswordsError="Password Requiered ";
        }
        
            if(!Email.includes("@")){
              EmailError="Email is invalid";
            }
            
            if(EmailError || PasswordsError){
                setFormValues(prevState=>({
                    ...prevState,
                    EmailError:EmailError,
                    PasswordsError:PasswordsError
                  }))
                return false
            }
            return true
        }
        //  make a call to the backed end to get (The Role, and id)
        //  the role and the id is passed to parent using history.push(`/parent/${Role}/hamid`)
        
        const submitHandler= (e)=>{
            
           if(Role){
            history.push(`/parent/${Role}/hamid`)
           }
           
            e.preventDefault()
            const isValidate= validate()
            console.log(formValues)
        //     if(isValidate){
        //         setFormValues(prevState=>({
        //             ...prevState,
        //             EmailError:"",
        //             PasswordsError:""
        //           }))
        //         console.log(isValidate)
        //     console.log(formValues)
        //     // axios.post('http://localhost:4200/auth',formValues).then((res)=>{
        //     //     console.log(res)
        //     //     const token=res.data.token
        //     //     if(token){
        //     //  console.log(token)
        //     //  history.push("/home")
        //     //     }else{
        //     //         setFormValues(prevState=>({
        //     //             ...prevState,
                       
        //     //             EmailError:"Email Address or Password are incorrect",
                       
        //     //           }))
        //         }
           
        //    })
        // }
          }
        

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="Email"
            autoComplete="email"
            autoFocus
            onChange={changeHndler}
            value={Email}
          />
          <div style={{fontSize:12,color:"red"}} >{EmailError}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Passwords"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeHndler}
            value={Passwords}
          />
          <div style={{fontSize:12,color:"red"}} >{EmailError}</div>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            
            <Grid item>
              <Link to ="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              
            </Grid>
          </Grid>
        </form>
        
      </div>
      
    </Container>
  );
  }
  


 export default Log;