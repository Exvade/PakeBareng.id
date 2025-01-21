import { useEffect } from 'react';
import discordIcon from '../assets/discord-icon.png';

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

      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl">
        <div className="flex items-center justify-between  px-6 py-4 border-b">
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

        <div className="flex flex-row items-stretch justify-center px-6 py-3 space-x-4">
          {product?.packages.map((pkg, index) => (
            <div key={index} className="flex flex-col border w-full border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-3">{pkg.package_name}</h3>

              <div className="flex-grow space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Harga Paket:</span>
                  <span className="text-gray-900 font-medium">Rp {pkg.price_package?.toLocaleString('id-ID')}</span>
                </div>

                {pkg.max_member > 1 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Jumlah anggota per grup:</span>
                      <span className="text-gray-900 font-medium">{pkg.max_member} member</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Biaya patungan:</span>
                      <span className="text-gray-900 font-medium">
                        Rp {pkg.price_package?.toLocaleString()} ÷ {pkg.max_member} = Rp {pkg.price_package && pkg.max_member && Math.round((pkg.price_member = pkg.price_package / pkg.max_member)).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Biaya Admin:</span>
                  <span className="text-gray-900 font-medium">Rp {pkg.admin?.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <hr className="mb-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Biaya:</span>
                  <span className="text-gray-900 font-medium">Rp {Math.round((pkg.amount = pkg.price_package / pkg.max_member + pkg.admin)).toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6">
          <button className="w-full group relative flex flex-row justify-center items-center px-6 py-3 rounded-2xl text-xs sm:text-sm text-white bg-[#324a54] hover:bg-[#233941] cursor-pointer duration-300 overflow-hidden ">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 nimate-gradient-xa"></div>
            </div>

            <img src={discordIcon} className="h-5 sm:h-6 pr-2 relative transition-transform duration-300 group-hover:scale-110" alt="Icon Discord" />
            <span className="relative z-10 transition-all duration-300 group-hover:translate-y-0 ">Bergabung ke Grup</span>
          </button>
        </div>
      </div>
    </div>
  );
}
