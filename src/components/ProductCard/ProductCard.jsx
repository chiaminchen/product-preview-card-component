import styles from './ProductCard.module.css';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductPrice from '../ProductPrice/ProductPrice';
import Button from '../Button/Button';
import mobileImage from '../../assets/images/image-product-mobile.jpg';
import desktopImage from '../../assets/images/image-product-desktop.jpg';

function ProductCard() {
  return (
    <article className={styles.productCard}>
      <ProductImage
        mobileSrc={mobileImage}
        desktopSrc={desktopImage}
        alt="Gabrielle Essence Eau De Parfum bottle on a white surface with green leaves"
      />
      <div className={styles.content}>
        <ProductInfo
          category="Perfume"
          title="Gabrielle Essence Eau De Parfum"
          description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        />
        <ProductPrice current="$149.99" original="$169.99" />
        <Button />
      </div>
    </article>
  );
}

export default ProductCard;
