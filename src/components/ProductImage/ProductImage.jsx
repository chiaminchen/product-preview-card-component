import styles from './ProductImage.module.css';
import mobileImage from '../../assets/images/image-product-mobile.jpg';

function ProductImage() {
  return (
    <picture>
      <img
        className={styles.productImage}
        src={mobileImage}
        alt="Gabrielle Essence Eau De Parfum bottle on a white surface with green leaves"
      />
    </picture>
  );
}

export default ProductImage;
