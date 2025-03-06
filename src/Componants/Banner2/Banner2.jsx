import React, { useState } from 'react';
import './Banner2.scss';
import image2 from '../../Assets/Images/image2.jpg';
import image3 from '../../Assets/Images/image3.jpg';

const Banner2 = () => {
  const [activeSection, setActiveSection] = useState(1); // State to track active section

  // Section descriptions
  const sections = [
    {
      id: 1,
      title: "Futurist",
      description: `
        Die Zukunft vorherzusehen ist unmöglich. Aber es gibt Techniken, um vorhersagen zu können, wie sich unsere Welt mit ihren Märkten und Technologien wahrscheinlich entwickeln werden. Seit vielen Jahren arbeite und forsche ich in den Bereichen Zukunftsforschung und Innovationsmanagement.
  
        Dabei ist es mir wichtig, all meine Arbeiten, Veröffentlichungen und Vorträge auf eine haltbare wissenschaftliche Basis zu stellen. Als Professor für digitale Wissenschaften, Automatisierung und Leadership an der Hochschule Bayrische Wirtschaft (HDBW), möchte ich meinen Forschungs- und Lehrauftrag gleichermaßen erfüllt wissen.
  
        Besonders freut es mich, wenn meine Ideen und Erkenntnisse aufgegriffen werden und die Grundlage bilden für Unternehmensstrategien und Regierungspläne oder von anderen Initiativen und Forschungsgruppen verwendet werden. Unter anderem sogar von den Vereinten Nationen, dem Europäischen Parlament und dem Weißen Haus.
      `
    },
    {
      id: 2,
      title: "TechNo-optimist",
      description: `
        Bereits als Kind begeisterten mich technologische Entwicklungen. Mit 12 Jahren bekam ich meinen ersten Computer geschenkt und wusste von da an, dass ich Informatiker werden will.
  
        Seit dieser Zeit habe ich mir meine Begeisterung für technologische Innovationen bewahrt und mich von ihr stets leiten lassen. Vor allem aber wollte - nein musste - ich diesen Enthusiasmus immer mit anderen Menschen teilen. Es bereitet mir große Freude, andere zu inspirieren und ihnen vor allem die Vorbehalte und Ängste zu nehmen, die der technologische Fortschritt häufig mit sich bringt.
  
        In meinen Vorträgen passe ich die Inhalte stets sehr genau an die Bedürfnisse und Wünsche meiner Zielgruppe an. Denn ich möchte immer auf Augenhöhe kommunizieren. Das ist einer der wichtigsten Aspekte meines Handelns. Technologischer Fortschritt soll der Allgemeinheit dienen und deshalb muss er auch so besprochen werden, dass alle mitreden können.
      `
    },
    {
      id: 3,
      title: "Innomancer",
      description: `
        Die Idee des technologischen Evangelisten, der seine Überzeugung vor sich herträgt, um andere zu begeistern, hat mir immer gut gefallen. Lange habe ich mich damit identifiziert. Ich möchte Innovationen, Ideen und Trends beschreiben und andere für Zukunftstechnologien begeistern. Darüber hinaus möchte ich mit meinem Wirken, meinen Studien und Thesen neue Innovationen heraufbeschwören. Sie halten mich für einen Geek oder Nerd? Mag sein.
  
        Ich selbst bezeichne mich lieber als Innomancer. Wörtlich übersetzt bedeutet Innomancer „Ideenbeschwörer“ oder „Innovationsbeschwörer“. So heißt übrigens auch meine Firma (Thinktank), über die ich mich mit Gleichgesinnten vernetze und meine Projekte vorantreibe. Schauen Sie doch mal vorbei.
      `
    }
  ];
  
  

  return (
    <div>
      {/* Banner Section */}
      <div className="banner2">
        <div className="banner2__image banner2__image--left">
          <img src={image2} alt="Banner 2" />
        </div>
        <div className="banner2__image banner2__image--right">
          <img src={image3} alt="Banner 3" />
        </div>
      </div>

      {/* New Section */}
      <div className="content-section">
        {/* Left Side - Sections */}
        <div className="content-section__left">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </div>
          ))}
        </div>

        {/* Right Side - Description */}
        <div className="content-section__right noto-sans">
          {/* <h2>{sections[activeSection - 1].title}</h2> */}
          <p>{sections[activeSection - 1].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;