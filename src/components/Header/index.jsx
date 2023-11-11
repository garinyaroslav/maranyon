import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <img src="/img/maranyon-logo.png" alt="logo" />
        <ul>
          <li>Каталог</li>
          <li>Корзина</li>
        </ul>
      </div>
    </header>
  );
};
