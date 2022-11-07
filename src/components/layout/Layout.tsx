import React from 'react';
import { Grid, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { configuration } from '../../configuration';
import { LoadConfiguration } from './LoadConfiguration';

const Layout = () => {
    return (
        <div>
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', p: '20px' }} color="inherit">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Dynamic Dashboard
            </Link>
            <Grid container sx={{ padding: '0 20px' }} spacing={5}>
                <LoadConfiguration configuration={configuration} />
            </Grid>
        </div>
    );
};

export { Layout };
