import graphic from '../assets/footer-graphic.webp'
import logo from '../assets/logo.webp'
import discord from './icons/Discord.svg'
import instagram from './icons/Instagram.svg'
import tiktok from './icons/Tiktok.svg'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center w-full px-4 py-6 bg-dark'>
      <img src={graphic} alt="" className='md:-mb-4 max-w-[900px]' />
      <div className='flex flex-col items-center justify-center gap-6'>
        <img src={logo} alt="Logo pakebareng.id" className='w-[60%] max-w-[271px]' />
        <div className='text-white'>
          <ul className='flex gap-2 text-[14px]'>
            <li><a href="">Beranda</a></li>
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Produk</a></li>
            <li><a href="">Testimoni</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-3'>
            <a href="https://discord.gg/WXTzdeaTNA" target='_blank' className='flex items-center justify-center w-8 h-8 bg-white rounded-full'><img src={discord} alt="" /></a>
            <a href="https://www.instagram.com/pakebareng.id/" target='_blank' className='flex items-center justify-center w-8 h-8 bg-white rounded-full'><img src={instagram} alt="" /></a>
            <a href="https://www.tiktok.com/@pakebareng.id" target='_blank' className='flex items-center justify-center w-8 h-8 bg-white rounded-full'><img src={tiktok} alt="" /></a>
          </ul>
        </div>
        <p className='w-[95%] max-w-[702px] text-white text-center text-xs'>Pakebareng adalah layanan untuk mengurangi beban biaya langganan premium pada platform tertentu. Temukan partner untuk menghemat pengeluaranmu!</p>
        <p className='text-[#717171] text-xs'>©2025 Pakebareng.id</p>
      </div>
    </div>
  )
}