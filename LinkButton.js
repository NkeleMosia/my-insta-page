import React from 'react';
import styles from './LinkButton.module.css';
import classNames from 'classnames';

function LinkButton({ children, className, ...props }) {
  const combinedClasses = classNames(styles.linkButton, className);
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default LinkButton;