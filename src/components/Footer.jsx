import React from'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Footer = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                &copy; 2024 PokeCrazePro. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Footer;