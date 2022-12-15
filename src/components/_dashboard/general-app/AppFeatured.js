import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  DialogActions,
  MenuItem,
  Stack,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  Snackbar,
  Alert
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { supabase } from '../../../supabaseClient';

const currencies = [
  {
    value: 10,
    label: '10 %'
  },
  {
    value: 20,
    label: '20 %'
  },
  {
    value: 30,
    label: '30 %'
  },
  {
    value: 40,
    label: '40 %'
  },
  {
    value: 50,
    label: '50 %'
  },
  {
    value: 60,
    label: '60 %'
  },
  {
    value: 70,
    label: '70 %'
  },
  {
    value: 80,
    label: '80 %'
  },
  {
    value: 90,
    label: '90 %'
  },
  {
    value: 100,
    label: '100 %'
  }
];
const places = [
  {
    value: 'Dormitorio',
    label: 'Dormitorio'
  },
  {
    value: 'Cocina',
    label: 'Cocina'
  },
  {
    value: 'Garage',
    label: 'Garage'
  }
];
export default function AppFeatured() {
  const [first, setfirst] = useState([]);

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const alertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };
  const [fobia, SetFobia] = useState(null);

  const [form, setForm] = useState({
    id: 0,
    lighting: '',
    dia_noche: '',
    place: ''
  });

  const handleChange = (prop) => (event) => {
    console.log(event.target.value);
    setForm({ ...form, [prop]: event.target.value });
  };
  const handleClickOpen = (id) => {
    // console.log(first[id]);
    SetFobia(first[id]);
    setForm({ ...first[id].configuration[0] });
    setOpen(true);
  };

  const handleSave = () => {
    fnUpdate(form.id);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fnLevels = async () => {
    const { data, error } = await supabase
      .from('level')
      .select(
        `
      id,
      name,
      description,
      image,
      configuration (
        id,
        dia_noche,
        lighting,
        place
      )
    `
      )
      .order('id');
    setfirst(data);
  };
  const fnUpdate = async (id) => {
    const { data, error } = await supabase
      .from('configuration')
      .update({
        dia_noche: form.dia_noche,
        lighting: form.lighting,
        place: form.place
      })
      .eq('id', id);
    if (!error) {
      setAlert(true);
      await fnLevels();
    }
  };
  useEffect(() => {
    fnLevels();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        {first.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="190"
                image={`../../../static/levels/${value.image}`}
                alt="black spider"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" endIcon={<Settings />} onClick={() => handleClickOpen(index)}>
                  CONFIGURAR
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{fobia?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{fobia?.description}</DialogContentText>
        </DialogContent>

        <Stack spacing={2} pl={5} pr={5}>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Intesidad de Luz"
              defaultValue={form?.lighting}
              helperText="Seleccionar valor"
              fullWidth
              onChange={handleChange('lighting')}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <FormLabel id="demo-controlled-radio-buttons-group">Tipo de Movimiento</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              defaultValue={form?.dia_noche}
              onChange={handleChange('dia_noche')}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Estático"
                disabled={form.id === 1 || form.id === 3}
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Dinámico"
                disabled={form.id === 1 || form.id === 3}
              />
            </RadioGroup>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Lugar"
              defaultValue={form?.place}
              helperText="Seleccionar valor"
              fullWidth
              onChange={handleChange('place')}
            >
              {places.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Stack>
        <DialogActions>
          <Button onClick={handleClose}>CANCELAR</Button>
          <Button onClick={handleSave}>GUARDAR</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={alertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={alertClose} severity="success" sx={{ width: '100%' }}>
          Datos actualizados
        </Alert>
      </Snackbar>
    </Container>
  );
}
