import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  background-color: rgba(30, 30, 48, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Textarea = styled.textarea`
  background-color: rgba(30, 30, 48, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Select = styled.select`
  background-color: rgba(30, 30, 48, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  option {
    background-color: #1E1E30;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, #651FFF);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 77, 255, 0.2);
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 77, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 4px solid #28a745;
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled(motion.div)`
  background-color: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

function ContactForm({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });
  
  const translations = {
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email Address",
      subject: "Subject",
      subjectOptions: {
        general: "General Inquiry",
        support: "Technical Support",
        feedback: "Feedback",
        partnership: "Partnership",
        other: "Other"
      },
      message: "Message",
      submit: "Send Message",
      submitting: "Sending...",
      placeholders: {
        name: "Your name",
        email: "your.email@example.com",
        message: "Please describe your inquiry in detail..."
      },
      success: "Your message has been sent successfully. We'll get back to you as soon as possible.",
      error: "There was an error sending your message. Please try again later."
    },
    fr: {
      title: "Contactez-nous",
      name: "Nom",
      email: "Adresse e-mail",
      subject: "Sujet",
      subjectOptions: {
        general: "Demande générale",
        support: "Support technique",
        feedback: "Commentaires",
        partnership: "Partenariat",
        other: "Autre"
      },
      message: "Message",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      placeholders: {
        name: "Votre nom",
        email: "votre.email@exemple.com",
        message: "Veuillez décrire votre demande en détail..."
      },
      success: "Votre message a été envoyé avec succès. Nous reviendrons vers vous dès que possible.",
      error: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ultérieurement."
    }
  };
  
  const t = translations[lang];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the data to your backend
      console.log("Form submitted:", formData);
      setStatus({ submitting: false, success: true, error: false });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <FormContainer>
      {status.success && (
        <SuccessMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t.success}
        </SuccessMessage>
      )}
      
      {status.error && (
        <ErrorMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t.error}
        </ErrorMessage>
      )}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">{t.name}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.placeholders.name}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">{t.email}</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.placeholders.email}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="subject">{t.subject}</Label>
          <Select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="" disabled>-- {t.subject} --</option>
            <option value="general">{t.subjectOptions.general}</option>
            <option value="support">{t.subjectOptions.support}</option>
            <option value="feedback">{t.subjectOptions.feedback}</option>
            <option value="partnership">{t.subjectOptions.partnership}</option>
            <option value="other">{t.subjectOptions.other}</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="message">{t.message}</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.placeholders.message}
            required
          />
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={status.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status.submitting ? t.submitting : t.submit}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default ContactForm;