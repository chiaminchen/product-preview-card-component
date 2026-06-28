import styles from './Home.module.css';
import ProductCard from '../components/ProductCard/ProductCard';

function Home() {
  return (
    <main className={styles.home}>
      <ProductCard />
    </main>
  );
}

export default Home;
