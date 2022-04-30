import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import EqualizertIcon from '@material-ui/icons/Equalizer';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { getToken, logout } from "../services/auth";
import api from "../services/api";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    <ListItem button component="a" href="/admin/produtos" >
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Performance" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button onClick= {confirmSair} >
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);

async function confirmSair(){
  if(window.confirm("Deseja realmente sair do sistema?")){
    const response = await api.get("/api/usuarios/destroytoken",{headers:{token: getToken()}});
    if(response.status===200){
      logout();
      window.location.href = '/admin/login'
    }else{
      alert("Não foi possível fazer o logout!");
    }
  }
}