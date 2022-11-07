import React from 'react';
import { Box, Chip, Grid, Divider, Typography, Zoom } from '@mui/material';
import { WidgetType, WidgetListResponseType } from 'model';
import useFetch from 'utils/useFetch';

export const initialValueWidgetList = {
    count: 0,
    results: [{ name: '', url: '' }]
};

const WidgetList = ({ api, title }: WidgetType) => {
    const { data, loading } = useFetch<WidgetListResponseType>(api, initialValueWidgetList);
    return (
        <Zoom in={!loading}>
            <Grid item xs={12}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Box sx={{ mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                    {title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ m: 2 }}>
                        <Typography gutterBottom variant="body1">
                            List of {title}
                        </Typography>
                        <div>
                            {data.results.map(({ name }) => (
                                <Chip key={name} label={name} sx={{ p: '5px', m: '5px' }} />
                            ))}
                        </div>
                    </Box>
                </Box>
            </Grid>
        </Zoom>
    );
};

export { WidgetList };
