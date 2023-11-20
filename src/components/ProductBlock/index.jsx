import styles from './ProductBlock.module.scss';

export const ProductBlock = ({ image, title, price }) => {
  return (
    <div className={styles.root}>
      <img src={image} alt="product-img" />
      <p>{title}</p>
      <span>{price}₽</span>
    </div>
  );
};
