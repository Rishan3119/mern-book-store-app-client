import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{color:'lightgray'}} className='d-flex flex-column p-4 mt-4  justify-content-center bg-dark align-items-center '>
    <div className="footer-div d-flex p-4 justify-content-evenly w-100">
    <div className="website" id='about' style={{width:'400px'}}>
      <h4 className="mb-3"><Link to={'/'} style={{textDecoration:'none', fontWeight:'bold',fontSize:'30px',color:'blue'}}><i className="fa-solid fa-blog me-2"></i>Books</Link></h4>
      <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
      <h6>Code licensed Luminar, docs CC BY 3.0.</h6>
        <p>Currently v1.0.0</p>
    </div>
    <div className=" d-flex flex-column">
        <h4 className='mb-4' >COMPANY</h4>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} className='mb-2'>About</Link>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} className='mb-2' >Careers</Link>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} className='mb-2' >Brand Center</Link>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} >Blog</Link>

        
      </div>
      <div className=" d-flex flex-column">
        <h4 className='mb-4' >LEGAL</h4>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} className=' mb-2'>Privacy Policy</Link>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} >Licensing</Link>
        <Link style={{ textDecoration:"none", color:"lightgray",fontWeight:'bold'}} className=' mt-2'>Terms & Conditions</Link>
        
      </div>
      

      <div className="Contact">
        <h4>Contact Us</h4>
        <div className="sub d-flex mt-3">
          <input type="text" className='form-control' placeholder='Enter your Email Id' />
          <button className='btn btn-warning ms-3'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="Icons fs-4 d-flex justify-content-between mt-3">
        <Link to={'https://twitter.com/?lang=en-in'} style={{ textDecoration:"none", color:"blue"}}> <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to={'https://in.linkedin.com/'} style={{ textDecoration:"none", color:"blue"}}><i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link to={'https://www.instagram.com/'} style={{ textDecoration:"none", color:"blue"}}><i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to={'https://github.com/'} style={{ textDecoration:"none", color:"blue"}}><i className="fa-brands fa-github"></i>
        </Link>
        <Link to={'https://www.facebook.com/'} style={{ textDecoration:"none", color:"blue"}}><i className="fa-brands fa-facebook"></i>
        </Link>
        </div>
      </div>
    </div>
    <p className='mt-4'>Copyright © 2023 Book Store. Built with React.</p>
  </div>
  )
}

export default Footer