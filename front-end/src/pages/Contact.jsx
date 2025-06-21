import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>LIÊN LẠC VỚI <span className='text-gray-700 font-semibold'>CHÚNG TÔI</span></p>
      </div>


      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>CƠ SỞ CỦA CHÚNG TÔI</p>
          <p className='text-gray-500'>234/55, Lê Đức Thọ <br/> Phường 6, Quận Gò Vấp, Thành Phố Hồ Chí Minh</p>
          <p className='text-gray-500'>Số điện thoại: 0918305220<br/> Email: diepdaiminh09112003@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Career at MinhDiep</p>
          <p className='text-gray-500'>Learn more about our teams and job opening.</p>
        

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact