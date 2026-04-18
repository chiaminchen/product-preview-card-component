import './components/ProductImage';
import CartButton from './components/CartButton';
import ProductImage from './components/ProductImage';

function App() {
  return (
    <main className="bg-white rounded-xl overflow-hidden my-20 mx-card-margin max-w-150 grid grid-cols-1 md:grid-cols-2 md:w-150 md:m-0">
      <ProductImage />
      <div className="p-8 flex flex-col gap-6">
        <p className="text-xs/1.2 tracking-[0.3125rem]">PERFUME</p>
        <h1 className="font-fraunces text-[2rem] font-bold text-black">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm/1.6">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </p>
        <div className="flex gap-4 items-center">
          <span className="font-fraunces text-[2rem] font-bold text-green-light">$149.99</span>
          <span className="text-[0.8125rem]/1.2 line-through">$169.99</span>
        </div>
        <CartButton />
      </div>
    </main>
  );
}

export default App;
