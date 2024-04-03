import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../Assets/awardbooks.png"

function PromoBanner() {
  return (
    <div style={{backgroundColor:'aquamarine'}} className='p-5 mt-5'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{width:'50%'}}>
                <h1 style={{fontSize:'30px',width:'70%'}} className='mb-4 fw-bold'>2023 National Book Awards for Fiction Shortlist</h1>
                <Link to="/shop"><button  className='btn btn-primary text-light p-2 rounded '>Get Promo</button></Link>
            </div>

            <div>
                <img style={{width:'300px',marginRight:'150px'}} src={bookPic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner