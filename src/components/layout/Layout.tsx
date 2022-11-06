import React from 'react';
import { Grid, Link } from '@mui/material';
import { WidgetDefault, WidgetNumber, WidgetList } from '../widgets';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { configuration } from '../../configuration';
import Header from './Header';
import { LayoutType, WidgetType } from '../../model';

const Column = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
    borderRadius: '12px'
}));

const Layout = () => {
    return (
        <div>
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', p: '20px' }} color="inherit">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Dynamic Dashboard
            </Link>
            <Grid container sx={{ padding: '0 20px' }} spacing={4}>
                {configuration.columns.map(({ heading, size, widgets }: LayoutType, configIndex) => (
                    <Grid item xs={size * 2} sx={{ mt: '20px' }} key={configIndex}>
                        <Column elevation={1}>
                            <Header widgets={widgets} heading={heading} size={size} />
                            <Grid container spacing={2} alignItems="stretch" sx={{ mt: '10px' }}>
                                {widgets.map(
                                    (widget, index) =>
                                        WidgetMap(index, widget)[widget.type as keyof typeof WidgetMap] ?? (
                                            <WidgetDefault key={index} />
                                        )
                                )}
                            </Grid>
                        </Column>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export const WidgetMap = (index: number, widget: WidgetType) => ({
    list: <WidgetList {...widget} key={index} />,
    number: <WidgetNumber {...widget} key={index} />
});

export { Layout };
