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
    background: linear-gradient(90deg, ${props => props.theme.colors.tertiary}, ${props => props.theme.colors.secondary});
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

const Table = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  &.header {
    background-color: rgba(30, 30, 48, 0.7);
    font-weight: 600;
  }
`;

const TableCell = styled.div`
  padding: 1rem;
  flex: ${props => props.width || 1};
  color: ${props => props.theme.colors.textSecondary};
  
  .header & {
    color: ${props => props.theme.colors.text};
  }
  
  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
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

function CookiePolicy({ lang }) {
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "<span>Cookie</span> Policy",
      updated: "Last updated: January 1, 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. What Are Cookies",
          content: [
            "Cookies are small text files that are placed on your device when you visit a website or use a mobile application. They are widely used to make websites and applications work more efficiently and to provide information to the owners.",
            "MindTrap uses cookies and similar technologies such as pixel tags, web beacons, clear GIFs, and JavaScript (collectively, 'cookies') to enable our servers to recognize your web browser or mobile device and tell us how and when you use the App."
          ]
        },
        {
          title: "2. Types of Cookies We Use",
          content: [
            "We use the following types of cookies:"
          ],
          contentTable: {
            headers: ["Type", "Purpose", "Duration"],
            rows: [
              ["Essential Cookies", "These cookies are necessary for the App to function and cannot be switched off. They enable basic functions like security, network management, and account authentication.", "Session / Persistent"],
              ["Analytics Cookies", "These cookies help us understand how users interact with our App by collecting and reporting information anonymously. This helps us improve the App's performance and user experience.", "Persistent"],
              ["Functional Cookies", "These cookies enable the App to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our App.", "Session / Persistent"],
              ["Advertising Cookies", "These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements based on your interests.", "Persistent"]
            ]
          }
        },
        {
          title: "3. How We Use Cookies",
          content: [
            "We use cookies for the following purposes:"
          ],
          contentList: [
            "To authenticate users and prevent fraudulent use of user accounts.",
            "To remember information about your preferences and settings.",
            "To understand and save user preferences for future visits.",
            "To keep track of advertisements and make them more relevant to you.",
            "To gather statistical information about the use of our App to help improve its performance and functionality.",
            "To analyze how our users use the App and to monitor the performance of the App."
          ]
        },
        {
          title: "4. Your Choices Regarding Cookies",
          content: [
            "Most mobile devices allow you to control cookies through their settings preferences. However, if you limit the ability of our App to set cookies, you may not be able to use all the features of our App.",
            "Here's how you can manage cookies on your mobile device:",
            "iOS devices: Settings > Safari > Block Cookies",
            "Android devices: Open Chrome > Settings > Site settings > Cookies",
            "If you wish to delete cookies that are already on your device, you can clear the cookies and cache in your browser settings."
          ]
        },
        {
          title: "5. Third-Party Cookies",
          content: [
            "Some cookies are placed by third parties on our behalf. Third parties may use cookies, web beacons, and similar technologies to collect or receive information from our website and elsewhere on the internet and use that information to provide measurement services and target ads.",
            "We have no access to or control over cookies or other features that these third-party services may use, and the information practices of these third parties are not covered by this Cookie Policy. Please refer to the respective privacy policies of these third parties for more information."
          ]
        },
        {
          title: "6. Changes to This Cookie Policy",
          content: [
            "We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the 'Last Updated' date at the top.",
            "You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page."
          ]
        },
        {
          title: "7. Contact Us",
          content: [
            "If you have any questions about our Cookie Policy, please contact us at:",
            "Email: privacy@mindtrap.com",
            "Postal address: MindTrap, 1 Avenue du Bien-être, 75001 Paris, France"
          ]
        }
      ]
    },
    fr: {
      title: "Politique sur les <span>Cookies</span>",
      updated: "Dernière mise à jour : 1er janvier 2025",
      backButton: "Retour à l'accueil",
      sections: [
        {
          title: "1. Que sont les cookies",
          content: [
            "Les cookies sont de petits fichiers texte qui sont placés sur votre appareil lorsque vous visitez un site web ou utilisez une application mobile. Ils sont largement utilisés pour faire fonctionner les sites web et les applications plus efficacement et pour fournir des informations aux propriétaires.",
            "MindTrap utilise des cookies et des technologies similaires telles que les balises pixel, les balises web, les GIF transparents et JavaScript (collectivement, 'cookies') pour permettre à nos serveurs de reconnaître votre navigateur web ou votre appareil mobile et de nous indiquer comment et quand vous utilisez l'Application."
          ]
        },
        {
          title: "2. Types de cookies que nous utilisons",
          content: [
            "Nous utilisons les types de cookies suivants :"
          ],
          contentTable: {
            headers: ["Type", "Objectif", "Durée"],
            rows: [
              ["Cookies essentiels", "Ces cookies sont nécessaires au fonctionnement de l'Application et ne peuvent pas être désactivés. Ils permettent des fonctions de base comme la sécurité, la gestion du réseau et l'authentification du compte.", "Session / Persistant"],
              ["Cookies d'analyse", "Ces cookies nous aident à comprendre comment les utilisateurs interagissent avec notre Application en collectant et en rapportant des informations de manière anonyme. Cela nous aide à améliorer les performances et l'expérience utilisateur de l'Application.", "Persistant"],
              ["Cookies fonctionnels", "Ces cookies permettent à l'Application de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à notre Application.", "Session / Persistant"],
              ["Cookies publicitaires", "Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous. Ils effectuent des fonctions comme empêcher la même annonce d'apparaître continuellement, s'assurer que les annonces sont correctement affichées et, dans certains cas, sélectionner des publicités en fonction de vos intérêts.", "Persistant"]
            ]
          }
        },
        {
          title: "3. Comment nous utilisons les cookies",
          content: [
            "Nous utilisons les cookies aux fins suivantes :"
          ],
          contentList: [
            "Pour authentifier les utilisateurs et empêcher l'utilisation frauduleuse des comptes d'utilisateurs.",
            "Pour mémoriser des informations sur vos préférences et paramètres.",
            "Pour comprendre et enregistrer les préférences des utilisateurs pour les visites futures.",
            "Pour suivre les publicités et les rendre plus pertinentes pour vous.",
            "Pour recueillir des informations statistiques sur l'utilisation de notre Application afin d'aider à améliorer ses performances et ses fonctionnalités.",
            "Pour analyser comment nos utilisateurs utilisent l'Application et pour surveiller les performances de l'Application."
          ]
        },
        {
          title: "4. Vos choix concernant les cookies",
          content: [
            "La plupart des appareils mobiles vous permettent de contrôler les cookies via leurs préférences de paramètres. Cependant, si vous limitez la capacité de notre Application à définir des cookies, vous ne pourrez peut-être pas utiliser toutes les fonctionnalités de notre Application.",
            "Voici comment vous pouvez gérer les cookies sur votre appareil mobile :",
            "Appareils iOS : Paramètres > Safari > Bloquer les cookies",
            "Appareils Android : Ouvrir Chrome > Paramètres > Paramètres du site > Cookies",
            "Si vous souhaitez supprimer les cookies qui sont déjà sur votre appareil, vous pouvez effacer les cookies et le cache dans les paramètres de votre navigateur."
          ]
        },
        {
          title: "5. Cookies tiers",
          content: [
            "Certains cookies sont placés par des tiers en notre nom. Les tiers peuvent utiliser des cookies, des balises web et des technologies similaires pour collecter ou recevoir des informations de notre site web et d'ailleurs sur Internet et utiliser ces informations pour fournir des services de mesure et cibler des annonces.",
            "Nous n'avons aucun accès ou contrôle sur les cookies ou autres fonctionnalités que ces services tiers peuvent utiliser, et les pratiques d'information de ces tiers ne sont pas couvertes par cette Politique de Cookies. Veuillez vous référer aux politiques de confidentialité respectives de ces tiers pour plus d'informations."
          ]
        },
        {
          title: "6. Modifications de cette politique de cookies",
          content: [
            "Nous pouvons mettre à jour notre Politique de Cookies de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Cookies sur cette page et en mettant à jour la date de 'Dernière mise à jour' en haut.",
            "Nous vous conseillons de consulter périodiquement cette Politique de Cookies pour prendre connaissance des modifications éventuelles. Les modifications apportées à cette Politique de Cookies prennent effet lorsqu'elles sont publiées sur cette page."
          ]
        },
        {
          title: "7. Nous contacter",
          content: [
            "Si vous avez des questions concernant notre Politique de Cookies, veuillez nous contacter à :",
            "Email : privacy@mindtrap.com",
            "Adresse postale : MindTrap, 1 Avenue du Bien-être, 75001 Paris, France"
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
            {section.contentTable && (
              <Table>
                <TableRow className="header">
                  {section.contentTable.headers.map((header, i) => (
                    <TableCell key={i} width={i === 0 ? 1 : i === 1 ? 2 : 1}>{header}</TableCell>
                  ))}
                </TableRow>
                {section.contentTable.rows.map((row, i) => (
                  <TableRow key={i}>
                    {row.map((cell, j) => (
                      <TableCell key={j} width={j === 0 ? 1 : j === 1 ? 2 : 1}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </Table>
            )}
          </Section>
        ))}
      </Content>
    </PageContainer>
  );
}

export default CookiePolicy;