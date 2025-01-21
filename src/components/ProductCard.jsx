import productData from '../data/product.js';

function ProductCard({ product }) {
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

  const isReady = product.status === 'true';

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden sm:my-4">
      <div className="w-full h-32 sm:h-40 md:h-48 bg-white rounded-t-3xl">
        <img src={product.banner} alt={product.service} className={`w-full h-full object-cover object-center rounded-t-3xl  ${!isReady ? 'grayscale' : ''}`} />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-b-3xl">
        <div className="mb-4 sm:mb-6">
          <h2 className={`text-lg sm:text-xl font-semibold ${isReady ? 'text-gray-900' : 'text-gray-400'}  `}>{product.service}</h2>
        </div>

        {product.packages.map((pkg, index) => (
          <div key={index} className="mb-3 sm:mb-4">
            <h3 className="text-xs sm:text-sm text-gray-400">
              {pkg.package_name} {pkg.package_name === 'Sharing Account' && pkg.max_member && ` (${pkg.max_member} member)`}
            </h3>
            <div className="flex items-center gap-2">
              <p className={`text-base sm:text-lg font-medium ${isReady ? 'text-gray-900' : 'text-gray-400'}`}>{pkg.price_member !== null ? `Rp ${calculateAmount(pkg).toLocaleString()}/member` : 'Rp -'}</p>
              <p className="text-base text-red-500 font-medium line-through">{pkg.package_name === 'Sharing Account' && pkg.max_member && `Rp ${calculateOriginalPrice(pkg).toLocaleString()}`} </p>
            </div>
          </div>
        ))}

        <button className={`w-full text-white py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base ${isReady ? 'bg-green hover:bg-green-500' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}>
          {isReady ? 'Lihat rincian biaya' : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className="w-full bg-dark py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-center text-white md:text-3xl">Layanan yang tersedia</h2>
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
