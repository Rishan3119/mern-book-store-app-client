import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import propic from '../Assets/profile.jpg'


function Review() {
  return (
    <div className='p-4 mt-5'>
        <h1 style={{fontSize:'30px'}} className='text-center fw-bold' >Our Customers</h1>

        <div className='d-flex w-100 justify-content-center mt-5'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow border p-4 rounded'>
        <div className='mt-4'>
            <div style={{gap:'7px'}} className='d-flex mb-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </div>

            {/* text */}
            <div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ducimus reprehenderit accusamus dicta suscipit similique quas repellat, id fugit non corporis quisquam, quos mollitia neque officia. Nemo, amet tempora!</p>
            </div>
            <div>
                <img style={{width:'50px',borderRadius:'50px'}} src={propic} alt="" />
            </div>
            <h5 className='mt-2'>Mark Ping</h5>
            <p className='mt-1'>CEO, ABC company</p>
        </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow border p-4 rounded'>
        <div className='mt-4'>
            <div style={{gap:'7px'}} className='d-flex mb-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </div>

            {/* text */}
            <div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ducimus reprehenderit accusamus dicta suscipit similique quas repellat, id fugit non corporis quisquam, quos mollitia neque officia. Nemo, amet tempora!</p>
            </div>
            <div>
                <img style={{width:'60px',borderRadius:'80px'}} src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' alt="" />
            </div>
            <h5 className='mt-2'>Mark Ping</h5>
            <p className='mt-1'>CEO, ABC company</p>
        </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow border p-4 rounded'>
        <div className='mt-4'>
            <div style={{gap:'7px'}} className='d-flex mb-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </div>

            {/* text */}
            <div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ducimus reprehenderit accusamus dicta suscipit similique quas repellat, id fugit non corporis quisquam, quos mollitia neque officia. Nemo, amet tempora!</p>
            </div>
            <div>
                <img style={{width:'60px',borderRadius:'60px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGw2OGD5C1vspqKlOylJUNb8sVIx9n1VjhdFzZWDHJL3OkfDCG8dz8HkEEFve9qLuprlE&usqp=CAU' alt="" />
            </div>
            <h5 className='mt-2'>Lana Godrich</h5>
            <p className='mt-1'>CEO, ABC company</p>
        </div>
        </SwiperSlide>
        
        <SwiperSlide  className='shadow border p-4 rounded'>
        <div className='mt-4'>
            <div style={{gap:'7px'}} className='d-flex mb-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </div>

            {/* text */}
            <div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ducimus reprehenderit accusamus dicta suscipit similique quas repellat, id fugit non corporis quisquam, quos mollitia neque officia. Nemo, amet tempora!</p>
            </div>
            <div>
                <img style={{width:'50px',borderRadius:'50px'}} src='https://i.pinimg.com/564x/28/35/96/28359678bbe1e0376e3e178da99d5e9d.jpg' alt="" />
            </div>
            <h5 className='mt-2'>Pam Parker</h5>
            <p className='mt-1'>CEO, ABC company</p>
        </div>
        </SwiperSlide>
      </Swiper>
        
        </div>
    </div>
  )
}

export default Review