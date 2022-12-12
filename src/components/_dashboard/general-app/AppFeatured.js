import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { supabase } from '../../../supabaseClient';

export default function AppFeatured() {
  const [first, setfirst] = useState([]);

  const fnLevels = async () => {
    const { data, error } = await supabase.from('level').select().order('id');
    setfirst(data);
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
                <Button size="medium" endIcon={<Settings />}>
                  CONFIGURAR
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
