import aboutusImg from '/aboutus.png';

export default function FAQ() {
  return (
    <section id="faq" className="relative z-40 w-full px-4 py-12 -mt-48 md:px-6 lg:-mt-96">
      <div className="flex flex-col items-center justify-center max-w-3xl gap-5 mx-auto md:flex-row md:gap-14">
        <div className="block w-[45%] md:w-[25%]">
          <img src={aboutusImg} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-[70%]">
          <p className="mb-4 text-base leading-7 text-justify text-gray-400 md:mb-6 md:text-left">
            Pakebareng adalah platform komunitas berbasis Discord yang memungkinkan Anda berbagi biaya langganan akun premium dengan pengguna lain secara aman dan terpercaya. Kami menghubungkan orang-orang yang ingin menghemat biaya
            langganan layanan digital premium melalui sistem patungan yang terorganisir dan transparan.
          </p>
        </div>
      </div>
    </section>
  );
}
