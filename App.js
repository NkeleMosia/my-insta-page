import React from 'react';
import LoginForm from './components/auth/LoginForm';
import SignUpOptions from './components/auth/SignUpOptions';
import FooterLinks from './components/auth/FooterLinks';
import AppDownloadSection from './components/auth/AppDownloadSection';
import styles from './App.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.loginContainer}>
        <LoginForm />
        <SignUpOptions />
      </div>
      <AppDownloadSection />
      <FooterLinks />
    </div>
  );
}

export default App;