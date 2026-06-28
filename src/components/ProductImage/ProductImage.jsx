import styles from './ProductImage.module.css';

function ProductImage({ mobileSrc, desktopSrc, alt }) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrc} />
      <img className={styles.productImage} src={mobileSrc} alt={alt} />
    </picture>
  );
}

export default ProductImage;
