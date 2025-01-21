import { useState } from 'react';
import productData from '../data/product.js';
import ModalProduct from './ModalProduct.jsx';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isReady = product.status === 'true';

  const calculatePriceMember = (pkg) => {
    if (!pkg.price_package || !pkg.max_member) return 0;
    return Math.round(pkg.price_package / pkg.max_member);
  };

  const calculateAmount = (pkg) => {
    const priceMember = calculatePriceMember(pkg);
    return priceMember + (pkg.admin || 0);
  };

  const calculateOriginalPrice = (pkg) => {
    return Math.round(calculateAmount(pkg) * 1.2375);
  };

  const calculateDiscount = (pkg) => {
    const originalPrice = calculateOriginalPrice(pkg);
    const currentPrice = calculateAmount(pkg);
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const handleOpenModal = () => {
    if (isReady) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className={`h-full flex flex-col bg-white rounded-3xl ${isReady ? 'opacity-100 transition-transform duration-500 hover:scale-102 hover:shadow-[0_0_30px_1px_rgba(34,197,94,0.4)]' : 'opacity-20 cursor-not-allowed'}`}>
        <div className="w-full h-48 ">
          <img src={product.banner} alt={product.service} className={`w-full h-full object-cover object-center rounded-t-3xl  ${!isReady ? 'grayscale' : ''}`} />
        </div>

        <div className="flex-grow bg-white p-4 sm:p-6 rounded-b-3xl flex flex-col">
          <div className="mb-1 sm:mb-3">
            <h2 className={`text-lg sm:text-xl font-semibold ${isReady ? 'text-gray-900' : 'text-gray-400'}  `}>{product.service}</h2>
          </div>

          <div className="flex-grow">
            {product.packages.map((pkg, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <h3 className="text-xs sm:text-sm text-gray-400">
                  {pkg.package_name} {pkg.package_name === 'Sharing Account' && pkg.max_member && ` (${pkg.max_member} member)`}
                </h3>
                <div className="flex flex-col ">
                  <p className={`text-base sm:text-lg font-medium ${isReady ? 'text-gray-900' : 'text-gray-400'}`}>{pkg.price_member !== null ? `Rp ${calculateAmount(pkg).toLocaleString()}/member` : 'Rp -'}</p>
                  <div className="flex items-center space-x-2">
                    <p
                      className="text-base text-gray-300 font-medium"
                      style={{
                        textDecoration: 'line-through',
                        textDecorationThickness: '1px',
                      }}
                    >
                      {pkg.package_name === 'Sharing Account' && pkg.max_member && `Rp ${calculateOriginalPrice(pkg).toLocaleString()} `}
                    </p>
                    <p className="text-base font-medium text-red-500">{pkg.package_name === 'Sharing Account' && pkg.max_member && `${calculateDiscount(pkg)}%`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleOpenModal}
            className={`w-full text-white py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base mt-auto ${
              isReady ? 'bg-green hover:bg-[#368F57] transition-transform duration-500 hover:scale-99 active:scale-97' : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isReady ? 'Lihat rincian biaya' : 'Coming Soon'}
          </button>
        </div>
      </div>

      <ModalProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={product} />
    </>
  );
}

export default function ProductSection() {
  return (
    <section className="w-full bg-dark py-12 px-8 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-center text-white md:text-3xl">Layanan yang tersedia</h2>
        <div className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-3">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
