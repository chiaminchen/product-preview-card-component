import cartIcon from '../assets/icon-cart.svg';

function CartButton() {
  return (
    <a
      href="#"
      className="bg-green-light hover:bg-green-dark text-white rounded-lg flex justify-center items-center gap-3 h-12.5 transition-colors duration-300"
    >
      <img src={cartIcon} className="w-4 h-4" />
      <span className="font-bold text-sm/1.1">Add to Cart</span>
    </a>
  );
}

export default CartButton;
