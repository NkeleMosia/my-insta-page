import React from 'react';
import styles from './SignUpOptions.module.css';
import LinkButton from '../../UI/LinkButton';

function SignUpOptions() {
  return (
    <div className={styles.signUpOptions}>
      <p className={styles.signUpText}>
        Don't have an account? <LinkButton>Sign up</LinkButton>
      </p>
    </div>
  );
}

export default SignUpOptions;