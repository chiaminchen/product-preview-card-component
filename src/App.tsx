import CartButton from './components/CartButton';
import ProductImage from './components/ProductImage';

function App() {
  return (
    <main className="mx-card-margin my-20 grid max-w-150 grid-cols-1 overflow-hidden rounded-xl bg-white md:m-0 md:w-150 md:grid-cols-2">
      <ProductImage />
      <div className="flex flex-col gap-6 p-8">
        <p className="text-xs/1.2 tracking-widest">PERFUME</p>
        <h1 className="font-fraunces text-title font-bold text-black">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm/1.6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4">
          <p className="sr-only">Current price:</p>
          <span className="font-fraunces text-green-light text-title font-bold">
            $149.99
          </span>
          <p className="sr-only">Original price:</p>
          <span className="text-price-old/1.2 line-through">$169.99</span>
        </div>
        <CartButton />
      </div>
    </main>
  );
}

export default App;
