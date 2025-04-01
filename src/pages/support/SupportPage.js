import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ContactForm, BugReportForm } from '../../components/forms';

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
  margin-bottom: 1rem;
  text-align: center;
  
  span {
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const PageDescription = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
    transition: background-color 0.3s ease;
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

function SupportPage({ lang }) {
  const [activeTab, setActiveTab] = useState('contact');
  const navigate = useNavigate();
  
  const translations = {
    en: {
      title: "Support <span>Center</span>",
      description: "Need help with MindTrap? We're here to assist you. Contact our support team or report a bug using the forms below.",
      tabs: {
        contact: "Contact Us",
        bugReport: "Report a Bug"
      },
      backButton: "Back to Home"
    },
    fr: {
      title: "Centre de <span>Support</span>",
      description: "Besoin d'aide avec MindTrap ? Nous sommes là pour vous aider. Contactez notre équipe de support ou signalez un bug à l'aide des formulaires ci-dessous.",
      tabs: {
        contact: "Contactez-nous",
        bugReport: "Signaler un bug"
      },
      backButton: "Retour à l'accueil"
    }
  };
  
  const t = translations[lang];
  
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
          {t.backButton}
        </BackButton>
        
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: t.title }}
        />
        
        <PageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.description}
        </PageDescription>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'contact'} 
            onClick={() => setActiveTab('contact')}
          >
            {t.tabs.contact}
          </Tab>
          <Tab 
            active={activeTab === 'bugReport'} 
            onClick={() => setActiveTab('bugReport')}
          >
            {t.tabs.bugReport}
          </Tab>
        </TabsContainer>
        
        {activeTab === 'contact' ? (
          <ContactForm lang={lang} />
        ) : (
          <BugReportForm lang={lang} />
        )}
      </Content>
    </PageContainer>
  );
}

export default SupportPage;