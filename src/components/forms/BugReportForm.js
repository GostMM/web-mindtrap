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
    border-color: ${props => props.theme.colors.tertiary};
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
    border-color: ${props => props.theme.colors.tertiary};
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
    border-color: ${props => props.theme.colors.tertiary};
  }
  
  option {
    background-color: #1E1E30;
  }
`;

const FileUploadContainer = styled.div`
  margin-top: 0.5rem;
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background-color: rgba(30, 30, 48, 0.7);
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.tertiary};
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.textSecondary};
  }
  
  span {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
  }
  
  input {
    display: none;
  }
`;

const FileList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: rgba(30, 30, 48, 0.5);
  border-radius: 4px;
  
  .file-name {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }
  
  .remove-button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.textSecondary};
    cursor: pointer;
    padding: 0.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #dc3545;
    }
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: rgba(30, 30, 48, 0.7);
  cursor: pointer;
  position: relative;
  
  &:checked {
    background-color: ${props => props.theme.colors.tertiary};
    border-color: ${props => props.theme.colors.tertiary};
    
    &::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      width: 6px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const CheckboxLabel = styled.label`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  cursor: pointer;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, ${props => props.theme.colors.tertiary}, #FF5252);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 149, 0, 0.2);
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 149, 0, 0.4);
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

