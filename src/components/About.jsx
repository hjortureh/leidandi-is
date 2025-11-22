import React from 'react';
import Section from './Section';
import './About.css';

const About = () => {
    return (
        <Section className="about-section">
            <div className="about-container">
                <div className="about-block">
                    <h2>Hvers vegna að taka þátt</h2>
                    <p>
                        Heimurinn breytist hratt og fyrirtæki sem kunna að nýta gervigreind verða fljót að skapa forskot í framleiðni, nýsköpun og ákvarðanatöku.
                    </p>
                    <p>
                        Á þessu námskeiði færð þú ekki aðeins kennslu og sýnidæmi heldur líka notalegt rými þar sem stjórnendur ræða saman, deila reynslu úr eigin starfi og læra af hvor öðrum.
                    </p>

                    <h3>Þetta námskeið gefur þér:</h3>
                    <ul className="about-list">
                        <li>Raunhæf vinnubrögð sem nýtast strax</li>
                        <li>Skýra mynd af tækifærum og áhættum</li>
                        <li>Betra yfirlit yfir stærstu tólin og hvernig þau henta þínu starfi</li>
                        <li>Tækifæri til að heyra frá öðrum stjórnendum og sjá hvernig gervigreind nýtist í ólíkum rekstri</li>
                        <li>Lærdómsríkar samræður sem skapa nýjar hugmyndir og innsýn</li>
                    </ul>
                    <p className="emphasis">
                        Markmiðið er að hjálpa þér að spara tíma, auka gæði vinnu og verða leiðandi rödd um gervigreind í þínu umhverfi.
                    </p>
                </div>

                <div className="about-block">
                    <h2>Fyrir hverja?</h2>
                    <p>
                        Leiðandi í gervigreind er fjögurra kvölda námskeið fyrir stjórnendur, millistjórnendur og einstaklinga í eigin rekstri.
                    </p>
                    <h3>Námskeiðið hentar þeim sem vilja:</h3>
                    <ul className="about-list">
                        <li>Nýta gervigreind í daglegum verkefnum</li>
                        <li>Skapa betri niðurstöður á skemmri tíma</li>
                        <li>Styrkja stefnumótun og ákvarðanatöku með gervigreind sem sparringsfélaga</li>
                    </ul>
                    <p>
                        Allt sem þarf er vilji til að læra og vaxa.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;
