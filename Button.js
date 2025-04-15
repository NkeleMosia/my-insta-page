import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

function Button({ children, className, ...props }) {
  const combinedClasses = classNames(styles.button, className);
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;