import styles from './ProductPrice.module.css';

function ProductPrice() {
  return (
    <section className={styles.productPrice}>
      <span className="sr-only">Current price:</span>
      <span className={styles.current}>$149.99</span>
      <span className="sr-only">Original price:</span>
      <span className={styles.original}>$169.99</span>
    </section>
  );
}

export default ProductPrice;
