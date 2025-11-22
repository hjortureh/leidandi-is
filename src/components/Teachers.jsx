import React from 'react';
import Section from './Section';
import './Teachers.css';

const Teacher = ({ name, description, image }) => (
    <div className="teacher-card">
        <div className="teacher-image-container">
            <img src={image} alt={name} className="teacher-image" />
        </div>
        <div className="teacher-info">
            <h3 className="teacher-name">{name}</h3>
            <div className="teacher-bio">
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    </div>
);

const Teachers = () => {
    return (
        <Section className="teachers-section">
            <h2 className="text-center">Leiðbeinendur</h2>
            <div className="teachers-grid">
                <Teacher
                    name="Hjörtur Elvar Hilmarsson"
                    description={[
                        "Hjörtur er framkvæmdastjóri hönnunar- og tæknistofunnar 14islands sem vinnur fyrir alþjóðleg fyrirtæki á borð við Google, Spotify og Cartier. Með yfir 20 ára reynslu af stjórnun og hugbúnaðarþróun hefur hann leitt fyrirtækið í fremstu röð á sviði stafrænnar upplifunar.",
                        "Sérsvið Hjartar er að hjálpa fyrirtækjum að vaxa með krafti hönnunar og tækni. Undanfarið hefur hann stutt við nýsköpun á sviði gervigreindar, og sjálfur nýtir hann gervigreind daglega í sínum störfum til að straumlínulaga rekstur og hámarka afköst.",
                        "Hjörtur var einnig deildarstjóri við Harbour.Space háskólann í Barcelona, þar sem hann miðlaði tæknilega reynslu og kenndi nemendum flókin umfangsefni á lifandi og árangursríkan hátt."
                    ]}
                    image="/assets/hjortur.jpg"
                />
                <Teacher
                    name="Sæunn Ósk Unnsteinsdóttir"
                    description={[
                        "Sæunn er stjórnarformaður og fyrrverandi framkvæmdastjóri Hopp. Hún leiddi Hopp til ótrúlegs vaxtar í Reykjavík, þar sem það þroskaðist í leiðandi fyrirtæki og breytti ferðavenjum borgarbúa.",
                        "Víðtæk reynsla hennar af rekstri spannar mörg svið, en áður stofnaði og rak hún Unique, eina fremstu hárgreiðslustofu landsins í mörg ár. Hún starfar nú sem sérfræðingur hjá HMS og er að dýpka þekkingu sína á starfsemi hins opinbera.",
                        "Sæunn hefur reynslu af því að sameina ólíka sýn og reynslu — frá hágæðaþjónustu til tæknidrifinnar nýsköpunar. Hún leggur áherslu á mannlega þáttinn í stjórnun, og þekkir mikilvægi þess að leiða saman gott fólk til að skila árangri."
                    ]}
                    image="/assets/saeunn.jpg"
                />
            </div>
        </Section>
    );
};

export default Teachers;
