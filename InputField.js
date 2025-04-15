import React from 'react';
import styles from './InputField.module.css';
import classNames from 'classnames';

function InputField({ className, ...props }) {
  const combinedClasses = classNames(styles.inputField, className);
  return (
    <input className={combinedClasses} {...props} />
  );
}

export default InputField;