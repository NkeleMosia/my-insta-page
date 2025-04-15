import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import Button from '../../UI/Button';
import InputField from '../../UI/InputField';
import LinkButton from '../../UI/LinkButton';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with:', { username, password });
    // Add your login logic here
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.logoContainer}>
        <img src="/assets/images/instagram-text.png" alt="Instagram" className={styles.logo} />
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
          onChange={handleUsernameChange}
          className={styles.input}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={styles.input}
        />
        <Button type="submit" className={styles.loginButton} disabled={!username || !password}>
          Log in
        </Button>
      </form>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorLine}></div>
        <span className={styles.separatorText}>OR</span>
        <div className={styles.separatorLine}></div>
      </div>
      <LinkButton className={styles.facebookLogin}>
        <img src="/assets/images/facebook-icon.png" alt="Facebook" className={styles.facebookIcon} /> {/* You'll need a Facebook icon */}
        Continue with Facebook
      </LinkButton>
      <LinkButton className={styles.forgotPassword}>Forgot password?</LinkButton>
    </div>
  );
}

export default LoginForm;