import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/searchBar/SearchBar';
import OfferCard from '../../components/offerCard/OfferCard'
import { Grid} from '@mui/material';
import './style.css';


export default function HomePage() {
  return (
    <Grid sx={{ m: '0px' }}>
      <Card sx={{ display: 'flex', flexGrow: 1, border: "none", boxShadow: "none" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flexGrow: 2, display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography component="div" variant="h4" sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', color: '#4cb1e3', fontWeight: '600' }} >
              ¿Quieres un cambio?
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              Descubre todas nuestras ofertas digitales
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', color: '#4cb1e3' }}>
              Aquí y ahora
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ flexGrow: 2, width: '100px', height: '361px' }}
          image='https://img.myloview.es/vinilos/css-and-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development-vector-isolated-concept-metaphor-illustration-700-199453935.jpg'
          alt="Developer Home"
        />
      </Card>
      <Grid sx={{ flexGrow: 1, display: 'flex', m: '100px 5% 1em' }} >
        <SearchBar></SearchBar>
      </Grid>
      <Grid sx={{ display: 'flex', m: '3px 6% 1em' }}>
        <Grid>
          <Typography color="text.secondary">
            Ejemplo:
          </Typography>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} >
          <Typography sx={{ color: '#4cb1e3' }}> FRONTEND ... </Typography>
          <Typography sx={{ color: '#2abebc' }}> NODEJS ...</Typography>
          <Typography sx={{ color: '#f9d408' }} > PYTHON </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: 'flex', m: '50px 6% 1em' }}>
        <Grid >
          <Typography color="text.secondary">
            Últimas ofertas:
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ color: '#4cb1e3' }}>
            Ver todas
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ flexGrow: 1, display: 'flex', m: '10px 5% 1em' }}>
        <OfferCard></OfferCard>
      </Grid>
      <Grid sx={{ flexGrow: 1, m: '100px 5% 1em' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#4cb1e3', fontWeight: '600'  }}>
          Es hora de empezar 😎
        </Typography>
        <Typography variant="h6" color='text.secondary' sx={{ textAlign: 'center', justifyContent:'center'}} >
          Únete al mayor ecosistema de programadores y conoce lo que se está demandado en el mercado.
          Es muy sencillo:
        </Typography>
      </Grid>
      <Grid color="text.secondary" sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', mt:'40px' }}>
        <Typography> 1. Dinos quién eres (Nombre, apellidos,  correo y teléfono de contacto)  </Typography>
        <Typography> 2. Envíanos u CV. </Typography>
        <Typography> 3. Inscríbite a las ofertas que te interesen y mantén tu perfil actualizado.</Typography>
      </Grid>
      <div className='JoinUs__button__div'>
      <button className='JoinUs__button'> Iniciar Sesión </button>
      </div>
      <div className='Partners'>
          <div className='Partners__text'>
              <h2> Nuestros Partners </h2>
          </div>
          <div className='Partners__logo'>
            <img className='Parnets__logo__img' src='https://bcasapp.com/wp-content/uploads/2022/04/logo-2.png' alt='logo-thebridge'/>
            <img className='Parnets__logo__img' src='https://esdi.es/wp-content/uploads/2020/04/logonegro-300x116.png' alt='logo-esdi' />
            <img className='Parnets__logo__img'  src='https://www.wearehiring.io/assets/codehouse_academy-b566f06fe13d8bbaf040d6383e9572407117a55765d051d1042c6588b44d6d66.png' alt='logo-wearehiring' />
            <img className='Parnets__logo__img' src='https://connectingvisionsgroup.com/wp-content/uploads/2021/09/favicon-cvg.png' alt='logo-connecting-visions' />
            <img className='Parnets__logo__img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png' alt='logo-micro'/>
            <img className='Parnets__logo__img' src='https://upskillspain.es/wp-content/uploads/2021/07/Logo-KeepCoding-HZ-2.png' alt='logo-keepcoding' />
          </div>
      </div>
    </Grid>
    
   
  );
}
