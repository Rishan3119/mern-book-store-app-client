import React from 'react'
import favImg from '../Assets/favoritebook.jpg'
import { Link } from 'react-router-dom'
function FavBook() {
  return (
    <div className='p-4 d-flex align-items-center justify-content-center mt-5 ms-3'>
        <div className="w-100">
            <img style={{width:'550px',height:'500px'}} src={favImg} alt="" className='rounded' />
        </div>

        <div style={{marginLeft:'150px'}}>
            <h1 style={{fontSize:'50px'}} className='fw-bold  mt-4 mb-3'>Find your Favorite <span className='text-primary mt-2 d-flex flex-wrap'>Book Here!</span></h1>
            <p style={{width:'50%'}} className='mb-3 d-flex flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur sint consectetur fugiat repellendus possimus assumenda quo veritatis dolorum ipsa quas tempore voluptatum ratione minima iusto, in vel? Odit, illo.</p>
            {/* stats */}
            <div style={{display:'flex',justifyContent:'space-between',width:'60%'}}>
                <div>
                    <h3 className='fw-bold'>800+</h3>
                    <p className='mt-2'>Book Listing</p>
                </div>
                <div>
                    <h3 className='fw-bold'>550+</h3>
                    <p className='mt-2'>Register Users</p>
                </div>
                <div>
                    <h3 className='fw-bold'>1200+</h3>
                    <p className='mt-2'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop"><button className='btn btn-primary text-light p-2 rounded mt-4'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook