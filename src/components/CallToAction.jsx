import discordIcon from '../assets/discord-icon.png';

export default function CallToAction() {
  return (
    <div className="min-h-[300px] w-full bg-dark flex items-center justify-center p-4 ">
      <div className="max-w-6xl w-full bg-gradient-to-r from-[#070F15]/30 to-[#040A11]/30 backdrop-blur-sm rounded-3xl p-8 shadow-[14px_14px_0px_rgba(2,7,14,0.5)]">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#98EBA6] to-[#78D792] text-2xl md:text-4xl md:hover:px-2 hover:scale-102 hover:-rotate-1 transition duration-500">
              Yuk, Cari Teman untuk Patungan Akun Premium!
            </h2>
            <p className="text-center text-gray-300 text-sm md:text-lg max-w-4xl mx-auto transition-transform duration-500 hover:scale-102 ">
              Gabung bersama teman-teman dan nikmati akses akun premium dengan biaya lebih hemat. Cari teman patunganmu sekarang dan rasakan manfaat berbagi.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="group relative flex flex-row items-center px-12 md:px-32 py-3 rounded-2xl text-sm sm:text-base bg-[#324a54] hover:bg-[#233941] text-white cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-102 active:scale-97">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
              </div>

              <img src={discordIcon} className="relative h-5 sm:h-6 pr-2 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-3" alt="Icon Discord" />
              <span className="relative z-10 transition-all duration-300 group-hover:translate-y-0 ">Bergabung ke Grup</span>
            </button>
            ;
          </div>

          <p className="text-center text-gray-400 text-sm">Sudah ada 1000+ member yang bergabung di komunitas kami</p>
        </div>
      </div>
    </div>
  );
}
