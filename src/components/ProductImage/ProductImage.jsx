import styles from './ProductImage.module.css';
import mobileImage from '../../assets/images/image-product-mobile.jpg';
import desktopImage from '../../assets/images/image-product-desktop.jpg';

function ProductImage() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopImage} />
      <img
        className={styles.productImage}
        src={mobileImage}
        alt="Gabrielle Essence Eau De Parfum bottle on a white surface with green leaves"
      />
    </picture>
  );
}

export default ProductImage;