function BugReportForm({ lang }) {
  const [formData, setFormData] = useState({
    email: '',
    deviceType: '',
    appVersion: '',
    bugDescription: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    appFunctionality: {
      challenges: false,
      games: false,
      scenarios: false,
      account: false,
      other: false
    }
  });
  
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });
  
  const translations = {
    en: {
      title: "Report a Bug",
      email: "Your Email Address",
      deviceType: "Device Type",
      deviceOptions: {
        select: "-- Select your device --",
        iphone: "iPhone",
        ipad: "iPad",
        android_phone: "Android Phone",
        android_tablet: "Android Tablet",
        other: "Other"
      },
      appVersion: "App Version",
      bugDescription: "Bug Description",
      stepsToReproduce: "Steps to Reproduce",
      expectedBehavior: "Expected Behavior",
      appFunctionality: "Where did the bug occur?",
      functionalityOptions: {
        challenges: "Daily Challenges",
        games: "Games",
        scenarios: "Scenarios",
        account: "Account/Profile",
        other: "Other"
      },
      attachScreenshots: "Attach Screenshots (optional)",
      dragDrop: "Drag & drop files here, or click to select",
      maxSize: "Max file size: 5MB",
      submit: "Submit Bug Report",
      submitting: "Submitting...",
      placeholders: {
        email: "your.email@example.com",
        appVersion: "e.g. 1.0.2",
        bugDescription: "Please describe the issue you encountered...",
        stepsToReproduce: "List the steps to reproduce the bug...",
        expectedBehavior: "What did you expect to happen instead?"
      },
      success: "Your bug report has been submitted successfully. Thank you for helping us improve MindTrap!",
      error: "There was an error submitting your bug report. Please try again later."
    },
    fr: {
      title: "Signaler un bug",
      email: "Votre adresse e-mail",
      deviceType: "Type d'appareil",
      deviceOptions: {
        select: "-- Sélectionnez votre appareil --",
        iphone: "iPhone",
        ipad: "iPad",
        android_phone: "Téléphone Android",
        android_tablet: "Tablette Android",
        other: "Autre"
      },
      appVersion: "Version de l'application",
      bugDescription: "Description du bug",
      stepsToReproduce: "Étapes pour reproduire",
      expectedBehavior: "Comportement attendu",
      appFunctionality: "Où le bug s'est-il produit ?",
      functionalityOptions: {
        challenges: "Défis quotidiens",
        games: "Jeux",
        scenarios: "Scénarios",
        account: "Compte/Profil",
        other: "Autre"
      },
      attachScreenshots: "Joindre des captures d'écran (facultatif)",
      dragDrop: "Glissez-déposez des fichiers ici, ou cliquez pour sélectionner",
      maxSize: "Taille maximale du fichier : 5 Mo",
      submit: "Soumettre le rapport de bug",
      submitting: "Envoi en cours...",
      placeholders: {
        email: "votre.email@exemple.com",
        appVersion: "ex. 1.0.2",
        bugDescription: "Veuillez décrire le problème que vous avez rencontré...",
        stepsToReproduce: "Listez les étapes pour reproduire le bug...",
        expectedBehavior: "Qu'attendiez-vous qu'il se passe à la place ?"
      },
      success: "Votre rapport de bug a été soumis avec succès. Merci de nous aider à améliorer MindTrap !",
      error: "Une erreur s'est produite lors de la soumission de votre rapport de bug. Veuillez réessayer ultérieurement."
    }
  };
  
  const t = translations[lang];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      appFunctionality: {
        ...prev.appFunctionality,
        [name]: checked
      }
    }));
  };
  
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    
    // Basic validation (in a real app, you might want more comprehensive validation)
    const validFiles = newFiles.filter(file => {
      // Check if file is an image and less than 5MB
      return file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024;
    });
    
    setFiles(prev => [...prev, ...validFiles]);
  };
  
  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the data to your backend
      console.log("Bug report submitted:", formData);
      console.log("Files:", files);
      
      setStatus({ submitting: false, success: true, error: false });
      setFormData({
        email: '',
        deviceType: '',
        appVersion: '',
        bugDescription: '',
        stepsToReproduce: '',
        expectedBehavior: '',
        appFunctionality: {
          challenges: false,
          games: false,
          scenarios: false,
          account: false,
          other: false
        }
      });
      setFiles([]);
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
          <Label htmlFor="deviceType">{t.deviceType}</Label>
          <Select
            id="deviceType"
            name="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>{t.deviceOptions.select}</option>
            <option value="iphone">{t.deviceOptions.iphone}</option>
            <option value="ipad">{t.deviceOptions.ipad}</option>
            <option value="android_phone">{t.deviceOptions.android_phone}</option>
            <option value="android_tablet">{t.deviceOptions.android_tablet}</option>
            <option value="other">{t.deviceOptions.other}</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="appVersion">{t.appVersion}</Label>
          <Input
            type="text"
            id="appVersion"
            name="appVersion"
            value={formData.appVersion}
            onChange={handleChange}
            placeholder={t.placeholders.appVersion}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="bugDescription">{t.bugDescription}</Label>
          <Textarea
            id="bugDescription"
            name="bugDescription"
            value={formData.bugDescription}
            onChange={handleChange}
            placeholder={t.placeholders.bugDescription}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="stepsToReproduce">{t.stepsToReproduce}</Label>
          <Textarea
            id="stepsToReproduce"
            name="stepsToReproduce"
            value={formData.stepsToReproduce}
            onChange={handleChange}
            placeholder={t.placeholders.stepsToReproduce}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="expectedBehavior">{t.expectedBehavior}</Label>
          <Textarea
            id="expectedBehavior"
            name="expectedBehavior"
            value={formData.expectedBehavior}
            onChange={handleChange}
            placeholder={t.placeholders.expectedBehavior}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t.appFunctionality}</Label>
          <CheckboxGroup>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="challenges"
                name="challenges"
                checked={formData.appFunctionality.challenges}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="challenges">{t.functionalityOptions.challenges}</CheckboxLabel>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="games"
                name="games"
                checked={formData.appFunctionality.games}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="games">{t.functionalityOptions.games}</CheckboxLabel>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="scenarios"
                name="scenarios"
                checked={formData.appFunctionality.scenarios}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="scenarios">{t.functionalityOptions.scenarios}</CheckboxLabel>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="account"
                name="account"
                checked={formData.appFunctionality.account}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="account">{t.functionalityOptions.account}</CheckboxLabel>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="other"
                name="other"
                checked={formData.appFunctionality.other}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="other">{t.functionalityOptions.other}</CheckboxLabel>
            </CheckboxContainer>
          </CheckboxGroup>
        </FormGroup>
        
        <FormGroup>
          <Label>{t.attachScreenshots}</Label>
          <FileUploadContainer>
            <FileUploadLabel>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{t.dragDrop}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{t.maxSize}</span>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleFileChange} 
                onClick={(e) => e.target.value = null}
              />
            </FileUploadLabel>
          </FileUploadContainer>
          
          {files.length > 0 && (
            <FileList>
              {files.map((file, index) => (
                <FileItem key={index}>
                  <span className="file-name">{file.name}</span>
                  <button 
                    type="button" 
                    className="remove-button" 
                    onClick={() => removeFile(index)}
                    aria-label="Remove file"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </FileItem>
              ))}
            </FileList>
          )}
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

export default BugReportForm;