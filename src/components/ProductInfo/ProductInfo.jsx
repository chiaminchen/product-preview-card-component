import styles from './ProductInfo.module.css';

function ProductInfo() {
  return (
    <section className={styles.productInfo}>
      <p className={styles.category}>Perfume</p>
      <h2>Gabrielle Essence Eau De Parfum</h2>
      <p className={styles.description}>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
        for the House of CHANEL.
      </p>
    </section>
  );
}

export default ProductInfo;
