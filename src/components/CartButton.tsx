import cartIcon from '../assets/icon-cart.svg';

function CartButton() {
  return (
    <button
      type="button"
      className="bg-green-light hover:bg-green-dark focus-visible:ring-green-dark flex h-12.5 items-center justify-center gap-3 rounded-lg text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <img src={cartIcon} alt="" aria-hidden="true" className="h-4 w-4" />
      <span className="text-sm/1.1 font-bold">Add to Cart</span>
    </button>
  );
}

export default CartButton;
