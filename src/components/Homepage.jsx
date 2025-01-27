import sectionImage from '../assets/flat-Illustration.webp'
import light from '../assets/light.png'
import oval from '../assets/oval.png'


export default function Homepage() {
  return (
    <section className="relative overflow-hidden bg-dark pt-[60px]">
      <img src={light} alt="" className='absolute w-full bottom-[50px] md:h-[700px] md:bottom-[300px]' />
      <div className="container relative flex flex-col items-center justify-center px-4 pt-20 pb-32 mx-auto">
        <h1 className="max-w-[840px] font-bold text-center text-white text-[20px] md:text-[54px]">Nikmatin Layanan Premium Bersama, Hemat Biaya, Tanpa Berduka</h1>
        <div className="w-full max-w-4xl mt-4 md:mt-8">
          <img
            src={sectionImage}
            alt="Hero Illustration"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <img src={oval} alt="" className='relative z-10 w-full -mt-4 md:-mt-12' />
      </div>
    </section>
  )
}

