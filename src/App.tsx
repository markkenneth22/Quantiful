import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './customTheme';
import { Layout } from './components/layout';

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
