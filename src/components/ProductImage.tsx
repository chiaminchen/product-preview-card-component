import productMobileImage from '../assets/image-product-mobile.jpg';
import productDesktopImage from '../assets/image-product-desktop.jpg';

function ProductImage() {
  return (
    <figure>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={productDesktopImage}
          width={600}
          height={900}
        />
        <img
          src={productMobileImage}
          alt="A bottle of Gabrielle Chanel Paris perfume on a light background with green leaves"
          className="block h-full w-full object-cover"
          width={700}
          height={684}
        />
      </picture>
    </figure>
  );
}

export default ProductImage;
