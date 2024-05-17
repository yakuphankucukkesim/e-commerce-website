import { FC, ReactNode } from 'react';

import { Grid } from '@mui/material';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'
    >
      <img src='pngegg2.png' alt='shopapp' width='113px' />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
