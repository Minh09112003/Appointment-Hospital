import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*----------Left Section---------- */}
        <div>
            <img className="w-20 mb-5" src={assets.logo} alt=""/>
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Chào mừng bạn đến với Bệnh viện [Tên Bệnh Viện], nơi cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại. Chúng tôi cam kết mang đến sự chăm sóc tận tâm, chuyên nghiệp, giúp bệnh nhân có trải nghiệm điều trị tốt nhất.</p>
        </div>

        {/*----------Center Section---------- */}
        <div>
            <p className="text-xl font-medium mb-8 mt-6">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/*----------Right Section---------- */}
        <div>
            <p className="text-xl font-medium mb-8 mt-6">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>0918305220</li>
                <li>diepdaiminh09112003@gmail.com</li>
            </ul>
        </div>
      </div>

      {/*-------Copyright Text */}
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2025@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
