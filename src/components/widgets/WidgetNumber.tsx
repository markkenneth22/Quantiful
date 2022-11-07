import React from 'react';
import { Box, Avatar, Typography, Grid, Zoom } from '@mui/material';
import { WidgetType, WidgetNumberResponseType } from 'model';
import useFetch from 'utils/useFetch';
import { styled } from '@mui/material/styles';

export const initialValueWidgetNumber = {
    id: 0,
    name: '',
    pokemon_species_details: []
};

const WidgetNumber = ({ api, title }: WidgetType) => {
    const { data, loading } = useFetch<WidgetNumberResponseType>(api, initialValueWidgetNumber);

    return (
        <Zoom in={!loading} style={{ transitionDelay: '100ms' }}>
            <Grid item xs={6}>
                <CustomBox>
                    <Avatar sx={{ bgcolor: '#1976D2', fontWeight: '600', mb: '20px', p: '5px' }}>
                        {title.split(' ').map((item) => item[0].toUpperCase())}
                    </Avatar>
                    <Typography variant="h3">{data.pokemon_species_details.length}</Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }} data-testid="widget-number-name">
                        {title}
                    </Typography>
                </CustomBox>
            </Grid>
        </Zoom>
    );
};

const CustomBox = styled(Box)(() => ({
    backgroundColor: 'rgb(209, 233, 252)',
    border: 'none',
    padding: '40px 0',
    textAlign: 'center',
    color: 'rgb(6, 27, 100)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export { WidgetNumber };
