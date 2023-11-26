import { useDispatch } from 'react-redux';

import { removeItem } from '../../redux/cart/slice';

import styles from './CartItem.module.scss';

export const CartItem = ({ id, imgUrl, title, price, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <img src={imgUrl} alt="cartItemImg" />
      <div className={styles.info}>
        <div className={styles.title}>
          <span>{title}</span>
          <img
            onClick={() => dispatch(removeItem(id))}
            className={styles.closeImg}
            src="/img/close.svg"
            alt="close"
          />
        </div>
        <span className={styles.price}>{price}₽</span>
        <div className={styles.quantity}>
          <div className={styles.minus}>-</div>
          <div className={styles.count}>{count}</div>
          <div className={styles.plus}>+</div>
        </div>
      </div>
    </div>
  );
};
