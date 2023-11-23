import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Drawer.module.scss';

export const Drawer = () => {
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}></div>
    </div>
  );
};
