import React from 'react';
import Section from './Section';
import './CourseInfo.css';

const CourseInfo = () => {
    return (
        <Section className="course-info-section text-center">
            <div className="course-info-content">
                <p><strong>Námskeiðið hefst 4. febrúar 2025</strong></p>
                <p>Fjóra miðvikudaga í röð</p>
                <p>18:00 — 21:00</p>
                <p>Vinnustofa Kjarval</p>
                <p>Reykjavík</p>
            </div>
        </Section>
    );
};

export default CourseInfo;
