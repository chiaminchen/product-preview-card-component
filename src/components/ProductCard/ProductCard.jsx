import styles from './ProductCard.module.css';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductPrice from '../ProductPrice/ProductPrice';
import Button from '../Button/Button';

function ProductCard() {
  return (
    <article className={styles.productCard}>
      <ProductImage />
      <div className={styles.content}>
        <ProductInfo />
        <ProductPrice />
        <Button />
      </div>
    </article>
  );
}

export default ProductCard;
