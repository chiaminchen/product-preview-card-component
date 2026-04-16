import productMobileImage from '../assets/image-product-mobile.jpg';
import productDesktopImage from '../assets/image-product-desktop.jpg';

function ProductImage() {
  return (
    <>
      <picture>
        <source media="(min-width: 768px)" srcSet={productDesktopImage} />
        <img
          src={productMobileImage}
          alt="A bottle of Gabrielle Chanel Paris perfume on a light background with green leaves"
          className="block w-full h-full object-cover"
        />
      </picture>
    </>
  );
}

export default ProductImage;
