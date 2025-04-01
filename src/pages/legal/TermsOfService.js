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
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
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

function TermsOfService({ lang }) {
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "<span>Terms</span> of Service",
      updated: "Last updated: January 1, 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Welcome to MindTrap ('the App'). These Terms of Service ('Terms') govern your use of the MindTrap mobile application, including all related content, features, and services offered by MindTrap.",
            "By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App."
          ]
        },
        {
          title: "2. Account Registration",
          content: [
            "To use certain features of the App, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information and to update this information to maintain its accuracy.",
            "You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
          ]
        },
        {
          title: "3. Subscription Services",
          content: [
            "MindTrap offers subscription-based services that provide access to premium features. Subscription details, including pricing, are provided before purchase.",
            "Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period. You can manage and cancel your subscription through your app store account settings.",
            "Free trials, if offered, provide access to premium features for a limited time. At the end of the trial period, your subscription will automatically begin unless you cancel it."
          ]
        },
        {
          title: "4. User Content",
          content: [
            "You retain all rights to any content you submit, post, or display on or through the App ('User Content').",
            "By submitting User Content, you grant MindTrap a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content in connection with providing and promoting the App.",
            "You represent and warrant that you own or have the necessary rights to submit your User Content and that the User Content does not infringe any third party's intellectual property or other rights."
          ]
        },
        {
          title: "5. Prohibited Conduct",
          contentList: [
            "Violate any applicable law or regulation",
            "Infringe any intellectual property or other rights of any third party",
            "Use the App for any illegal or unauthorized purpose",
            "Interfere with or disrupt the App or servers or networks connected to the App",
            "Attempt to gain unauthorized access to any part of the App",
            "Harass, abuse, or harm another person",
            "Submit false or misleading information"
          ]
        },
        {
          title: "6. Intellectual Property",
          content: [
            "The App, including all content, features, and functionality, is owned by MindTrap and protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
            "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our App, except as generally and ordinarily permitted through the App according to these Terms."
          ]
        },
        {
          title: "7. Disclaimer of Warranties",
          content: [
            "THE APP IS PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
            "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
          ]
        },
        {
          title: "8. Limitation of Liability",
          content: [
            "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MINDTRAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE APP."
          ]
        },
        {
          title: "9. Changes to Terms",
          content: [
            "We may modify these Terms at any time. We will provide notice of changes, such as by sending an email, displaying a notice in the App, or updating the 'Last Updated' date at the top of these Terms.",
            "Your continued use of the App after the changes become effective constitutes your acceptance of the changed Terms."
          ]
        },
        {
          title: "10. Governing Law",
          content: [
            "These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.",
            "Any dispute arising from or relating to these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Paris, France."
          ]
        },
        {
          title: "11. Contact Us",
          content: [
            "If you have any questions about these Terms, please contact us at legal@mindtrap.com."
          ]
        }
      ]
    },
    fr: {
      title: "Conditions <span>d'Utilisation</span>",
      updated: "Dernière mise à jour : 1er janvier 2025",
      backButton: "Retour à l'accueil",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Bienvenue sur MindTrap ('l'Application'). Ces Conditions d'Utilisation ('Conditions') régissent votre utilisation de l'application mobile MindTrap, y compris tout le contenu, les fonctionnalités et les services associés offerts par MindTrap.",
            "En téléchargeant, installant ou utilisant l'Application, vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas ces Conditions, vous ne devez pas accéder à ou utiliser l'Application."
          ]
        },
        {
          title: "2. Inscription au compte",
          content: [
            "Pour utiliser certaines fonctionnalités de l'Application, vous pourriez devoir vous inscrire pour créer un compte. Lors de votre inscription, vous vous engagez à fournir des informations exactes, à jour et complètes et à mettre à jour ces informations pour maintenir leur exactitude.",
            "Vous êtes responsable de la confidentialité de votre mot de passe de compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte."
          ]
        },
        {
          title: "3. Services d'abonnement",
          content: [
            "MindTrap propose des services basés sur abonnement qui donnent accès à des fonctionnalités premium. Les détails de l'abonnement, y compris les prix, sont fournis avant l'achat.",
            "Les abonnements se renouvellent automatiquement sauf si le renouvellement automatique est désactivé au moins 24 heures avant la fin de la période en cours. Vous pouvez gérer et annuler votre abonnement via les paramètres de votre compte de l'app store.",
            "Les essais gratuits, s'ils sont proposés, donnent accès aux fonctionnalités premium pendant une durée limitée. À la fin de la période d'essai, votre abonnement commencera automatiquement, sauf si vous l'annulez."
          ]
        },
        {
          title: "4. Contenu utilisateur",
          content: [
            "Vous conservez tous les droits sur tout contenu que vous soumettez, publiez ou affichez sur ou via l'Application ('Contenu Utilisateur').",
            "En soumettant du Contenu Utilisateur, vous accordez à MindTrap une licence mondiale, non exclusive, libre de redevance pour utiliser, reproduire, modifier, adapter, publier, traduire et distribuer votre Contenu Utilisateur en relation avec la fourniture et la promotion de l'Application.",
            "Vous déclarez et garantissez que vous possédez ou avez les droits nécessaires pour soumettre votre Contenu Utilisateur et que le Contenu Utilisateur ne porte pas atteinte aux droits de propriété intellectuelle ou autres droits de tiers."
          ]
        },
        {
          title: "5. Conduite interdite",
          contentList: [
            "Violer toute loi ou réglementation applicable",
            "Enfreindre les droits de propriété intellectuelle ou autres droits de tiers",
            "Utiliser l'Application à des fins illégales ou non autorisées",
            "Interférer avec ou perturber l'Application ou les serveurs ou réseaux connectés à l'Application",
            "Tenter d'accéder sans autorisation à une partie quelconque de l'Application",
            "Harceler, abuser ou nuire à une autre personne",
            "Soumettre des informations fausses ou trompeuses"
          ]
        },
        {
          title: "6. Propriété intellectuelle",
          content: [
            "L'Application, y compris tout le contenu, les fonctionnalités et les fonctionnalités, appartient à MindTrap et est protégée par les lois internationales sur le droit d'auteur, les marques de commerce, les brevets, les secrets commerciaux et autres droits de propriété intellectuelle ou droits exclusifs.",
            "Vous ne pouvez pas reproduire, distribuer, modifier, créer des œuvres dérivées, afficher publiquement, exécuter publiquement, republier, télécharger, stocker ou transmettre tout matériel de notre Application, sauf comme généralement et ordinairement permis par l'Application conformément à ces Conditions."
          ]
        },
        {
          title: "7. Exclusion de garanties",
          content: [
            "L'APPLICATION EST FOURNIE 'TELLE QUELLE' ET 'SELON DISPONIBILITÉ' SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE.",
            "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, NOUS DÉCLINONS TOUTES GARANTIES, EXPRESSES OU IMPLICITES, Y COMPRIS LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION."
          ]
        },
        {
          title: "8. Limitation de responsabilité",
          content: [
            "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, MINDTRAP NE SERA PAS RESPONSABLE DES DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS OU PUNITIFS, NI DE TOUTE PERTE DE PROFITS OU DE REVENUS, QU'ELLE SOIT ENCOURUE DIRECTEMENT OU INDIRECTEMENT, NI DE TOUTE PERTE DE DONNÉES, D'UTILISATION, DE CLIENTÈLE OU D'AUTRES PERTES INTANGIBLES, RÉSULTANT DE VOTRE ACCÈS À OU DE VOTRE UTILISATION OU INCAPACITÉ D'ACCÉDER À OU D'UTILISER L'APPLICATION."
          ]
        },
        {
          title: "9. Modifications des conditions",
          content: [
            "Nous pouvons modifier ces Conditions à tout moment. Nous vous informerons des changements, par exemple en envoyant un e-mail, en affichant un avis dans l'Application ou en mettant à jour la date de 'Dernière mise à jour' en haut de ces Conditions.",
            "Votre utilisation continue de l'Application après l'entrée en vigueur des modifications constitue votre acceptation des Conditions modifiées."
          ]
        },
        {
          title: "10. Loi applicable",
          content: [
            "Ces Conditions sont régies et interprétées conformément aux lois de la France, sans égard à ses dispositions relatives aux conflits de lois.",
            "Tout litige découlant de ou lié à ces Conditions ou à votre utilisation de l'Application sera soumis à la compétence exclusive des tribunaux de Paris, France."
          ]
        },
        {
          title: "11. Nous contacter",
          content: [
            "Si vous avez des questions concernant ces Conditions, veuillez nous contacter à legal@mindtrap.com."
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
          </Section>
        ))}
      </Content>
    </PageContainer>
  );
}

export default TermsOfService;