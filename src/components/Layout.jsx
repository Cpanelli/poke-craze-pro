import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';


const Layout =({children})=>{
    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default Layout;
