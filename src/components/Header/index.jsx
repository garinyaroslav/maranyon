import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setIsOpen } from '../../redux/cart/slice';

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

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
          <li onClick={() => dispatch(setIsOpen())}>Корзина</li>
        </ul>
      </div>
    </header>
  );
};
