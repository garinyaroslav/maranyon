import React from 'react';

import styles from './Drawer.module.scss';

export const Drawer = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}></div>
    </div>
  );
};
