import styles from './ProductInfo.module.css';

function ProductInfo({ category, title, description }) {
  return (
    <section className={styles.productInfo}>
      <p className={styles.category}>{category}</p>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}

export default ProductInfo;
