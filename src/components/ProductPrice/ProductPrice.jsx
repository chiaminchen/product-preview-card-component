import styles from './ProductPrice.module.css';

function ProductPrice({ current, original }) {
  return (
    <section className={styles.productPrice}>
      <span className="sr-only">Current price:</span>
      <span className={styles.current}>{current}</span>
      <span className="sr-only">Original price:</span>
      <span className={styles.original}>{original}</span>
    </section>
  );
}

export default ProductPrice;
