import styles from './Button.module.css';
import cartIcon from '../../assets/icons/icon-cart.svg';

function Button() {
  return (
    <button className={styles.btn}>
      <img className={styles.cart} src={cartIcon} alt="Shopping cart" /> Add to Cart
    </button>
  );
}

export default Button;
