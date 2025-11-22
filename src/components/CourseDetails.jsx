import React from 'react';
import Section from './Section';
import Button from './Button';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <Section className="course-details-section text-center">
            <div className="details-card">
                <h2>Dagsetningar og staðsetning</h2>
                <div className="details-info">
                    <p className="detail-item">
                        <strong>Upphaf:</strong> 4. febrúar 2025
                    </p>
                    <p className="detail-item">
                        <strong>Hvenær:</strong> Fjórir miðvikudagar í röð
                    </p>
                    <p className="detail-item">
                        <strong>Staðsetning:</strong> Vinnustofa Kjarval
                    </p>
                    <p className="detail-item">
                        <strong>Tími:</strong> 18:00 – 21:00
                    </p>
                </div>
                <div className="details-cta">
                    <Button variant="primary">Skráning á námskeið</Button>
                </div>
            </div>
        </Section>
    );
};

export default CourseDetails;
