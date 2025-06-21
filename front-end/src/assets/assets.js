import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.png'
import menu_icon from './menu_icon.png'
import cross_icon from './cross_icon.png'
import chats_icon from './cross_icon.png'
import verified_icon from './verified_icon.png'
import arrow_icon from './arrow_icon.png'
import info_icon from './info_icon.png'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from "./doc1.png"
import doc2 from "./doc2.png"
import doc3 from "./doc3.png"
import doc4 from "./doc1.png"
import doc5 from "./doc5.png"
import doc6 from "./doc6.png"
import doc7 from "./doc6.png"
import doc8 from "./doc2.png"
import doc9 from "./doc1.png"
import doc10 from "./doc5.png"
import doc11 from "./doc11.png"
import doc12 from "./doc12.png"
import doc13 from "./doc13.png"
import doc14 from "./doc14.png"
import doc15 from "./doc15.png"
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
    
]

export const doctors = [
   {
    _id: 'doc1',
    name: 'Diep Dai Minh 1',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc2',
    name: 'Diep Dai Minh 2',
    image: doc2,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc3',
    name: 'Diep Dai Minh 3',
    image: doc3,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc4',
    name: 'Diep Dai Minh 4',
    image: doc4,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc5',
    name: 'Diep Dai Minh 5',
    image: doc5,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc6',
    name: 'Diep Dai Minh 6',
    image: doc6,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc7',
    name: 'Diep Dai Minh 7',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc8',
    name: 'Diep Dai Minh 8',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc9',
    name: 'Diep Dai Minh 9',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc10',
    name: 'Diep Dai Minh 10',
    image: doc10,
    speciality: 'Perdiatricians',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc11',
    name: 'Diep Dai Minh 10',
    image: doc11,
    speciality: 'Perdiatricians',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc12',
    name: 'Diep Dai Minh 10',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc13',
    name: 'Diep Dai Minh 10',
    image: doc13,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc14',
    name: 'Diep Dai Minh 10',
    image: doc14,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
   {
    _id: 'doc15',
    name: 'Diep Dai Minh 10',
    image: doc15,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Bác sĩ là người hành nghề y, có chuyên môn trong chẩn đoán, điều trị và phòng ngừa bệnh tật. Họ đóng vai trò quan trọng trong việc chăm sóc sức khỏe, mang lại cuộc sống tốt hơn cho bệnh nhân.',
    fees: 50,
    address: {
        line1: '17 th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
    }
   },
]