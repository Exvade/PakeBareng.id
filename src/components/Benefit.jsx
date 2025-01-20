import community from '../assets/community.webp'
import salary from '../assets/salary.webp'
import shield from '../assets/shield.webp'
import thumbsup from '../assets/thumbsup.webp'

const benefitCards = [
  {
    title: "Hemat Biaya",
    description:
      "Kamu bisa berbagi biaya langganan dengan member lain, mendapatkan akses ke layanan premium dengan harga terjangkau, serta menikmati sistem pembayaran yang fleksibel dan transparan.",
    icon: salary,
    mainColor: "#47B871",
    shadowColor: "#368F57",
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Kami menyediakan sistem pembayaran yang aman, perlindungan data pribadi, serta mematuhi aktivitas pengguna untuk memastikan pengalaman yang nyaman. Selain itu, kami juga menerapkan garansi pengembalian dana jika terjadi masalah.",
    icon: shield,
    mainColor: "#EA7F37",
    shadowColor: "#B35E25",
  },
  {
    title: "Komunitas Terpercaya",
    description:
      "Kami menerapkan verifikasi member secara ketat. Dengan moderator aktif 24/7 dan kebijakan anti-penyalahgunaan yang ketat, kami memastikan lingkungan yang aman dan nyaman bagi semua pengguna.",
    icon: community,
    mainColor: "#329AE0",
    shadowColor: "#2177B1",
  },
  {
    title: "Kemudahan Pengguna",
    description:
      "Kami menawarkan proses pendaftaran sederhana dengan interface Discord yang familiar, dilengkapi panduan penggunaan serta dukungan customer service yang responsif untuk memastikan pengalaman yang lancar bagi setiap pengguna.",
    icon: thumbsup,
    mainColor: "#662E9F",
    shadowColor: "#56238A",
  },
]

function BenefitCard({ title, description, icon, mainColor, shadowColor }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl" style={{ backgroundColor: shadowColor }} />
      <div className="relative h-full p-6 rounded-2xl" style={{ backgroundColor: mainColor }}>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[30%]">
            <img src={icon} className="w-full" />
          </div>
          <h3 className="text-xl font-semibold text-center text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-center text-white/90">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[#1a1d21] py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-center text-white md:text-3xl">Kenapa harus pakebareng.id?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefitCards.map((card, index) => (
            <BenefitCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

