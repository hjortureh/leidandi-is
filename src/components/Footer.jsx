import React from 'react';
import Section from './Section';
import Button from './Button';
import './Footer.css';

const Footer = () => {
    return (
        <Section className="footer-section text-center">
            <div className="footer-cta">
                <Button variant="primary" href="https://subscribepage.io/cdZN0k">Skráning á biðlista</Button>
            </div>
            <div className="footer-ai-notice">
                <p>Leiðandi í gervigreind @ 2025.</p>
            </div>
        </Section >
    );
};

export default Footer;
