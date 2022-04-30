import React from "react";
import '../../lucas.css'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        SDev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Home(){

    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };






    return(
      <div >
        <header className="header">
    <h1 style={{fontFamily:"monospace", fontSize:50}} >TL DEVS</h1>
    <nav >
        <ul id="hed">
           
            <li className="lis" id="cadas"><a  className="a" href="/admin/cadastrar">Cadastrar</a></li>
            <li className="lis" id="lo"><a  style={{color:'#000'}}  href={'/admin/login'}>Login</a></li>
        </ul>
    </nav>
   
</header> 
<main className="main">
    
     <div className="container1">
        
       <div className="text2">
       <h1>Sistema do Lucas e Tomas</h1>
       <input type={'text'} placeholder={'   Nome'}/>
       <input type={'email'} placeholder={'  E-mail'}/>
       <button>Saber mais</button>
       </div>
    </div>
   
   
</main>
<Box mt={8} style={{backgroundColor:"#fff", marginBottom:30}}>
        <Copyright />
      </Box>
    </div>
    
    
    )
}

export default Home