import React from 'react';
import { Grid } from '@mui/material';
import { WidgetDefault, WidgetNumber, WidgetList } from '../widgets';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from '../layout/Header';
import { LayoutType, WidgetType, ConfigType } from '../../model';

const Column = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
    borderRadius: '12px'
}));

const LoadConfiguration = ({ configuration }: { configuration: ConfigType }) => {
    if (configuration.columns.length === 0) return <div>Invalid configuration</div>;
    return (
        <>
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
        </>
    );
};

const WidgetMap = (index: number, widget: WidgetType) => ({
    list: <WidgetList {...widget} key={index} />,
    number: <WidgetNumber {...widget} key={index} />
});

export { LoadConfiguration };
