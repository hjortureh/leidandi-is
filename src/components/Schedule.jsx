import React from 'react';
import Section from './Section';
import './Schedule.css';

const ScheduleItem = ({ title, subtitle, description, points }) => (
    <div className="schedule-item">
        <h3 className="schedule-title">{title}</h3>
        <h4 className="schedule-subtitle">{subtitle}</h4>
        <p className="schedule-description">{description}</p>
        <ul className="schedule-points">
            {points.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
);

const Schedule = () => {
    const evenings = [
        {
            title: "Kvöld 1",
            subtitle: "Þú skilur hvað gervigreind er og hvar hún nýtist í þínu starfi",
            description: "Við förum yfir stóru myndina: hvernig heimurinn er að breytast, af hverju gervigreind skiptir máli fyrir stjórnendur og hvað hún getur í raun og veru.",
            points: [
                "Hvað gervigreind er í einföldu máli",
                "Hver eru helstu tól í dag (ChatGPT, Gemini, Copilot, Claude, Grok og Perplexity)",
                "Hvernig viðmót og stillingar hafa áhrif á niðurstöður",
                "Hvernig ólík tól gefa ólík svör og hvar þau nýtast best"
            ]
        },
        {
            title: "Kvöld 2",
            subtitle: "Þú byrjar að spara tíma með sniðmátum, myndvinnslu, og sjálfvirkni",
            description: "Nú förum við inn í beinan rekstur og daglega vinnu. Þú kemur með raunverulegt efni úr eigin starfi og byggir upp þín eigin sniðmát.",
            points: [
                "Hvernig á að búa til sniðmát fyrir endurtekið efni til dæmis tilboð samninga markaðsefni og tölvupóst",
                "Hvernig á að nota gervigreind til að búa til og betrumbæta prófílmyndir og annað myndefni",
                "Hvað sjálfvirknivæðing getur gert fyrir þig til dæmis einföld flæði sem spara tíma og lágmarka handavinnu"
            ]
        },
        {
            title: "Kvöld 3",
            subtitle: "Þú notar gervigreind sem strategískan ráðgjafa",
            description: "Hér förum við upp á planinu og vinnum með stefnu og framtíðarsýn. Þú kemur með þína eigin stefnu, hugmynd eða áskorun og vinnur beint með henni.",
            points: [
                "Hvernig á að setja fram samhengi og gögn þannig að gervigreind verði betri ráðgjafi",
                "Hvernig á að móta framtíðarstefnu með gervigreind sem sparringsfélaga",
                "Hvernig á að fá gagnrýna og skapandi hugsun í stað flata svara"
            ]
        },
        {
            title: "Kvöld 4",
            subtitle: "Þú átt skýrari sýn á framtíðina áhættu og næstu skref",
            description: "Í loka kvöldinu horfum við fram á við og tengjum allt saman.",
            points: [
                "Hvernig framtíð vinnu og stýrikerfa gæti litið út þegar þjónusta og kerfi tengjast gervigreind",
                "Hvert hlutverk vélmenna og sjálfvirkra kerfa gæti orðið í þínu umhverfi",
                "Hvað stjórnendur þurfa að vita um öryggi trúnað og áhættustýringu í tengslum við gervigreind",
                "Hvert næsta skref er fyrir þig persónulega og fyrir þitt fyrirtæki",
                "Við endum á samantekt, umræðum, vottorðum og smá fögnuði 🎉"
            ]
        }
    ];

    return (
        <Section className="schedule-section">
            <h2 className="text-center">Dagskrá</h2>
            <p className="schedule-intro text-center">
                Námskeiðið hefst 4 febrúar 2025 og er fjóra miðvikudaga í röð frá klukkan 18 til 21.
            </p>
            <div className="schedule-list">
                {evenings.map((evening, index) => (
                    <ScheduleItem key={index} {...evening} />
                ))}
            </div>
        </Section>
    );
};

export default Schedule;
