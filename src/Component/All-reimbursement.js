

import React, { useEffect,useState } from 'react';
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../App.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function View(props) {
//  this useEffect watch for any change in the props passed from parent component
  useEffect(() => {
    setPsts1(posts2)
      
  },[props.obj]);
 
  
  var posts2=props.obj
  var role=props.pass

  const classes = useStyles();
  var [Type, setType] = useState();
  var [posts1,setPsts1]=useState(posts2 ? posts2 :[])
  var [File,setFile]= useState()
  var [Request,setRequest]=useState('Pending')
  var childData =[Type,File]
  // this function watches for change in type forms
  const handleChange = (event) => {
    setType(event.target.value);
   
  };
// this function watches for change in files forms
  const handleChange1 = (event) => {
   setFile(event.target.files[0]);
   
  };
  
   
  // this function toggel the request according to status the manager want to see
  const handleChange2 = (event) => {
    setPsts1(posts2)
    setRequest(event.target.value)
    let status=event.target.value
    
    
    if(status=='Approved'){
     let result = posts2.filter(post => post.Status == status);
      setPsts1(result)
      
    }
    if(status=='Denied'){
      let result = posts2.filter(post => post.Status == status);
      setPsts1(result)
        
      }
      if(status=='All'){
        setPsts1(posts2)
        
      }
         
  };
  
  const names=[
    'LODGING', 
    'TRAVEL', 
    'FOOD', 
    'OTHER'
]
const requestStatus1=[
  'Approved',
  'Denied',
  "All"
]
  var form=null
  var select=null
  var button2=null
    if(role==="Manager"){
       select=(
         
            <FormControl className={classes.formControl} style={{backgroundColor:'white',width:200}} >
           <InputLabel id="demo-simple-select-label" ><b>Status</b></InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={Request}
        onChange={handleChange2} >
        {requestStatus1.map((requestStatus) => (
          <MenuItem key={requestStatus} value={requestStatus}  >{requestStatus} </MenuItem>
        ))}
         
      </Select>
      
      </FormControl>
     
       )}
       
    if(role==="Employee"){
      button2=(
       <Button type="submit" variant="contained" 
        color="secondary"style={{  marginTop : 20 }}  
        onClick={() => props.click(childData)} >add</Button> )

      form=(
        <div>
          <FormControl className={classes.formControl}  >
        <InputLabel id="demo-simple-select-label" type="file">Types</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={Type} onChange={handleChange}  >
          {names.map((name) => (
            <MenuItem key={name} value={name} >{name} </MenuItem>
          ))}
        </Select>
       
        <input onChange={handleChange1} id="upload-File" name="upload-File" type="file" style={{  marginTop : 20 }} 
       
        className={classes.input}
        />
       {button2}
        
      </FormControl>
      
      </div>
        )}


  return  (
    <React.Fragment>
     
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Last-Name</StyledTableCell>
            <StyledTableCell align="right"  >First-Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            
            <StyledTableCell align="right" ></StyledTableCell>
            <StyledTableCell align="right" > {select}</StyledTableCell>
            </TableRow >
        </TableHead >


        <TableBody  >
        {posts1.map((post) => (
          <StyledTableRow key={post.Personid}   >
              <StyledTableCell component="th" scope="row" id={post.Personid} >
              {post.LastName}
              </StyledTableCell>
              <StyledTableCell align="right"  >{post.FirstName}</StyledTableCell>
              <StyledTableCell align="right" >{post.Status}</StyledTableCell>
              <StyledTableCell align="right" >{post.type}</StyledTableCell>
              
              <StyledTableCell align="right">
              { role==="Manager" ?
              <div>
                <Button type="submit"variant="contained" onClick={()=>props.denied(post.Personid)} 
               color="secondary" style = {{  marginRight : 50 }}>Deny</Button>
                
               <Button type="submit"variant="contained" onClick={()=>props.Approved(post.Personid)}
               color="secondary" style={{  marginRight : 20 }}>Approve</Button>
              </div>
              :null
              } 
            </StyledTableCell>
            </StyledTableRow> ))}
            
       </TableBody>
      </Table>
      </TableContainer>
      <div >
        {form }
      </div>
     
     </React.Fragment>
  );
}

export default View;