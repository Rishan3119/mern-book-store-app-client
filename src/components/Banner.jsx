import React from 'react'
import './banner.css'
import { Carousel } from 'react-bootstrap'
function Banner() {
  return (
    <div className="banner d-flex w-100 mt-5 align-items-center px-24" style={{gap:'100px',marginTop:'50px'}}>
        <div className="both d-flex w-50  flex-column justify-content-space-between py-40 gap-12">
            <div className='left' >
               <div style={{widht:'55%'}}>
                  <h1  style={{fontSize:'50px',fontWeight:'bold'}}>Buy and sell your books <span className='text-primary'>for the best prices</span></h1>
                  <p style={{width:'60%'}} className='mt-4'>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
               </div>
                <div className='d-flex w-100 mt-4'>
                <input type="search" name='search' id='search' placeholder='Search a book' className='rounded border border-none p-2'/>
                <button className='btn btn-primary rounded text-light ms-2 fw-bold'>Search</button>
               </div>
            </div>
        </div>
        <div className='carousel mt-3'>
        <Carousel>
        <Carousel.Item>
          <img style={{height:'400px',width:'300px'}} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px',width:'300px'}} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px',width:'300px'}} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px',width:'300px'}} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px',width:'300px'}} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg" alt="pic" />
        </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Banner