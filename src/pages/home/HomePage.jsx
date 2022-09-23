import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/searchBar/SearchBar';
import OfferCard from '../../components/offerCard/OfferCard'
import { Grid } from '@mui/material';


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
      <Grid sx={{ flexGrow: 1, m: '10px 5% 1em' }}>
        <Typography sx={{ color: '#4cb1e3' }}>
          Es hora de empezar 😎
        </Typography>
        <Typography color='text.secondary' >
          Únete al mayor ecosistema de programadores y conoce lo que se está demandado en el mercado.
          Es muy sencillo:
        </Typography>
      </Grid>

    </Grid>
  );
}
