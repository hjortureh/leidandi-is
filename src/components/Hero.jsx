import React from 'react';
import Section from './Section';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <Section className="hero-section">
            <div className="hero-content text-center">
                <h1 className="hero-title">Leiðandi í gervigreind</h1>
                <div className="hero-letter">
                    <p className="hero-subtitle">
                        Kvöldnámskeið fyrir stjórnendur sem vilja margfalda árangur og sköpunarkraft í starfi með hjálp gervigreindar.
                    </p>
                    <p>
                        Þú lærir að beita gervigreind í raunverulegum verkefnum og byggir upp sjálfstraust til að leiða fólk og fyrirtæki inn í nýja tækniöld.
                    </p>
                </div>
                <div className="hero-cta">
                    <Button variant="primary" href="https://subscribepage.io/cdZN0k">Skráning á biðlista</Button>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
