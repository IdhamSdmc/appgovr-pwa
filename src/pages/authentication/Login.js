import { capitalCase } from 'change-case';
// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Stack, Link, Tooltip, Container, Typography, Button } from '@material-ui/core';
// routes
// import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
// layouts
// import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { LoginForm } from '../../components/authentication/login';
import AuthFirebaseSocials from '../../components/authentication/AuthFirebaseSocial';

// ----------------------------------------------------------------------
import { supabase } from '../../supabaseClient';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------
export default function Login() {
  const { method, login } = useAuth();

  const handleLoginAuth0 = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle title="Login | ENVISION VR">
      {/* <AuthLayout>
        ¿No tienes cuenta? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
          Conoce GOVR
        </Link>
      </AuthLayout> */}

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography sx={{ px: 4, mt: 10, mb: 5, color: 'secondary' }}>
            Realidad Virtual: otro mundo al alcance de tus ojos
          </Typography>
          <img src="/static/govr/land.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Inicia sesión en ENVISION VR
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Introduzca sus datos a continuación.</Typography>
            </Box>

            <Tooltip title={capitalCase(method)}>
              <Box component="img" src={`/static/auth/ic_${method}.png`} sx={{ width: 32, height: 32 }} />
            </Tooltip>
          </Stack>

          {method === 'firebase' && <AuthFirebaseSocials />}

          {method !== 'auth0' ? (
            <LoginForm />
          ) : (
            <Button fullWidth size="large" type="submit" variant="contained" onClick={handleLoginAuth0}>
              Iniciar Sesión
            </Button>
          )}

          {/* <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              ¿No tienes cuenta?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Inicia aquí
              </Link>
            </Typography>
          </MHidden> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
