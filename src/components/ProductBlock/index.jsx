import styles from './ProductBlock.module.scss';

export const ProductBlock = () => {
  return (
    <div className={styles.root}>
      <img
        src="https://cdn.leroymerlin.ru/lmru/image/upload/v1689946883/b_white,c_pad,d_photoiscoming.png,f_auto,h_2000,q_auto,w_2000/lmcode/J1-CBNS8uE2cChkRcEDpvA/85113381_01.png"
        alt="product-img"
      />
      <p>Стул sqre Pxel</p>
      <span>3390₽</span>
    </div>
  );
};
