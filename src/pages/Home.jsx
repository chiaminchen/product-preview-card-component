import styles from './Home.module.css';
import ProductCard from '../components/ProductCard/ProductCard';

function Home() {
  return (
    <main className={styles.home}>
      <h1 className="sr-only">Welcome to Product Preview Card Components</h1>
      <ProductCard />
    </main>
  );
}

export default Home;
