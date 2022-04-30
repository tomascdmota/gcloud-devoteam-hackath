import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Chart } from "react-google-charts";
import '../../../App.css'



import MenuAdmin from '../../../components/menu-admin';
import { getTipoUsuario } from '../../../services/auth';






import api from '../../../services/api';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowY: 'hidden',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
 
}));

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1200, 400],
  ["2005", 1700, 660],
  ["2006", 666, 1020],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};




export default function Dashboard() {
  const classes = useStyles();
/*

  function getDashboard(){
    if(getTipoUsuario()==='1'){
      return <DashAdmin />
    }else if( getTipoUsuario()==='2'){
      return <Dashfuncionario />
    }
  }

*/

  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'Dashboard'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>         
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                <div>
                  <div style={{width:1000, height:700}}>
                  <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
                  </div>
                </div>
                  </Grid>
                </Grid>
             
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

