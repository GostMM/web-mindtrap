import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import googlePlayBadge from '../assets/google-play-badge.png';

// Styled components
const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: ${props => props.theme.colors.background};
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  
  img {
    height: 80px;
    width: auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 600px;
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const AppStoreBadgeImage = styled.img`
  height: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 46px;
  }
`;

const GooglePlayBadgeImage = styled.img`
  height: 60px; /* Google Play badge est plus large, donc ajuster la hauteur */
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 55px;
  }
`;

const BackLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  margin-top: 2rem;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingAnimation = styled(motion.div)`
  margin: 2rem 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid rgba(124, 77, 255, 0.2);
  border-top: 4px solid ${props => props.theme.colors.primary};
`;

// Store URLs
const STORES = {
  APPLE: "https://apps.apple.com/us/app/mindtrap-no-toxic-positivity/id6744022031", // Remplacer par votre URL App Store
  GOOGLE: "https://play.google.com/store/apps/details?id=com.mindtrap.app", // Remplacer par votre URL Google Play
  FALLBACK: "https://mindtrap.net" // URL de repli si le système n'est pas détecté
};

const translations = {
  en: {
    title: "Redirecting you to <span>MindTrap</span>",
    description: "We're detecting your device and sending you to the right app store...",
    loading: "Loading...",
    manualRedirect: "If you aren't redirected automatically, please choose your platform below:",
    appStore: "Download on the",
    appStoreShort: "App Store",
    googlePlay: "GET IT ON",
    googlePlayShort: "Google Play",
    backToSite: "Back to website"
  },
  fr: {
    title: "Redirection vers <span>MindTrap</span>",
    description: "Nous détectons votre appareil et vous dirigeons vers la boutique d'applications appropriée...",
    loading: "Chargement...",
    manualRedirect: "Si vous n'êtes pas redirigé automatiquement, veuillez choisir votre plateforme ci-dessous :",
    appStore: "Télécharger sur l'",
    appStoreShort: "App Store",
    googlePlay: "DISPONIBLE SUR",
    googlePlayShort: "Google Play",
    backToSite: "Retour au site"
  }
};

function AppRedirect({ lang = 'fr' }) {
  const [redirecting, setRedirecting] = useState(true);
  const [detectedOS, setDetectedOS] = useState(null);
  const t = translations[lang];

  useEffect(() => {
    // Fonction pour détecter le système d'exploitation à partir de l'user agent
    const detectOS = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'ios';
      }
      
      // Android detection
      if (/android/i.test(userAgent)) {
        return 'android';
      }
      
      // Si on ne peut pas détecter, on renvoie null
      return null;
    };

    // Détecter l'OS et configurer la redirection
    const os = detectOS();
    setDetectedOS(os);
    
    // Rediriger après un court délai pour permettre l'animation
    const redirectTimeout = setTimeout(() => {
      if (os === 'ios') {
        window.location.href = STORES.APPLE;
      } else if (os === 'android') {
        window.location.href = STORES.GOOGLE;
      } else {
        // Si on ne peut pas détecter l'OS, on arrête l'animation de chargement
        setRedirecting(false);
      }
    }, 2000);
    
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <RedirectContainer>
      <Logo>
        <img src={require('../assets/images/icon.png')} alt="MindTrap Logo" />
      </Logo>
      
      <Title dangerouslySetInnerHTML={{ __html: t.title }} />
      
      <Description>{t.description}</Description>
      
      {redirecting ? (
        <LoadingAnimation 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <>
          <Description>{t.manualRedirect}</Description>
          
          <StoreButtons>
            <StoreButton href={STORES.APPLE}>
              <AppStoreBadgeImage src={appStoreBadge} alt="Download on the App Store" />
            </StoreButton>
            
            <StoreButton href={STORES.GOOGLE}>
              <GooglePlayBadgeImage src={googlePlayBadge} alt="Get it on Google Play" />
            </StoreButton>
          </StoreButtons>
        </>
      )}
      
      <BackLink href="/">{t.backToSite}</BackLink>
    </RedirectContainer>
  );
}

export default AppRedirect;