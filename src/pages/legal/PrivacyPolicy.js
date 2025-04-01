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
    background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
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

function PrivacyPolicy({ lang }) {
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "Privacy <span>Policy</span>",
      updated: "Last updated: January 1, 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "MindTrap is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.",
            "Please read this Privacy Policy carefully. By accessing or using the App, you agree to the collection and use of information in accordance with this policy."
          ]
        },
        {
          title: "2. Information We Collect",
          content: [
            "We collect several types of information from and about users of our App, including:"
          ],
          contentList: [
            "Personal information (such as name, email address, and date of birth) that you provide when registering or using the App.",
            "Usage information, such as how you use the App, what features you access, and the time spent on the App.",
            "Device information, including your device type, operating system, and unique device identifiers.",
            "Health and wellness information that you voluntarily provide through the App's activities and features."
          ]
        },
        {
          title: "3. How We Use Your Information",
          content: [
            "We use the information we collect about you for various purposes, including:"
          ],
          contentList: [
            "To provide and maintain our App, including to monitor usage of our App.",
            "To process your requests and manage your account.",
            "To improve our App, including by analyzing how users interact with it.",
            "To personalize your experience by delivering content and product offerings relevant to your interests.",
            "To communicate with you, including for customer service, updates, and marketing purposes if you've opted in.",
            "To protect our App and ensure its security."
          ]
        },
        {
          title: "4. Sharing Your Information",
          content: [
            "We may share your information in the following circumstances:"
          ],
          contentList: [
            "With service providers who perform services on our behalf, such as hosting, data analytics, and customer service.",
            "When required by law or to respond to legal process.",
            "To protect the rights, property, or safety of MindTrap, our users, or others.",
            "In connection with a sale, merger, or other transfer of our business.",
            "With your consent or at your direction."
          ],
          content2: [
            "We do not sell or rent your personal data to third parties."
          ]
        },
        {
          title: "5. Data Security",
          content: [
            "We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
            "However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security."
          ]
        },
        {
          title: "6. Your Data Protection Rights",
          content: [
            "Depending on your location, you may have certain rights regarding your personal data, including:"
          ],
          contentList: [
            "The right to access your personal data.",
            "The right to correct inaccurate or incomplete data.",
            "The right to deletion of your personal data.",
            "The right to restrict processing of your personal data.",
            "The right to data portability.",
            "The right to object to processing of your personal data.",
            "The right to withdraw consent."
          ],
          content2: [
            "To exercise any of these rights, please contact us using the information provided in the 'Contact Us' section."
          ]
        },
        {
          title: "7. Children's Privacy",
          content: [
            "Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take necessary actions."
          ]
        },
        {
          title: "8. Changes to Our Privacy Policy",
          content: [
            "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date at the top.",
            "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
          ]
        },
        {
          title: "9. Contact Us",
          content: [
            "If you have any questions about this Privacy Policy, please contact us at:",
            "Email: privacy@mindtrap.com",
            "Postal address: MindTrap, 1 Avenue du Bien-être, 75001 Paris, France"
          ]
        }
      ]
    },
    fr: {
      title: "Politique de <span>Confidentialité</span>",
      updated: "Dernière mise à jour : 1er janvier 2025",
      backButton: "Retour à l'accueil",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "MindTrap s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile.",
            "Veuillez lire attentivement cette Politique de Confidentialité. En accédant à ou en utilisant l'Application, vous acceptez la collecte et l'utilisation d'informations conformément à cette politique."
          ]
        },
        {
          title: "2. Informations que nous collectons",
          content: [
            "Nous collectons plusieurs types d'informations provenant des utilisateurs de notre Application, notamment :"
          ],
          contentList: [
            "Informations personnelles (comme le nom, l'adresse e-mail et la date de naissance) que vous fournissez lors de l'inscription ou de l'utilisation de l'Application.",
            "Informations d'utilisation, telles que la façon dont vous utilisez l'Application, les fonctionnalités auxquelles vous accédez et le temps passé sur l'Application.",
            "Informations sur l'appareil, y compris le type d'appareil, le système d'exploitation et les identifiants uniques de l'appareil.",
            "Informations sur la santé et le bien-être que vous fournissez volontairement par le biais des activités et des fonctionnalités de l'Application."
          ]
        },
        {
          title: "3. Comment nous utilisons vos informations",
          content: [
            "Nous utilisons les informations que nous collectons à votre sujet à diverses fins, notamment :"
          ],
          contentList: [
            "Pour fournir et maintenir notre Application, y compris pour surveiller son utilisation.",
            "Pour traiter vos demandes et gérer votre compte.",
            "Pour améliorer notre Application, notamment en analysant comment les utilisateurs interagissent avec elle.",
            "Pour personnaliser votre expérience en vous proposant du contenu et des offres de produits pertinents pour vos intérêts.",
            "Pour communiquer avec vous, notamment pour le service client, les mises à jour et le marketing si vous y avez consenti.",
            "Pour protéger notre Application et assurer sa sécurité."
          ]
        },
        {
          title: "4. Partage de vos informations",
          content: [
            "Nous pouvons partager vos informations dans les circonstances suivantes :"
          ],
          contentList: [
            "Avec des prestataires de services qui exécutent des services pour notre compte, tels que l'hébergement, l'analyse de données et le service client.",
            "Lorsque la loi l'exige ou pour répondre à une procédure judiciaire.",
            "Pour protéger les droits, la propriété ou la sécurité de MindTrap, de nos utilisateurs ou d'autres.",
            "Dans le cadre d'une vente, d'une fusion ou d'un autre transfert de notre entreprise.",
            "Avec votre consentement ou selon vos instructions."
          ],
          content2: [
            "Nous ne vendons ni ne louons vos données personnelles à des tiers."
          ]
        },
        {
          title: "5. Sécurité des données",
          content: [
            "Nous avons mis en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.",
            "Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue."
          ]
        },
        {
          title: "6. Vos droits en matière de protection des données",
          content: [
            "Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos données personnelles, notamment :"
          ],
          contentList: [
            "Le droit d'accéder à vos données personnelles.",
            "Le droit de corriger des données inexactes ou incomplètes.",
            "Le droit à l'effacement de vos données personnelles.",
            "Le droit de limiter le traitement de vos données personnelles.",
            "Le droit à la portabilité des données.",
            "Le droit de vous opposer au traitement de vos données personnelles.",
            "Le droit de retirer votre consentement."
          ],
          content2: [
            "Pour exercer l'un de ces droits, veuillez nous contacter en utilisant les informations fournies dans la section 'Nous contacter'."
          ]
        },
        {
          title: "7. Confidentialité des enfants",
          content: [
            "Notre Application n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous êtes un parent ou un tuteur et que vous pensez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires."
          ]
        },
        {
          title: "8. Modifications de notre politique de confidentialité",
          content: [
            "Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page et en mettant à jour la date de 'Dernière mise à jour' en haut.",
            "Nous vous conseillons de consulter périodiquement cette Politique de Confidentialité pour prendre connaissance des modifications éventuelles. Les modifications apportées à cette Politique de Confidentialité prennent effet lorsqu'elles sont publiées sur cette page."
          ]
        },
        {
          title: "9. Nous contacter",
          content: [
            "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à :",
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
            {section.content2 && section.content2.map((paragraph, i) => (
              <Paragraph key={`p2-${i}`}>{paragraph}</Paragraph>
            ))}
          </Section>
        ))}
      </Content>
    </PageContainer>
  );
}

export default PrivacyPolicy;