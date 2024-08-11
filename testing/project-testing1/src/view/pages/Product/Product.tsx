// ProductGrid.tsx

import React from 'react';

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  oldPrice: number;
}

const ProductGrid: React.FC = () => {
  // Sample data for products
  const products: ProductProps[] = [
    {
      imageUrl: 'imges/prodact/Amla-Powder.jpg',
      productName: 'Product 1',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Bale-Fruit-Powder.jpg',
      productName: 'Product 2',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Baloon-Vine-Powder.jpg',
      productName: 'Product 3',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Ginger-Powder.jpg',
      productName: 'Product 4',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Iramusu-Powder.jpg',
      productName: 'Product 5',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Kothalahimbutu-Powder.jpg',
      productName: 'Product 6',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Moringa-Powder.jpg',
      productName: 'Product 7',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Polpala-Powder.jpg',
      productName: 'Product 8',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Rasakinda-Powder.jpg',
      productName: 'Product 9',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/Tamarind-Powder.jpg',
      productName: 'Product 10',
      price: 250,
      oldPrice: 100,
    },
  ];


  const products1: ProductProps[] = [
    {
      imageUrl: 'imges/prodact/05-GreenTeawithLemon_A.webp',
      productName: 'Product 11',
      price: 550,
      oldPrice: 250,
    },
    {
      imageUrl: 'imges/prodact/07-GreenTeawithPassionFruit_Acopy.webp',
      productName: 'Product 12',
      price: 550,
      oldPrice: 250,
    },
    {
      imageUrl: 'imges/prodact/Mandarin.webp',
      productName: 'Product 13',
      price: 550,
      oldPrice: 250,
    },
    {
      imageUrl: 'imges/prodact/Cinnamon.webp',
      productName: 'Product 14',
      price: 550,
      oldPrice: 250,
    },
    {
      imageUrl: 'imges/prodact/dsc9056.webp',
      productName: 'Product 15',
      price: 550,
      oldPrice: 250,
    },
    
  
  ];

  const products2: ProductProps[] = [
    {
      imageUrl: 'imges/prodact/a0b8ac206ed1cc4e4bccc01a76c51a38.jpg',
      productName: 'Product 16',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/LS5000C3FD-01-E_1.webp',
      productName: 'Product 17',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/spices-in-sri-lanka-chilli-powder-new-version.jpg',
      productName: 'Product 18',
      price: 150,
      oldPrice: 70,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1559712605.jpg',
      productName: 'Product 19',
      price: 400,
      oldPrice: 180,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1559712664.jpg',
      productName: 'Product 20',
      price: 200,
      oldPrice: 70,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1559712980.jpg',
      productName: 'Product 21',
      price: 450,
      oldPrice: 200,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1559713109.jpg',
      productName: 'Product 22',
      price: 200,
      oldPrice: 80,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1559713338.jpg',
      productName: 'Product 23',
      price: 250,
      oldPrice: 100,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1569217619-300x203.jpg',
      productName: 'Product 24',
      price: 400,
      oldPrice: 200,
    },
    {
      imageUrl: 'imges/prodact/wijaya_product_1569218022.jpg',
      productName: 'Product 25',
      price: 450,
      oldPrice: 250,
    },
    
  
  ];

  return (
    <section>
      <section>
        <h1 className="text-5xl font-bold text-black truncate block capitalize">Powder</h1>
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
      {products.map((product, index) => (
        <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#sale">
            <img src={product.imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{product.productName}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">Rs{product.price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">Rs{product.oldPrice}</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
     </section>
    </section>
    <section>
        <h1 className="text-5xl font-bold text-black truncate block capitalize">Tea Bag</h1>
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
      {products1.map((product1, index) => (
        <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#sale">
            <img src={product1.imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{product1.productName}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">Rs{product1.price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">Rs{product1.oldPrice}</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
     </section>
    </section>
    <section>
        <h1 className="text-5xl font-bold text-black truncate block capitalize">spices</h1>
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
      {products2.map((product2, index) => (
        <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="/sale">
            <img src={product2.imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{product2.productName}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">Rs{product2.price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">Rs{product2.oldPrice}</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
     </section>
    </section>
  

    </section>
  );
};

export default ProductGrid;
