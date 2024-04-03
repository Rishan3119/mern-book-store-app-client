import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleBook() {
    const { _id, bookTitle,imageURL} = useLoaderData();
  return (
    <div  className='mt-5 p-4'>
        <img className='mt-5' width={'250px'} height={'300px'} src={imageURL} alt="" />
        <h2 className='mt-2 fw-bold ms-2 text-3xl'>{bookTitle}</h2>
    </div>
  )
}

export default SingleBook