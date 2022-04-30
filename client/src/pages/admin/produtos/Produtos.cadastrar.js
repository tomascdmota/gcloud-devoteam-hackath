import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';



import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',},
  title: {flexGrow: 1,},
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
  container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
  paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
  formControl:{width:'100%'},
  btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
}));
export default function ProdutoCadastrar() {
  const classes = useStyles();

  const [valJan , setJan] = useState('');
  const [valFev , setFev] = useState('');
  const [valMar , setMar] = useState('');
  const [valApr , setApr] = useState('');
  const [valMay, setMay] = useState('')
  const [valJun , setJun] = useState('');
  const [valJul , setJul] = useState('');
  const [valAgo , setAgo] = useState('');
  const [valSet , setSet] = useState('');
  const [valOut, setOut] = useState('')
  const [valNov, setNov] = useState('');
  const [valDec , setDec] = useState('');
  
 
  async function handleSubmit(){

    const data = {
      jan :valJan,
      fev:valFev,
      mar:valMar,
      apr: valApr,
      may :valMay,
      jun: valJun, 
      ago: valAgo,
      set:valSet,
      out: valOut,
      nov: valNov,
      dec: valDec
      }
    
/*
      if(jan!==''&&fev!==''&&mar!==''&&apr!==''){
        const response = await api.post('/api/produtos',data);

        if(response.status===200){
          window.location.href='/admin/produtos'
        }else{
          alert('Erro ao cadastrar o produto!');
        }
      }else{
        alert('Por favor, preencha todos os dados!');
      }

     console.log(data)
*/
  }
  

  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'PRODUTOS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{marginBottom:10}} variant="contained" href={'/admin/produtos'}><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
                <h2>Cadastro de Produtos</h2>
                <Grid container spacing={3}> 
                  <Grid item xs={3} sm={3}>
                  <TextField
                    type="number"
                      required
                      id="valJan"
                      name="valJan"
                      label="Jan"
                      fullWidth
                      autoComplete="valJan"
                      value={valJan}
                      onChange={e => setJan(e.target.value)}
                    />
                  </Grid>
                 
                
                  <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valFev"
                      name="valFev"
                      label="Fev"
                      fullWidth
                      autoComplete="valFev"
                      value={valFev}
                      onChange={e => setFev(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valMar"
                      name="valMar"
                      label="Mar"
                      fullWidth
                      autoComplete="valMar"
                      value={valMar}
                      onChange={e => setMar(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valApr"
                      name="valApr"
                      label="Apr"
                      fullWidth
                      autoComplete="valApr"
                      value={valApr}
                      onChange={e => setApr(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valMay"
                      name="valMay"
                      label="May"
                      fullWidth
                      autoComplete="valMay"
                      value={valMay}
                      onChange={e => setMay(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valJun"
                      name="valJun"
                      label="Jun"
                      fullWidth
                      autoComplete="valJun"
                      value={valJun}
                      onChange={e => setJun(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valJul"
                      name="valJul"
                      label="Jul"
                      fullWidth
                      autoComplete="valJul"
                      value={valJul}
                      onChange={e => setJul(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valAgo"
                      name="valAgo"
                      label="Ago"
                      fullWidth
                      autoComplete="valAgo"
                      value={valAgo}
                      onChange={e => setAgo(e.target.value)}
                    />
                  </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valSet"
                      name="valSet"
                      label="Set"
                      fullWidth
                      autoComplete="valSet"
                      value={valSet}
                      onChange={e => setSet(e.target.value)}
                    />
                        </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valOut"
                      name="valOut"
                      label="Out"
                      fullWidth
                      autoComplete="valOut"
                      value={valOut}
                      onChange={e => setOut(e.target.value)}
                    />
                        </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valNov"
                      name="valNov"
                      label="Nov"
                      fullWidth
                      autoComplete="valNov"
                      value={valNov}
                      onChange={e => setNov(e.target.value)}
                    />
                        </Grid> <Grid item xs={3} sm={3}>
                    <TextField
                    type="number"
                      required
                      id="valDec"
                      name="valDec"
                      label="Dec"
                      fullWidth
                      autoComplete="valDec"
                      value={valDec}
                      onChange={e => setDec(e.target.value)}
                    />
                  </Grid>
                </Grid>
                  
              </Paper>
            </Grid>
            
          </Grid>
          
        </Container>
      </main>
    </div>
  );
}