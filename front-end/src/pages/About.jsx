import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          VỀ <span className="text-gray-700 font-medium">CHÚNG TÔI</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Chào mừng bạn đến với [Tên Website], nền tảng đặt lịch khám bệnh
            trực tuyến giúp bạn kết nối với các bệnh viện, phòng khám và bác sĩ
            hàng đầu một cách nhanh chóng, tiện lợi.
          </p>
          <p>
            Chúng tôi mong muốn mang đến một giải pháp y tế hiện đại, giúp mọi
            người dễ dàng tiếp cận dịch vụ chăm sóc sức khỏe chất lượng mà không
            mất thời gian chờ đợi.
          </p>
          <p className="text-gray-800">Chăm Sóc Sức Khỏe Chủ Động</p>
          <p>
            Với giao diện thân thiện, dễ sử dụng và đội ngũ hỗ trợ tận tâm hoạt
            động 24/7, chúng tôi cam kết mang lại sự thuận tiện và an toàn trong
            việc chăm sóc sức khỏe. Hãy để [Tên Website] đồng hành cùng bạn
            trong hành trình bảo vệ sức khỏe, giúp bạn tiết kiệm thời gian, công
            sức và có những trải nghiệm y tế tốt hơn.{" "}
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          TẠI SAO LẠI{" "}
          <span className="text-gray-700 font-semibold">CHỌN CHÚNG TÔI?</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20"> 
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>HIỆU QUẢ:</b>
          <p>Lịch hẹn được tối ưu hóa phù hợp với lối sống bận rộn của bạn.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>TIỆN LỢI:</b>
          <p>Tiếp cận mạng lưới chuyên gia y tế đáng tin cậy trong khu vực của bạn.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CÁ NHÂN HÓA: </b>
          <p>Gợi ý và nhắc nhở phù hợp để giúp bạn chủ động chăm sóc sức khỏe.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
