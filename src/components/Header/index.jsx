import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link to="/">
          <img src="/img/maranyon-logo.png" alt="logo" />
        </Link>
        <ul>
          <Link to="categories">
            <li>Каталог</li>
          </Link>
          <li>Корзина</li>
        </ul>
      </div>
    </header>
  );
};
