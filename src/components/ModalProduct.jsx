import { useEffect } from 'react';

export default function ModalProduct({ isOpen, onClose, product }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[360px] md:max-w-4xl bg-white rounded-3xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Rincian Biaya {product?.service}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full h-32 sm:h-30 md:h-[250px] pt-4 px-6">
          <img src={product?.banner} alt={product?.service} className="w-full h-full object-cover object-center rounded-2xl" />
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center px-4 md:px-6 py-2 pb-6 space-y-2 md:space-y-0 space-x-0 md:space-x-4">
          {product?.packages.map((pkg, index) => (
            <div key={index} className="flex flex-col border w-full border-gray-200 rounded-xl p-4 m">
              <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-3">{pkg.package_name}</h3>

              <div className="flex-grow space-y-2">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Harga Paket:</span>
                  <span className="text-gray-900 font-medium">Rp {pkg.price_package?.toLocaleString('id-ID')}</span>
                </div>

                {pkg.max_member > 1 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-500">Jumlah anggota per grup:</span>
                      <span className="text-gray-900 font-medium">{pkg.max_member} member</span>
                    </div>

                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-500">Biaya patungan:</span>
                      <span className="text-gray-900 font-medium">
                        Rp {pkg.price_package?.toLocaleString()} ÷ {pkg.max_member} = Rp {pkg.price_package && pkg.max_member && Math.round((pkg.price_member = pkg.price_package / pkg.max_member)).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Biaya Admin:</span>
                  <span className="text-gray-900 font-medium">Rp {pkg.admin?.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <hr className="mb-2" />
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Total Biaya:</span>
                  <span className="text-gray-900 font-medium">Rp {Math.round((pkg.amount = pkg.price_package / pkg.max_member + pkg.admin)).toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
