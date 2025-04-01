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

function EULA({ lang }) {
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "End User License <span>Agreement</span>",
      updated: "Last updated: January 1, 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "This End User License Agreement (\"EULA\") is a legal agreement between you (either an individual or a single entity) and MindTrap regarding your use of the MindTrap mobile application (\"App\") and any associated documentation.",
            "By downloading, installing, accessing, or using the App, you agree to be bound by the terms of this EULA. If you do not agree to this EULA, do not download, install, access, or use the App."
          ]
        },
        {
          title: "2. License Grant",
          content: [
            "Subject to your compliance with this EULA, MindTrap grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial purposes strictly in accordance with the App's documentation and the terms of this EULA.",
            "This license does not allow you to use the App on any device that you do not own or control, and you may not distribute or make the App available over a network where it could be used by multiple devices at the same time."
          ]
        },
        {
          title: "3. Restrictions",
          content: [
            "You agree not to, and you will not permit others to:",
            "a) License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the App or make the App available to any third party.",
            "b) Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the App.",
            "c) Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of MindTrap or its affiliates, partners, suppliers or the licensors of the App.",
            "d) Use the App in any way that violates any applicable law or regulation."
          ]
        },
        {
          title: "4. Intellectual Property Rights",
          content: [
            "The App and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by MindTrap, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
            "This EULA does not grant you any rights to use MindTrap's trademarks, logos, domain names, or other distinctive brand features."
          ]
        },
        {
          title: "5. User-Generated Content",
          content: [
            "The App may allow you to create, post, store, share, send, or display data, information, or other content, including personal information (\"User Content\"). You retain all rights in and to your User Content, as between you and MindTrap.",
            "By making your User Content available through the App, you grant MindTrap a non-exclusive, transferable, sublicensable, worldwide, royalty-free license to use, copy, modify, create derivative works based upon, publicly display, publicly perform, and distribute your User Content in connection with operating and providing the App to you and other users."
          ]
        },
        {
          title: "6. Third-Party Services",
          content: [
            "The App may display, include, or make available third-party content (including data, information, applications, and other products, services, and/or materials) or provide links to third-party websites or services (\"Third-Party Services\").",
            "You acknowledge and agree that MindTrap is not responsible for Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect thereof. MindTrap does not assume and will not have any liability or responsibility to you or any other person or entity for any Third-Party Services."
          ]
        },
        {
          title: "7. Updates and Changes to EULA",
          content: [
            "MindTrap may develop and provide App updates, which may include upgrades, bug fixes, patches, and other error corrections and/or new features (collectively, \"Updates\"). Updates may also modify or delete in their entirety certain features and functionality. You agree that MindTrap has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality.",
            "MindTrap reserves the right to modify or withdraw the App and to modify this EULA at any time. If we modify the EULA, we will post the modification on our website or provide you with notice of the modification through the App. By continuing to access or use the App after we have posted a modification or have provided you with notice of a modification, you are indicating that you agree to be bound by the modified EULA."
          ]
        },
        {
          title: "8. Termination",
          content: [
            "This EULA will remain in effect until terminated by you or MindTrap.",
            "MindTrap may, in its sole discretion, at any time and for any or no reason, suspend or terminate this EULA with or without prior notice.",
            "This EULA will terminate immediately, without prior notice from MindTrap, in the event that you fail to comply with any provision of this EULA. You may also terminate this EULA by deleting the App and all copies thereof from your devices.",
            "Upon termination of this EULA, you shall cease all use of the App and delete all copies of the App from your devices."
          ]
        },
        {
          title: "9. Disclaimer of Warranties",
          content: [
            "THE APP IS PROVIDED TO YOU \"AS IS\" AND \"AS AVAILABLE\" AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, MINDTRAP EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE APP, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE.",
            "WITHOUT LIMITATION TO THE FOREGOING, MINDTRAP PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE APP WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS OR BE ERROR-FREE, OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED."
          ]
        },
        {
          title: "10. Limitation of Liability",
          content: [
            "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL MINDTRAP OR ITS AFFILIATES, OR ANY OF THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY LIABILITY FOR DAMAGES ARISING FROM OR RELATED TO THIS EULA OR THE APP, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT MINDTRAP IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
            "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF WARRANTIES OR LIMITATION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU."
          ]
        },
        {
          title: "11. Governing Law",
          content: [
            "This EULA is governed by and construed in accordance with the laws of France without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of or related to this EULA or the App shall be instituted exclusively in the courts of Paris, France.",
            "You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts."
          ]
        },
        {
          title: "12. Apple App Store Additional Terms",
          content: [
            "If you downloaded the App from the Apple App Store, the following additional terms apply:",
            "a) This EULA is concluded between you and MindTrap only, and not with Apple Inc. (\"Apple\").",
            "b) MindTrap, not Apple, is solely responsible for the App and its content.",
            "c) You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App.",
            "d) In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App.",
            "e) Apple is not responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including but not limited to: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.",
            "f) In the event of any third-party claim that the App or your possession and use of the App infringes that third party's intellectual property rights, MindTrap, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim.",
            "g) You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a \"terrorist supporting\" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.",
            "h) You must comply with all applicable third-party terms of agreement when using the App (e.g., your wireless data service agreement).",
            "i) Apple and Apple's subsidiaries are third-party beneficiaries of this EULA and, upon your acceptance of this EULA, will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third-party beneficiary."
          ]
        },
        {
          title: "13. Contact Information",
          content: [
            "If you have any questions about this EULA, please contact us at:",
            "Email: legal@mindtrap.com",
            "Postal address: MindTrap, 1 Avenue du Bien-être, 75001 Paris, France"
          ]
        }
      ]
    },
    fr: {
      title: "Contrat de Licence <span>Utilisateur Final</span>",
      updated: "Dernière mise à jour : 1er janvier 2025",
      backButton: "Retour à l'accueil",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Ce Contrat de Licence Utilisateur Final (\"CLUF\") est un accord légal entre vous (soit une personne physique, soit une entité unique) et MindTrap concernant votre utilisation de l'application mobile MindTrap (\"Application\") et de toute documentation associée.",
            "En téléchargeant, installant, accédant à ou utilisant l'Application, vous acceptez d'être lié par les termes de ce CLUF. Si vous n'acceptez pas ce CLUF, ne téléchargez pas, n'installez pas, n'accédez pas à ou n'utilisez pas l'Application."
          ]
        },
        {
          title: "2. Octroi de licence",
          content: [
            "Sous réserve de votre respect de ce CLUF, MindTrap vous accorde une licence limitée, non exclusive, non transférable et révocable pour télécharger, installer et utiliser l'Application à des fins personnelles et non commerciales, strictement conformément à la documentation de l'Application et aux termes de ce CLUF.",
            "Cette licence ne vous permet pas d'utiliser l'Application sur un appareil dont vous n'êtes pas propriétaire ou que vous ne contrôlez pas, et vous ne pouvez pas distribuer ou rendre l'Application disponible sur un réseau où elle pourrait être utilisée par plusieurs appareils en même temps."
          ]
        },
        {
          title: "3. Restrictions",
          content: [
            "Vous acceptez de ne pas, et vous ne permettrez pas à d'autres de :",
            "a) Concéder sous licence, vendre, louer, prêter, céder, distribuer, transmettre, héberger, externaliser, divulguer ou exploiter commercialement l'Application ou la rendre disponible à un tiers.",
            "b) Modifier, créer des œuvres dérivées, désassembler, décrypter, décompiler ou désosser toute partie de l'Application.",
            "c) Supprimer, altérer ou masquer tout avis de propriété (y compris tout avis de droit d'auteur ou de marque) de MindTrap ou de ses affiliés, partenaires, fournisseurs ou concédants de licence de l'Application.",
            "d) Utiliser l'Application d'une manière qui viole toute loi ou réglementation applicable."
          ]
        },
        {
          title: "4. Droits de propriété intellectuelle",
          content: [
            "L'Application et l'ensemble de son contenu, de ses fonctionnalités et de ses fonctionnalités (y compris, mais sans s'y limiter, toutes les informations, logiciels, textes, affichages, images, vidéos et audio, ainsi que la conception, la sélection et l'agencement de ceux-ci) sont la propriété de MindTrap, de ses concédants de licence ou d'autres fournisseurs de ce matériel et sont protégés par les lois internationales sur le droit d'auteur, les marques de commerce, les brevets, les secrets commerciaux et autres droits de propriété intellectuelle ou droits de propriété.",
            "Ce CLUF ne vous accorde aucun droit d'utiliser les marques commerciales, logos, noms de domaine ou autres caractéristiques distinctives de la marque MindTrap."
          ]
        },
        {
          title: "5. Contenu généré par l'utilisateur",
          content: [
            "L'Application peut vous permettre de créer, publier, stocker, partager, envoyer ou afficher des données, des informations ou d'autres contenus, y compris des informations personnelles (\"Contenu Utilisateur\"). Vous conservez tous les droits sur votre Contenu Utilisateur, entre vous et MindTrap.",
            "En rendant votre Contenu Utilisateur disponible via l'Application, vous accordez à MindTrap une licence non exclusive, transférable, pouvant faire l'objet d'une sous-licence, mondiale et libre de redevances pour utiliser, copier, modifier, créer des œuvres dérivées, afficher publiquement, exécuter publiquement et distribuer votre Contenu Utilisateur en relation avec l'exploitation et la fourniture de l'Application à vous et aux autres utilisateurs."
          ]
        },
        {
          title: "6. Services tiers",
          content: [
            "L'Application peut afficher, inclure ou rendre disponible du contenu tiers (y compris des données, des informations, des applications et d'autres produits, services et/ou matériels) ou fournir des liens vers des sites Web ou des services tiers (\"Services tiers\").",
            "Vous reconnaissez et acceptez que MindTrap n'est pas responsable des Services tiers, y compris leur exactitude, exhaustivité, actualité, validité, conformité aux droits d'auteur, légalité, décence, qualité ou tout autre aspect de ceux-ci. MindTrap n'assume et n'aura aucune responsabilité envers vous ou toute autre personne ou entité pour les Services tiers."
          ]
        },
        {
          title: "7. Mises à jour et modifications du CLUF",
          content: [
            "MindTrap peut développer et fournir des mises à jour de l'Application, qui peuvent inclure des mises à niveau, des corrections de bogues, des correctifs et d'autres corrections d'erreurs et/ou de nouvelles fonctionnalités (collectivement, les \"Mises à jour\"). Les Mises à jour peuvent également modifier ou supprimer entièrement certaines fonctionnalités. Vous acceptez que MindTrap n'ait aucune obligation de fournir des Mises à jour ou de continuer à fournir ou à activer des fonctionnalités particulières.",
            "MindTrap se réserve le droit de modifier ou de retirer l'Application et de modifier ce CLUF à tout moment. Si nous modifions le CLUF, nous publierons la modification sur notre site Web ou vous informerons de la modification via l'Application. En continuant à accéder à ou à utiliser l'Application après que nous ayons publié une modification ou vous ayons informé d'une modification, vous indiquez que vous acceptez d'être lié par le CLUF modifié."
          ]
        },
        {
          title: "8. Résiliation",
          content: [
            "Ce CLUF restera en vigueur jusqu'à sa résiliation par vous ou MindTrap.",
            "MindTrap peut, à sa seule discrétion, à tout moment et pour n'importe quelle raison ou sans raison, suspendre ou résilier ce CLUF avec ou sans préavis.",
            "Ce CLUF sera résilié immédiatement, sans préavis de MindTrap, dans le cas où vous ne respectez pas une disposition de ce CLUF. Vous pouvez également résilier ce CLUF en supprimant l'Application et toutes ses copies de vos appareils.",
            "À la résiliation de ce CLUF, vous devez cesser toute utilisation de l'Application et supprimer toutes les copies de l'Application de vos appareils."
          ]
        },
        {
          title: "9. Exclusion de garanties",
          content: [
            "L'APPLICATION VOUS EST FOURNIE \"TELLE QUELLE\" ET \"SELON DISPONIBILITÉ\" ET AVEC TOUS LES DÉFAUTS ET DÉFECTUOSITÉS SANS GARANTIE D'AUCUNE SORTE. DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, MINDTRAP DÉCLINE EXPRESSÉMENT TOUTES LES GARANTIES, QU'ELLES SOIENT EXPRESSES, IMPLICITES, STATUTAIRES OU AUTRES, CONCERNANT L'APPLICATION, Y COMPRIS TOUTES LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER, DE TITRE ET DE NON-VIOLATION, ET LES GARANTIES QUI POURRAIENT DÉCOULER DE LA PRATIQUE COMMERCIALE, DE L'EXÉCUTION, DE L'USAGE OU DU COMMERCE.",
            "SANS LIMITATION À CE QUI PRÉCÈDE, MINDTRAP NE FOURNIT AUCUNE GARANTIE OU ENGAGEMENT, ET NE FAIT AUCUNE DÉCLARATION D'AUCUNE SORTE QUE L'APPLICATION RÉPONDRA À VOS EXIGENCES, ATTEINDRA LES RÉSULTATS ESCOMPTÉS, SERA COMPATIBLE OU FONCTIONNERA AVEC D'AUTRES LOGICIELS, APPLICATIONS, SYSTÈMES OU SERVICES, FONCTIONNERA SANS INTERRUPTION, RÉPONDRA À DES NORMES DE PERFORMANCE OU DE FIABILITÉ OU SERA EXEMPTE D'ERREURS, OU QUE DES ERREURS OU DÉFAUTS PEUVENT OU SERONT CORRIGÉS."
          ]
        },
        {
          title: "10. Limitation de responsabilité",
          content: [
            "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, EN AUCUN CAS MINDTRAP OU SES AFFILIÉS, OU L'UN DE LEURS CONCÉDANTS DE LICENCE OU PRESTATAIRES DE SERVICES RESPECTIFS, N'AURONT DE RESPONSABILITÉ POUR DES DOMMAGES DÉCOULANT DE OU LIÉS À CE CLUF OU À L'APPLICATION, QUE CE SOIT SUR LA BASE D'UNE GARANTIE, D'UN CONTRAT, D'UN DÉLIT (Y COMPRIS LA NÉGLIGENCE), D'UNE LOI OU DE TOUTE AUTRE THÉORIE JURIDIQUE, ET QUE MINDTRAP AIT ÉTÉ INFORMÉ OU NON DE LA POSSIBILITÉ DE TELS DOMMAGES.",
            "CERTAINES JURIDICTIONS NE PERMETTENT PAS L'EXCLUSION DE GARANTIES OU LA LIMITATION DE RESPONSABILITÉ POUR CERTAINS TYPES DE DOMMAGES, DONC CERTAINES DES LIMITATIONS CI-DESSUS PEUVENT NE PAS S'APPLIQUER À VOUS."
          ]
        },
        {
          title: "11. Loi applicable",
          content: [
            "Ce CLUF est régi et interprété conformément aux lois de la France, sans donner effet à aucune disposition ou règle relative au choix ou au conflit de lois. Toute action en justice, procédure ou litige découlant de ou lié à ce CLUF ou à l'Application sera intenté exclusivement devant les tribunaux de Paris, France.",
            "Vous renoncez à toute objection quant à l'exercice de la juridiction sur vous par ces tribunaux et quant au lieu de ces tribunaux."
          ]
        },
        {
          title: "12. Conditions supplémentaires de l'App Store d'Apple",
          content: [
            "Si vous avez téléchargé l'Application depuis l'App Store d'Apple, les conditions supplémentaires suivantes s'appliquent :",
            "a) Ce CLUF est conclu entre vous et MindTrap uniquement, et non avec Apple Inc. (\"Apple\").",
            "b) MindTrap, et non Apple, est seul responsable de l'Application et de son contenu.",
            "c) Vous reconnaissez qu'Apple n'a aucune obligation de fournir des services de maintenance et de support concernant l'Application.",
            "d) En cas de non-conformité de l'Application à une garantie applicable, vous pouvez en informer Apple, et Apple vous remboursera le prix d'achat (le cas échéant) de l'Application. Dans la mesure maximale autorisée par la loi applicable, Apple n'aura aucune autre obligation de garantie concernant l'Application.",
            "e) Apple n'est pas responsable de traiter les réclamations que vous ou un tiers pourriez avoir concernant l'Application ou votre possession et/ou utilisation de l'Application, y compris, mais sans s'y limiter : (i) les réclamations en responsabilité du fait des produits ; (ii) toute réclamation selon laquelle l'Application ne respecte pas une exigence légale ou réglementaire applicable ; et (iii) les réclamations découlant de la protection des consommateurs ou d'une législation similaire.",
            "f) En cas de réclamation d'un tiers selon laquelle l'Application ou votre possession et utilisation de l'Application porte atteinte aux droits de propriété intellectuelle de ce tiers, MindTrap, et non Apple, sera seul responsable de l'enquête, de la défense, du règlement et de la décharge de toute réclamation pour violation de la propriété intellectuelle.",
            "g) Vous déclarez et garantissez que (i) vous n'êtes pas situé dans un pays soumis à un embargo du gouvernement américain ou qui a été désigné par le gouvernement américain comme un pays \"soutenant le terrorisme\" ; et (ii) vous ne figurez sur aucune liste de parties interdites ou restreintes du gouvernement américain.",
            "h) Vous devez respecter toutes les conditions d'accord applicables des tiers lors de l'utilisation de l'Application (par exemple, votre accord de service de données sans fil).",
            "i) Apple et les filiales d'Apple sont des bénéficiaires tiers de ce CLUF et, dès votre acceptation de ce CLUF, auront le droit (et seront réputés avoir accepté le droit) de faire appliquer ce CLUF contre vous en tant que bénéficiaire tiers."
          ]
        },
        {
          title: "13. Coordonnées",
          content: [
            "Si vous avez des questions concernant ce CLUF, veuillez nous contacter à :",
            "Email : legal@mindtrap.com",
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
          </Section>
        ))}
      </Content>
    </PageContainer>
  );
}

export default EULA;