import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { LayoutType } from '../../model';

const Header = ({ widgets, heading }: LayoutType) => {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={2}
            sx={{ marginTop: '-32px' }}
        >
            {widgets.length > 0 && widgets[0].type === 'list' ? (
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: '4rem',
                        height: '4rem'
                    }}
                >
                    <FormatListNumberedIcon />
                </Button>
            ) : widgets.length > 0 && widgets[0].type === 'number' ? (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '4rem',
                        height: '4rem'
                    }}
                >
                    <Filter9PlusIcon />
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        width: '4rem',
                        height: '4rem'
                    }}
                >
                    <QuestionMarkIcon />
                </Button>
            )}
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 700
                }}
            >
                {heading}
            </Typography>
        </Stack>
    );
};

export default Header;
