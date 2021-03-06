import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const moreThan150Props = {
    bgcolor: '#f44336',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };
  
  const moreThan120Props = {
    bgcolor: '#fa5788',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };
  
  const moreThan100Props = {
    bgcolor: '#ff8a50',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };
  const moreThan80Props = {
    bgcolor: '#ffca28',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };
  const moreThanAWeekProps = {
    bgcolor: '#81d4fa',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };
  const herdImmunityProps = {
    bgcolor: '#e0e0e0',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };

  export default function MapGrid(){
    return(
      <Grid spacing ={10} container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan150Props}>
              </Box>
              <h3>150+ Days to reach Herd Immunity</h3>
            </Grid>
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan120Props}>
              </Box>
              <h3>120+ Days to reach Herd Immunity</h3>
            </Grid>
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan100Props}>
              </Box>
              <h3>100+ Days to reach Herd Immunity</h3>
            </Grid>
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan80Props}>
              </Box>
              <h3>80+ Days to reach Herd Immunity</h3>
            </Grid>
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThanAWeekProps}>
              </Box>
              <h3>8+ Days to reach Herd Immunity</h3>
            </Grid>
            <Grid item>
              <Box borderRadius="borderRadius" {...herdImmunityProps}>
              </Box>
              <h3>Already reached Herd Immunity</h3>
            </Grid>
        </Grid>
      );
  }