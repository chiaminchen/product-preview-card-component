import productMobileImage from '../assets/image-product-mobile.jpg';
import productDesktopImage from '../assets/image-product-desktop.jpg';

function ProductImage() {
  return (
    <>
      <img
        src={productMobileImage}
        alt="Parfum mobile view"
        className="block w-full h-full object-cover md:hidden"
      />
      <img
        src={productDesktopImage}
        alt="Parfum desktop view"
        className="hidden w-full h-full object-cover md:block"
      />
    </>
  );
}

export default ProductImage;
