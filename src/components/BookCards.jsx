import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './BookCard.css'

function BookCards({headline,books}) {
   
  return (
    <div style={{width:'100%'}}>
        <h1 className='text-5xl text-center fw-bold text-dark my-5'>{headline}</h1>
        {/* cards */}
        <Swiper
        slidesPerView={1}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{width:'100'}}
      >
            {
                books.map(book => <SwiperSlide key={book._id}>
                    <Link style={{textDecoration:'none',color:'black'}} to={`/shop`}>
                       <div className='parent mt-4  ms-4'> 
                        <img width={'250px'} height={'300px'} src={book.imageURL} alt="" />
                        <div className='CartShop'>
                        <i className="fa-solid fa-cart-shopping rounded  p-2 text-light"></i>
                        </div>
                        </div>
                        <div >
                            <div className='ms-4 mt-2'>
                                <h1 className='fw-bold'>{book.bookTitle}</h1>
                            </div>
                            <div  className='ms-4'>
                                <p className='mt-1'>{book.authorName}</p>
                                <p className='mt-1 fw-bold'>$10.0</p>
                            </div>
                        </div>
                        
                    </Link>
  
                </SwiperSlide>)
            }
        </Swiper>

        

    </div>
  )
}

export default BookCards