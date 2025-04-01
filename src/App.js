import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import './App.css';

// Import pages
import { TermsOfService, PrivacyPolicy, CookiePolicy, GDPR, EULA } from './pages/legal';
import { SupportPage } from './pages/support';

// Import des images
import logo from './assets/images/icon.png';
import heroImage from './assets/images/breathing_character.png';

// Thème global
const theme = {
  colors: {
    primary: '#7C4DFF', // Violet pour les challenges
    secondary: '#00E5FF', // Cyan pour les jeux
    tertiary: '#FF9500', // Orange pour les scénarios
    background: '#121220',
    backgroundLight: '#1E1E30',
    text: '#FFFFFF',
    textSecondary: '#BBBBCC',
  },
  fonts: {
    primary: '"Poppins", sans-serif',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1200px',
  }
};

// Composants stylisés
const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: rgba(18, 18, 32, 0.9);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    height: 40px;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const LangSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  
  button {
    background: none;
    border: none;
    color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
    font-weight: ${props => props.active ? '600' : '400'};
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  span {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, #651FFF);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 77, 255, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 77, 255, 0.4);
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-top: 8rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 550px;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    
    span {
      background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 2rem;
  }
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .icon {
    font-size: 1.8rem;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    
    .store {
      font-size: 0.7rem;
      color: ${props => props.theme.colors.textSecondary};
    }
    
    .action {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  
  .mockup {
    position: relative;
    z-index: 2;
    max-width: 100%;
    max-height: 70vh;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .background-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, 
      rgba(124, 77, 255, 0.2) 0%, 
      rgba(0, 229, 255, 0.1) 40%, 
      rgba(0, 0, 0, 0) 70%);
    filter: blur(60px);
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const FeatureSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
    span {
      background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: rgba(30, 30, 48, 0.7);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.color || props.theme.colors.primary};
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const TestimonialSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.theme.colors.background};
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
    span {
      background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background-color: rgba(30, 30, 48, 0.5);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  
  &::before {
    content: """;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 4rem;
    color: rgba(124, 77, 255, 0.2);
    font-family: serif;
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
  
  .user {
    display: flex;
    align-items: center;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .info {
      h4 {
        margin: 0;
        font-size: 1.1rem;
        color: ${props => props.theme.colors.text};
      }
      
      span {
        color: ${props => props.theme.colors.textSecondary};
        font-size: 0.9rem;
      }
    }
  }
`;

const PricingSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
    span {
      background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const PricingCard = styled(motion.div)`
  background-color: ${props => props.featured ? 'rgba(124, 77, 255, 0.15)' : 'rgba(30, 30, 48, 0.7)'};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: ${props => props.featured ? '2px solid rgba(124, 77, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.05)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  ${props => props.featured && `
    &::before {
      content: 'Populaire';
      position: absolute;
      top: 12px;
      right: -35px;
      background: linear-gradient(90deg, #FF9500, #FF5252);
      color: white;
      padding: 5px 40px;
      font-size: 0.8rem;
      font-weight: 600;
      transform: rotate(45deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  `}
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }
  
  .price {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${props => props.featured ? props.theme.colors.primary : props.theme.colors.text};
    
    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${props => props.theme.colors.textSecondary};
    }
  }
  
  .description {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    width: 100%;
    text-align: left;
    
    li {
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: ${props => props.theme.colors.textSecondary};
      display: flex;
      align-items: center;
      
      &:last-child {
        border-bottom: none;
      }
      
      &::before {
        content: '✓';
        color: ${props => props.featured ? props.theme.colors.primary : props.theme.colors.secondary};
        margin-right: 1rem;
        font-weight: bold;
      }
    }
  }
  
  button {
    margin-top: auto;
    width: 100%;
  }
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.theme.colors.background};
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
    span {
      background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background-color: rgba(30, 30, 48, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: 4rem 2rem 2rem;
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  
  .footer-column {
    flex: 1;
    min-width: 200px;
    margin-right: 2rem;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      margin-right: 0;
    }
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${props => props.theme.colors.text};
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.8rem;
        
        a {
          color: ${props => props.theme.colors.textSecondary};
          transition: color 0.3s ease;
          
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }
  
  .logo-column {
    display: flex;
    flex-direction: column;
    
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      
      img {
        height: 30px;
      }
      
      h3 {
        font-size: 1.2rem;
        margin: 0;
      }
    }
    
    p {
      color: ${props => props.theme.colors.textSecondary};
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .social {
      display: flex;
      gap: 1rem;
      
      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
        
        &:hover {
          background-color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
  
  .copyright {
    text-align: center;
    padding-top: 3rem;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 3rem;
  }
`;

// Content multilingue
const translations = {
  en: {
    nav: {
      features: "Features",
      testimonials: "Testimonials",
      pricing: "Pricing",
      faq: "FAQ"
    },
    hero: {
      title: "Develop your <span>mental balance</span> with MindTrap",
      description: "MindTrap is an app that helps you improve your mental well-being through daily challenges, interactive games, and personal reflection scenarios.",
      downloadButton: "Download App",
      appStore: "Download on the",
      appStoreShort: "App Store",
      googlePlay: "GET IT ON",
      googlePlayShort: "Google Play"
    },
    features: {
      title: "Discover the main <span>features</span>",
      cards: [
        {
          title: "Daily Challenges",
          description: "Take on personalized daily challenges to develop new habits and mental skills, with progress tracking."
        },
        {
          title: "Interactive Games",
          description: "Improve your cognitive abilities and concentration with a variety of interactive games designed by psychology experts."
        },
        {
          title: "Reflection Scenarios",
          description: "Explore real-life scenarios that help you develop your emotional intelligence and problem-solving skills."
        }
      ]
    },
    testimonials: {
      title: "What our <span>users</span> say",
      users: [
        {
          quote: "MindTrap has completely changed how I manage my daily stress. The challenges are relevant and the games are really fun while being beneficial.",
          name: "Sophie L.",
          time: "User for 6 months"
        },
        {
          quote: "The reflection scenarios helped me develop a better understanding of my emotional reactions. I feel more balanced and aware of my thoughts.",
          name: "Thomas M.",
          time: "User for 3 months"
        },
        {
          quote: "I recommend MindTrap to all my friends! The combination of mind games and mindfulness exercises is perfect for easily integrating wellbeing into my routine.",
          name: "Emma R.",
          time: "User for 1 year"
        }
      ]
    },
    pricing: {
      title: "Our <span>plans</span>",
      cards: [
        {
          title: "Free",
          price: "0€",
          period: "/ month",
          description: "Perfect for discovering the basic features",
          features: [
            "3 daily challenges per week",
            "5 accessible games",
            "2 scenarios per month",
            "Basic progress tracking"
          ],
          buttonText: "Start for free"
        },
        {
          title: "Premium",
          price: "9.99€",
          period: "/ month",
          description: "Full access to all features",
          features: [
            "Unlimited daily challenges",
            "All games available",
            "All scenarios available",
            "Detailed progress tracking",
            "Personalized coaching",
            "Ad-free"
          ],
          buttonText: "7-day free trial",
          tag: "Popular"
        },
        {
          title: "Family",
          price: "19.99€",
          period: "/ month",
          description: "Share the experience with your loved ones",
          features: [
            "Up to 5 profiles",
            "All Premium features",
            "Group challenges and games",
            "Family progress dashboard",
            "Shared goals",
            "Priority support"
          ],
          buttonText: "14-day free trial"
        }
      ]
    },
    faq: {
      title: "Frequently <span>asked questions</span>",
      questions: [
        {
          question: "How does MindTrap work?",
          answer: "MindTrap offers three types of activities: daily challenges to develop new habits, interactive games to stimulate your cognitive abilities, and reflection scenarios to improve your emotional intelligence. The app adapts to your progress and offers personalized activities."
        },
        {
          question: "Can I use MindTrap on multiple devices?",
          answer: "Yes, with a MindTrap account, you can access your profile and progress on all your iOS and Android devices. Your data is automatically synchronized."
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer: "Absolutely! You can cancel your subscription at any time from your account settings. You will continue to benefit from premium features until the end of your current billing period."
        },
        {
          question: "Are the exercises designed by professionals?",
          answer: "Yes, all MindTrap activities are designed in collaboration with psychologists, life coaches, and personal development specialists to ensure their effectiveness and scientific basis."
        },
        {
          question: "How much time should I dedicate to MindTrap daily?",
          answer: "MindTrap is designed to adapt to your schedule. Activities typically last between 3 and 15 minutes, and you can complete them at your own pace. We recommend regular use, even if brief, for the best results."
        }
      ]
    },
    footer: {
      description: "MindTrap is a personal development app that helps you improve your mental well-being through challenges, games, and reflection scenarios.",
      sections: {
        app: {
          title: "App",
          links: ["Features", "Pricing", "Testimonials", "FAQ"]
        },
        support: {
          title: "Support",
          links: ["Contact", "Report a bug"]
        },
        legal: {
          title: "Legal",
          links: ["Terms of Use", "Privacy Policy", "Cookies", "GDPR"]
        }
      },
      copyright: "© 2025 MindTrap. All rights reserved."
    },
    download: "Download"
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      testimonials: "Témoignages",
      pricing: "Abonnements",
      faq: "FAQ"
    },
    hero: {
      title: "Développez votre <span>équilibre mental</span> avec MindTrap",
      description: "MindTrap est une application qui vous aide à améliorer votre bien-être mental à travers des défis quotidiens, des jeux interactifs et des scénarios de réflexion personnelle.",
      downloadButton: "Télécharger l'application",
      appStore: "Télécharger sur l'",
      appStoreShort: "App Store",
      googlePlay: "DISPONIBLE SUR",
      googlePlayShort: "Google Play"
    },
    features: {
      title: "Découvrez les <span>fonctionnalités</span> principales",
      cards: [
        {
          title: "Défis quotidiens",
          description: "Relevez des défis quotidiens personnalisés pour développer de nouvelles habitudes et compétences mentales, avec un suivi de votre progression."
        },
        {
          title: "Jeux interactifs",
          description: "Améliorez vos capacités cognitives et votre concentration grâce à une variété de jeux interactifs conçus par des experts en psychologie."
        },
        {
          title: "Scénarios de réflexion",
          description: "Explorez des scénarios de vie réels qui vous aident à développer votre intelligence émotionnelle et vos compétences en résolution de problèmes."
        }
      ]
    },
    testimonials: {
      title: "Ce que disent nos <span>utilisateurs</span>",
      users: [
        {
          quote: "MindTrap a complètement changé ma façon de gérer mon stress quotidien. Les défis sont pertinents et les jeux sont vraiment amusants tout en étant bénéfiques.",
          name: "Sophie L.",
          time: "Utilisatrice depuis 6 mois"
        },
        {
          quote: "Les scénarios de réflexion m'ont aidé à développer une meilleure compréhension de mes réactions émotionnelles. Je me sens plus équilibré et conscient de mes pensées.",
          name: "Thomas M.",
          time: "Utilisateur depuis 3 mois"
        },
        {
          quote: "Je recommande MindTrap à tous mes amis! La combinaison de jeux mentaux et d'exercices de pleine conscience est parfaite pour intégrer facilement le bien-être dans ma routine.",
          name: "Emma R.",
          time: "Utilisatrice depuis 1 an"
        }
      ]
    },
    pricing: {
      title: "Nos <span>abonnements</span>",
      cards: [
        {
          title: "Gratuit",
          price: "0€",
          period: "/ mois",
          description: "Parfait pour découvrir les fonctionnalités de base",
          features: [
            "3 défis quotidiens par semaine",
            "5 jeux accessibles",
            "2 scénarios par mois",
            "Suivi de progression de base"
          ],
          buttonText: "Commencer gratuitement"
        },
        {
          title: "Premium",
          price: "9,99€",
          period: "/ mois",
          description: "Accès complet à toutes les fonctionnalités",
          features: [
            "Défis quotidiens illimités",
            "Tous les jeux disponibles",
            "Tous les scénarios disponibles",
            "Suivi de progression détaillé",
            "Coaching personnalisé",
            "Sans publicité"
          ],
          buttonText: "Essai gratuit de 7 jours",
          tag: "Populaire"
        },
        {
          title: "Famille",
          price: "19,99€",
          period: "/ mois",
          description: "Partagez l'expérience avec vos proches",
          features: [
            "Jusqu'à 5 profils",
            "Toutes les fonctionnalités Premium",
            "Défis et jeux en groupe",
            "Tableau de progression familial",
            "Objectifs partagés",
            "Support prioritaire"
          ],
          buttonText: "Essai gratuit de 14 jours"
        }
      ]
    },
    faq: {
      title: "Questions <span>fréquentes</span>",
      questions: [
        {
          question: "Comment fonctionne MindTrap ?",
          answer: "MindTrap vous propose trois types d'activités : des défis quotidiens pour développer de nouvelles habitudes, des jeux interactifs pour stimuler vos capacités cognitives, et des scénarios de réflexion pour améliorer votre intelligence émotionnelle. L'application s'adapte à votre progression et vous propose des activités personnalisées."
        },
        {
          question: "Puis-je utiliser MindTrap sur plusieurs appareils ?",
          answer: "Oui, avec un compte MindTrap, vous pouvez accéder à votre profil et à votre progression sur tous vos appareils iOS et Android. Vos données sont synchronisées automatiquement."
        },
        {
          question: "Puis-je annuler mon abonnement à tout moment ?",
          answer: "Absolument ! Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte. Vous continuerez à bénéficier des fonctionnalités premium jusqu'à la fin de la période de facturation en cours."
        },
        {
          question: "Les exercices sont-ils conçus par des professionnels ?",
          answer: "Oui, toutes les activités de MindTrap sont conçues en collaboration avec des psychologues, des coachs de vie et des spécialistes du développement personnel pour garantir leur efficacité et leur base scientifique."
        },
        {
          question: "Combien de temps par jour dois-je consacrer à MindTrap ?",
          answer: "MindTrap est conçu pour s'adapter à votre emploi du temps. Les activités durent généralement entre 3 et 15 minutes, et vous pouvez les réaliser à votre rythme. Nous recommandons une utilisation régulière, même courte, pour de meilleurs résultats."
        }
      ]
    },
    footer: {
      description: "MindTrap est une application de développement personnel qui vous aide à améliorer votre bien-être mental par des défis, des jeux et des scénarios de réflexion.",
      sections: {
        app: {
          title: "Application",
          links: ["Fonctionnalités", "Abonnements", "Témoignages", "FAQ"]
        },
        support: {
          title: "Support",
          links: ["Contact", "Signaler un bug"]
        },
        legal: {
          title: "Légal",
          links: ["Conditions d'utilisation", "Politique de confidentialité", "Cookies", "RGPD"]
        }
      },
      copyright: "© 2025 MindTrap. Tous droits réservés."
    },
    download: "Télécharger"
  }
};

function HomePage({ lang }) {
  const t = translations[lang];
  
  // Simulation de l'image mockup
  const mockupImage = {
    src: heroImage, // Utilisation de l'image existante comme placeholder
    alt: "MindTrap App Mockup",
    width: 300,
    height: 600
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <StoreButtons>
              <StoreButton href="#download">
                <div className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.9979 8.91678C17.5533 8.9397 14.1156 10.3973 13.261 11.268C12.8402 11.6961 12.4402 12.5368 12.4402 13.4961C12.4402 14.4555 12.8475 15.3009 13.261 15.7266C14.1586 16.6434 17.6892 18.0645 17.9786 18.0864C18.1588 18.1375 18.3578 18.0668 18.4579 17.9044C18.5581 17.7421 18.537 17.5387 18.4039 17.3988C18.4039 17.3988 18.1297 17.1735 17.9786 17.0942C17.4646 16.8055 16.1392 16.155 15.9254 15.9945C15.5866 15.7291 15.2587 15.1829 15.2587 13.5571C15.2587 12.1384 15.8371 11.4953 15.9254 11.4242C16.1298 11.2708 17.6844 10.5095 17.9786 10.3212C18.1224 10.2517 18.3578 10.0582 18.3578 10.0582C18.4837 9.92052 18.5092 9.72493 18.418 9.55788C18.3269 9.39082 18.1345 9.31182 17.9545 9.35199C17.9545 9.35199 17.9572 9.35102 17.9786 9.35102L17.9979 8.91678ZM12.3281 11.2056C12.2425 11.2584 10.2947 12.2687 9.35978 12.2687C8.65654 12.2687 8.35146 11.9167 8.35146 11.4047C8.35146 10.6523 9.35978 10.2568 9.35978 10.2568C9.35978 10.2568 10.5137 9.87493 10.6847 9.80834C11.0139 9.67175 11.4637 9.55199 11.7905 9.55199C12.0725 9.55199 12.2976 9.64758 12.2976 10.1304C12.2976 10.6084 12.3281 11.2056 12.3281 11.2056ZM12.3793 15.7071C12.3793 15.7071 12.3488 16.4301 12.3488 16.7992C12.3488 17.2967 12.0724 17.3995 11.7905 17.3995C11.4637 17.3995 11.0139 17.2724 10.6847 17.1406C10.5137 17.0686 9.35978 16.6892 9.35978 16.6892C9.35978 16.6892 8.35146 16.2937 8.35146 15.5413C8.35146 15.0245 8.72978 14.6773 9.35978 14.6773C10.3025 14.6773 12.2425 15.6463 12.3281 15.7071H12.3793ZM8.22803 13.4742C8.22803 13.4742 7.44276 13.4742 7.21879 13.4742C6.37683 13.4742 5.56494 12.8235 5.56494 12.016C5.56494 11.1694 6.35044 10.5698 7.21879 10.5698C7.45007 10.5698 8.22803 10.5698 8.22803 10.5698V9.64807C8.22803 9.64807 7.41637 9.64807 7.20604 9.64807C5.83736 9.64807 4.69678 10.7198 4.69678 12.016C4.69678 13.2878 5.84468 14.3986 7.20604 14.3986C7.42271 14.3986 8.22803 14.3986 8.22803 14.3986V13.4742Z"></path>
                  </svg>
                </div>
                <div className="content">
                  <span className="store">{t.hero.appStore}</span>
                  <span className="action">{t.hero.appStoreShort}</span>
                </div>
              </StoreButton>
              
              <StoreButton href="#download">
                <div className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.8637 6.78982L10.1863 4.15723C10.0737 4.04766 10.0215 3.89795 10.0404 3.7482C10.0593 3.59849 10.1469 3.46879 10.2752 3.395C10.9459 2.9977 11.7339 2.9977 12.4044 3.395C12.5328 3.46879 12.6204 3.59849 12.6393 3.7482C12.6582 3.8979 12.6059 4.04766 12.4933 4.15723L12.8637 6.78982ZM5.57832 10.9404L3.07041 11.0637C2.9106 11.0676 2.76086 11.0051 2.6592 10.8939C2.55754 10.7827 2.51398 10.6331 2.54109 10.487C2.7278 9.26098 3.36635 8.15299 4.33035 7.38727C4.44129 7.29781 4.58646 7.26256 4.72478 7.29C4.86315 7.31748 4.98077 7.40434 5.04396 7.52668L5.57832 10.9404ZM20.9374 10.487C21.1241 11.7129 20.8337 12.9626 20.128 13.9878C19.4223 15.0129 18.3503 15.7363 17.1374 16.0179C15.9246 16.2995 14.6528 16.1181 13.5661 15.5097C12.4793 14.9013 11.6587 13.9135 11.2728 12.7394L5.70044 11.0644L6.30828 7.20855L9.56826 3.79223C10.4182 3.07812 11.5283 2.80469 12.5909 3.04551C13.6534 3.28633 14.5438 4.01347 15.0228 5.00004H18.4636C18.8878 5.00004 19.2946 5.16865 19.5946 5.46872C19.8947 5.76879 20.0636 6.1755 20.0636 6.60004V7.40004C20.7818 8.23872 21.1641 9.33258 21.0778 10.441C21.058 10.5902 20.9767 10.7255 20.8543 10.8143C20.7318 10.9031 20.5782 10.9379 20.4308 10.9105L20.9374 10.487Z"></path>
                    <path d="M19.4637 16.6001C18.1156 18.2243 16.1518 19.1585 14.0764 19.1585C13.2983 19.1585 12.5286 19.0142 11.8056 18.7365L10.5578 21.0001L8.05782 21.0001C7.8099 21.0001 7.57231 20.8948 7.3973 20.7069C7.22229 20.5191 7.13393 20.267 7.15459 20.0122L7.5578 15.0001L11.5578 16.0001C12.282 16.9089 13.3344 17.4705 14.475 17.5598C15.6156 17.6491 16.7428 17.2591 17.5862 16.4773C18.4296 15.6955 18.92 14.586 18.9455 13.4182C18.9709 12.2505 18.5296 11.1177 17.7228 10.3001H19.9728C20.1233 11.702 20.0134 13.1263 19.6506 14.5001C19.6368 14.5397 19.6227 14.5792 19.608 14.6185C19.5716 14.7192 19.5273 14.8125 19.4728 14.9001C19.4728 14.9001 19.4689 14.9068 19.4637 14.9153C19.4534 14.9327 19.4468 14.9462 19.4456 14.9481C19.4456 14.9481 19.4635 14.9216 19.4651 14.918C19.6421 14.6163 19.674 14.255 19.5512 13.9306C19.4284 13.6062 19.1644 13.3559 18.8398 13.2539C18.8048 13.2425 18.7684 13.2351 18.7312 13.2317C18.7244 13.231 18.7176 13.2306 18.7108 13.2301H11.9728C11.7092 13.2301 11.4564 13.1301 11.2677 12.949C11.079 12.7679 10.9687 12.5185 10.9583 12.2531C10.9479 11.9877 11.0383 11.7288 11.2108 11.5324C11.3834 11.336 11.6263 11.2154 11.8869 11.1936L17.9458 10.5831C17.9526 10.5824 17.9593 10.5818 17.9662 10.5811C18.0041 10.5774 18.0409 10.569 18.0765 10.5563C18.3989 10.4523 18.6606 10.201 18.7817 9.8766C18.9028 9.5522 18.8702 9.1919 18.694 8.8921C18.694 8.8921 18.6746 8.8606 18.6569 8.8324C18.6444 8.8118 18.6364 8.8 18.6334 8.7946C17.0334 6.2071 14.3094 4.5001 11.2728 4.5001H7.7728C7.53372 4.5001 7.30372 4.5879 7.12871 4.7442C6.9537 4.9004 6.84535 5.11486 6.82458 5.35323L5.82458 15.3532C5.80148 15.6237 5.88939 15.8917 6.06846 16.0956C6.24753 16.2995 6.5011 16.4218 6.7728 16.4301H9.2728L11.0728 13.5001C11.0728 13.5001 11.5946 13.0001 12.1809 13.0001C12.7672 13.0001 17.1809 13.0001 17.1809 13.0001C16.9109 13.9432 16.2989 14.745 15.4772 15.2401C14.6555 15.7351 13.6814 15.8877 12.7528 15.6665C11.8241 15.4454 11.0192 14.8675 10.5154 14.0674C10.0115 13.2673 9.84833 12.3055 10.0609 11.3889C10.2735 10.4723 10.8459 9.67477 11.6466 9.1634C12.4474 8.65203 13.4198 8.4616 14.36 8.63093C15.3002 8.80025 16.1362 9.31423 16.7096 10.0714C17.2829 10.8286 17.5539 11.7705 17.4637 12.7101L19.4637 16.6001Z"></path>
                  </svg>
                </div>
                <div className="content">
                  <span className="store">{t.hero.googlePlay}</span>
                  <span className="action">{t.hero.googlePlayShort}</span>
                </div>
              </StoreButton>
            </StoreButtons>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <div className="background-glow"></div>
          <motion.img 
            className="mockup"
            src={mockupImage.src} 
            alt={mockupImage.alt} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
          />
        </HeroImageContainer>
      </HeroSection>
      
      <FeatureSection id="features">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t.features.title }}
        />
        
        <FeatureGrid>
          {t.features.cards.map((card, index) => (
            <FeatureCard 
              key={index}
              color={index === 0 ? theme.colors.primary : index === 1 ? theme.colors.secondary : theme.colors.tertiary}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeatureSection>
      
      <TestimonialSection id="testimonials">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t.testimonials.title }}
        />
        
        <TestimonialGrid>
          {t.testimonials.users.map((user, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <p>{user.quote}</p>
              <div className="user">
                <div className="avatar">{user.name.charAt(0)}</div>
                <div className="info">
                  <h4>{user.name}</h4>
                  <span>{user.time}</span>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialSection>
      
      <PricingSection id="pricing">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t.pricing.title }}
        />
        
        <PricingGrid>
          {t.pricing.cards.map((card, index) => (
            <PricingCard
              key={index}
              featured={index === 1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>{card.title}</h3>
              <div className="price">
                {card.price} <span>{card.period}</span>
              </div>
              <div className="description">
                {card.description}
              </div>
              <ul>
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button>{card.buttonText}</Button>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>
      
      <FAQSection id="faq">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t.faq.title }}
        />
        
        <FAQContainer>
          {t.faq.questions.map((item, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>
    </>
  );
}

function AppContent() {
  const [language, setLanguage] = useState('fr');
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <Logo>
            <img src={logo} alt="MindTrap Logo" />
            <h1>MindTrap</h1>
          </Logo>
          <Nav>
            <NavLink href="#features" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}>{t.nav.features}</NavLink>
            <NavLink href="#testimonials" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}>{t.nav.testimonials}</NavLink>
            <NavLink href="#pricing" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}>{t.nav.pricing}</NavLink>
            <NavLink href="#faq" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}>{t.nav.faq}</NavLink>
          </Nav>
          <HeaderButtons>
            <LangSelector>
              <button 
                onClick={() => setLanguage('fr')}
                style={{ color: language === 'fr' ? theme.colors.primary : theme.colors.textSecondary }}
              >
                FR
              </button>
              <span>|</span>
              <button 
                onClick={() => setLanguage('en')}
                style={{ color: language === 'en' ? theme.colors.primary : theme.colors.textSecondary }}
              >
                EN
              </button>
            </LangSelector>
            <Button>{t.download}</Button>
          </HeaderButtons>
        </Header>
          
        <Routes>
          <Route path="/" element={<HomePage lang={language} />} />
          <Route path="/legal/terms" element={<TermsOfService lang={language} />} />
          <Route path="/legal/privacy" element={<PrivacyPolicy lang={language} />} />
          <Route path="/legal/cookies" element={<CookiePolicy lang={language} />} />
          <Route path="/legal/gdpr" element={<GDPR lang={language} />} />
          <Route path="/legal/eula" element={<EULA lang={language} />} />
          <Route path="/support" element={<SupportPage lang={language} />} />
        </Routes>
        
        <Footer>
          <div className="footer-content">
            <div className="logo-column">
              <div className="logo">
                <img src={logo} alt="MindTrap Logo" />
                <h3>MindTrap</h3>
              </div>
              <p>
                {t.footer.description}
              </p>
              <div className="social">
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.8 3.8 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.04 6.04 0 0 0-2.19 1.41A6.04 6.04 0 0 0 .54 4.23c-.3.76-.5 1.64-.56 2.91C.01 8.42 0 8.82 0 12.08s.01 3.66.07 4.94c.06 1.27.26 2.15.56 2.91.31.8.71 1.48 1.41 2.19a6.04 6.04 0 0 0 2.19 1.41c.76.3 1.64.5 2.91.56 1.28.06 1.68.07 4.94.07s3.66-.01 4.94-.07c1.27-.06 2.15-.26 2.91-.56a6.04 6.04 0 0 0 2.19-1.41 6.04 6.04 0 0 0 1.41-2.19c.3-.76.5-1.64.56-2.91.06-1.28.07-1.68.07-4.94s-.01-3.66-.07-4.94c-.06-1.27-.26-2.15-.56-2.91a6.04 6.04 0 0 0-1.41-2.19A6.04 6.04 0 0 0 19.85.63c-.76-.3-1.64-.5-2.91-.56C15.66.01 15.26 0 12 0zm0 5.84a6.24 6.24 0 1 0 0 12.48 6.24 6.24 0 0 0 0-12.48zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-12.37a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>{t.footer.sections.app.title}</h3>
              <ul>
                {t.footer.sections.app.links.map((link, index) => (
                  <li key={index}>
                    <a href={
                      index === 0 ? "#features" : 
                      index === 1 ? "#pricing" : 
                      index === 2 ? "#testimonials" : "#faq"
                    } onClick={(e) => {
                      if (window.location.pathname !== '/') {
                        e.preventDefault();
                        navigate('/');
                        setTimeout(() => {
                          const id = index === 0 ? "features" : 
                                  index === 1 ? "pricing" : 
                                  index === 2 ? "testimonials" : "faq";
                          document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t.footer.sections.support.title}</h3>
              <ul>
                {t.footer.sections.support.links.map((link, index) => (
                  <li key={index}>
                    <a href="/support" onClick={(e) => {
                      e.preventDefault();
                      navigate('/support');
                    }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t.footer.sections.legal.title}</h3>
              <ul>
                {t.footer.sections.legal.links.map((link, index) => {
                  const paths = [
                    '/legal/terms',
                    '/legal/privacy',
                    '/legal/cookies',
                    '/legal/gdpr'
                  ];
                  return (
                    <li key={index}>
                      <a href={paths[index]} onClick={(e) => {
                        e.preventDefault();
                        navigate(paths[index]);
                      }}>{link}</a>
                    </li>
                  );
                })}
                <li>
                  <a href="/legal/eula" onClick={(e) => {
                    e.preventDefault();
                    navigate('/legal/eula');
                  }}>
                    {language === 'fr' ? 'CLUF Apple' : 'Apple EULA'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            {t.footer.copyright}
          </div>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
}

// Wrapper component to use Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;