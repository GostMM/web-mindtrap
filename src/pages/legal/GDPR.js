import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 120px 2rem 4rem;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.theme.colors.text};
`;

const PageTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  
  span {
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const UpdatedDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const InfoBox = styled.div`
  background-color: rgba(30, 30, 48, 0.7);
  border-left: 4px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0;
    font-size: 0.95rem;
  }
`;

const BackButton = styled(motion.button)`
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: rgba(124, 77, 255, 0.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

function GDPR({ lang }) {
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "<span>GDPR</span> Compliance",
      updated: "Last updated: January 1, 2025",
      backButton: "Back to Home",
      infoBox: {
        title: "About the GDPR",
        content: "The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy that applies to all individuals within the European Union and the European Economic Area. It also addresses the export of personal data outside the EU and EEA areas."
      },
      sections: [
        {
          title: "1. Introduction",
          content: [
            "At MindTrap, we are committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This policy explains how we process your personal data in compliance with the GDPR and your rights as a data subject."
          ]
        },
        {
          title: "2. Data Controller",
          content: [
            "MindTrap acts as the data controller for the personal data we process. This means that we determine the purposes and means of processing your personal data.",
            "Our contact details are:",
            "MindTrap",
            "1 Avenue du Bien-être, 75001 Paris, France",
            "Email: privacy@mindtrap.com"
          ]
        },
        {
          title: "3. Lawful Basis for Processing",
          content: [
            "We process your personal data on the following lawful bases:"
          ],
          contentList: [
            "Consent: We process personal data based on your explicit consent, which you may withdraw at any time.",
            "Contract: We process personal data when necessary for the performance of a contract or to take steps at your request before entering into a contract.",
            "Legitimate Interests: We process personal data when it is necessary for our legitimate interests and when those interests are not overridden by your data protection rights.",
            "Legal Obligation: We process personal data when it is necessary to comply with a legal obligation."
          ]
        },
        {
          title: "4. Your Rights Under GDPR",
          content: [
            "Under the GDPR, you have several rights regarding your personal data:"
          ],
          contentList: [
            "Right to Access: You have the right to obtain confirmation of whether we process your personal data and to access this personal data.",
            "Right to Rectification: You have the right to have inaccurate personal data corrected and incomplete personal data completed.",
            "Right to Erasure ('Right to be Forgotten'): You have the right to have your personal data erased in certain circumstances.",
            "Right to Restriction of Processing: You have the right to restrict the processing of your personal data in certain circumstances.",
            "Right to Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit this data to another controller.",
            "Right to Object: You have the right to object to the processing of your personal data in certain circumstances, including processing for direct marketing.",
            "Right not to be Subject to Automated Decision-making: You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects or significantly affects you."
          ],
          content2: [
            "To exercise these rights, please contact us using the details provided in the 'Data Controller' section above."
          ]
        },
        {
          title: "5. International Data Transfers",
          content: [
            "We may transfer your personal data to countries outside the European Economic Area (EEA). When we do so, we ensure appropriate safeguards are in place to protect your data and to comply with our legal obligations. These safeguards may include:",
            "Data transfer agreements, which include standard contractual clauses approved by the European Commission.",
            "EU-US Privacy Shield certification (where applicable).",
            "Binding corporate rules for transfers within our group of companies.",
            "If you wish to learn more about the specific mechanism used by us when transferring your personal data out of the EEA, please contact us."
          ]
        },
        {
          title: "6. Data Retention",
          content: [
            "We will retain your personal data only for as long as is necessary for the purposes set out in our Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
            "We will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer periods."
          ]
        },
        {
          title: "7. Data Protection Measures",
          content: [
            "We have implemented appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:",
            "Encryption of personal data where appropriate",
            "Regular testing, assessing, and evaluating the effectiveness of technical and organizational measures",
            "Procedures for restoring access to personal data in the event of an incident",
            "Regular data protection training for all staff"
          ]
        },
        {
          title: "8. Automated Decision Making",
          content: [
            "We do not use your personal data for automated decision-making that produces legal effects or significantly affects you. While our App may use algorithms to provide personalized content, these do not constitute automated decision-making as defined by the GDPR."
          ]
        },
        {
          title: "9. Complaints",
          content: [
            "If you have concerns about our processing of your personal data, you have the right to lodge a complaint with a supervisory authority. Contact details for data protection authorities in the European Union are available at: https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm"
          ]
        },
        {
          title: "10. Changes to This GDPR Policy",
          content: [
            "We may update our GDPR Policy from time to time. We will notify you of any changes by posting the new GDPR Policy on this page and updating the 'Last Updated' date at the top.",
            "You are advised to review this GDPR Policy periodically for any changes. Changes to this GDPR Policy are effective when they are posted on this page."
          ]
        },
        {
          title: "11. Contact Us",
          content: [
            "If you have any questions about our GDPR Policy or our processing of your personal data, please contact our Data Protection Officer at:",
            "Email: dpo@mindtrap.com",
            "Postal address: MindTrap DPO, 1 Avenue du Bien-être, 75001 Paris, France"
          ]
        }
      ]
    },
    fr: {
      title: "Conformité au <span>RGPD</span>",
      updated: "Dernière mise à jour : 1er janvier 2025",
      backButton: "Retour à l'accueil",
      infoBox: {
        title: "À propos du RGPD",
        content: "Le Règlement Général sur la Protection des Données (RGPD) est un règlement de l'UE sur la protection des données et la vie privée qui s'applique à toutes les personnes au sein de l'Union européenne et de l'Espace économique européen. Il concerne également l'exportation de données personnelles en dehors des zones UE et EEE."
      },
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Chez MindTrap, nous nous engageons à protéger vos données personnelles et à respecter le Règlement Général sur la Protection des Données (RGPD). Cette politique explique comment nous traitons vos données personnelles conformément au RGPD et vos droits en tant que personne concernée."
          ]
        },
        {
          title: "2. Responsable du traitement",
          content: [
            "MindTrap agit en tant que responsable du traitement des données personnelles que nous traitons. Cela signifie que nous déterminons les finalités et les moyens du traitement de vos données personnelles.",
            "Nos coordonnées sont :",
            "MindTrap",
            "1 Avenue du Bien-être, 75001 Paris, France",
            "Email : privacy@mindtrap.com"
          ]
        },
        {
          title: "3. Base juridique du traitement",
          content: [
            "Nous traitons vos données personnelles sur les bases juridiques suivantes :"
          ],
          contentList: [
            "Consentement : Nous traitons les données personnelles sur la base de votre consentement explicite, que vous pouvez retirer à tout moment.",
            "Contrat : Nous traitons les données personnelles lorsque cela est nécessaire à l'exécution d'un contrat ou pour prendre des mesures à votre demande avant de conclure un contrat.",
            "Intérêts légitimes : Nous traitons les données personnelles lorsque cela est nécessaire pour nos intérêts légitimes et lorsque ces intérêts ne sont pas supplantés par vos droits en matière de protection des données.",
            "Obligation légale : Nous traitons les données personnelles lorsque cela est nécessaire pour nous conformer à une obligation légale."
          ]
        },
        {
          title: "4. Vos droits en vertu du RGPD",
          content: [
            "En vertu du RGPD, vous disposez de plusieurs droits concernant vos données personnelles :"
          ],
          contentList: [
            "Droit d'accès : Vous avez le droit d'obtenir la confirmation que nous traitons vos données personnelles et d'accéder à ces données personnelles.",
            "Droit de rectification : Vous avez le droit de faire corriger les données personnelles inexactes et de faire compléter les données personnelles incomplètes.",
            "Droit à l'effacement ('droit à l'oubli') : Vous avez le droit de faire effacer vos données personnelles dans certaines circonstances.",
            "Droit à la limitation du traitement : Vous avez le droit de limiter le traitement de vos données personnelles dans certaines circonstances.",
            "Droit à la portabilité des données : Vous avez le droit de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine et de transmettre ces données à un autre responsable du traitement.",
            "Droit d'opposition : Vous avez le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances, y compris le traitement à des fins de marketing direct.",
            "Droit de ne pas faire l'objet d'une décision automatisée : Vous avez le droit de ne pas faire l'objet d'une décision fondée uniquement sur un traitement automatisé, y compris le profilage, qui produit des effets juridiques vous concernant ou vous affecte de manière significative."
          ],
          content2: [
            "Pour exercer ces droits, veuillez nous contacter en utilisant les coordonnées fournies dans la section 'Responsable du traitement' ci-dessus."
          ]
        },
        {
          title: "5. Transferts internationaux de données",
          content: [
            "Nous pouvons transférer vos données personnelles vers des pays situés en dehors de l'Espace économique européen (EEE). Lorsque nous le faisons, nous nous assurons que des garanties appropriées sont en place pour protéger vos données et pour nous conformer à nos obligations légales. Ces garanties peuvent inclure :",
            "Des accords de transfert de données, qui comprennent des clauses contractuelles types approuvées par la Commission européenne.",
            "La certification EU-US Privacy Shield (le cas échéant).",
            "Des règles d'entreprise contraignantes pour les transferts au sein de notre groupe de sociétés.",
            "Si vous souhaitez en savoir plus sur le mécanisme spécifique utilisé par nous lors du transfert de vos données personnelles hors de l'EEE, veuillez nous contacter."
          ]
        },
        {
          title: "6. Conservation des données",
          content: [
            "Nous ne conserverons vos données personnelles que pendant la durée nécessaire aux fins énoncées dans notre Politique de Confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour nous conformer à nos obligations légales, résoudre les litiges et faire respecter nos accords et politiques légales.",
            "Nous conserverons également les données d'utilisation à des fins d'analyse interne. Les données d'utilisation sont généralement conservées pendant une période plus courte, sauf lorsque ces données sont utilisées pour renforcer la sécurité ou améliorer la fonctionnalité de notre service, ou lorsque nous sommes légalement tenus de conserver ces données pendant des périodes plus longues."
          ]
        },
        {
          title: "7. Mesures de protection des données",
          content: [
            "Nous avons mis en œuvre des mesures techniques et organisationnelles appropriées pour assurer un niveau de sécurité adapté au risque, notamment :",
            "Le chiffrement des données personnelles lorsque cela est approprié",
            "Des tests, évaluations et appréciations réguliers de l'efficacité des mesures techniques et organisationnelles",
            "Des procédures pour rétablir l'accès aux données personnelles en cas d'incident",
            "Une formation régulière en matière de protection des données pour tout le personnel"
          ]
        },
        {
          title: "8. Prise de décision automatisée",
          content: [
            "Nous n'utilisons pas vos données personnelles pour une prise de décision automatisée qui produit des effets juridiques ou vous affecte de manière significative. Bien que notre Application puisse utiliser des algorithmes pour fournir du contenu personnalisé, ceux-ci ne constituent pas une prise de décision automatisée telle que définie par le RGPD."
          ]
        },
        {
          title: "9. Réclamations",
          content: [
            "Si vous avez des préoccupations concernant notre traitement de vos données personnelles, vous avez le droit de déposer une plainte auprès d'une autorité de contrôle. Les coordonnées des autorités de protection des données dans l'Union européenne sont disponibles à l'adresse suivante : https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_fr.htm"
          ]
        },
        {
          title: "10. Modifications de cette politique RGPD",
          content: [
            "Nous pouvons mettre à jour notre politique RGPD de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique RGPD sur cette page et en mettant à jour la date de 'Dernière mise à jour' en haut.",
            "Nous vous conseillons de consulter périodiquement cette politique RGPD pour prendre connaissance des modifications éventuelles. Les modifications apportées à cette politique RGPD prennent effet lorsqu'elles sont publiées sur cette page."
          ]
        },
        {
          title: "11. Nous contacter",
          content: [
            "Si vous avez des questions concernant notre politique RGPD ou notre traitement de vos données personnelles, veuillez contacter notre Délégué à la Protection des Données à :",
            "Email : dpo@mindtrap.com",
            "Adresse postale : MindTrap DPO, 1 Avenue du Bien-être, 75001 Paris, France"
          ]
        }
      ]
    }
  };
  
  const content = translations[lang];
  
  return (
    <PageContainer>
      <Content>
        <BackButton 
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {content.backButton}
        </BackButton>
        
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
        
        <UpdatedDate>{content.updated}</UpdatedDate>
        
        <InfoBox>
          <h3>{content.infoBox.title}</h3>
          <p>{content.infoBox.content}</p>
        </InfoBox>
        
        {content.sections.map((section, index) => (
          <Section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <SectionTitle>{section.title}</SectionTitle>
            {section.content && section.content.map((paragraph, i) => (
              <Paragraph key={i}>{paragraph}</Paragraph>
            ))}
            {section.contentList && (
              <List>
                {section.contentList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </List>
            )}
            {section.content2 && section.content2.map((paragraph, i) => (
              <Paragraph key={`p2-${i}`}>{paragraph}</Paragraph>
            ))}
          </Section>
        ))}
      </Content>
    </PageContainer>
  );
}

export default GDPR;