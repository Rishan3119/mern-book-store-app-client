import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

function Shop({book}) {
  const {bookTitle,_id,imageURL} = book||{};
  const [books,setBooks] = useState([]);
  const {user} = useContext(AuthContext);
  // console.log(user)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));

  },[])
 
  //add to cart button
  const handleAddToCart = (book)=>{
     if(user && user?.email){
      const cartItem = {_id,bookTitle,imageURL,quantity:1,email:user.email}
      fetch("http://localhost:5000/carts", {
        method:"POST",
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then((res)=> res.json())
      .then((data)=>{
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      console.log(cartItem);
     }else{
      Swal.fire({
        title: "Please login?",
        text: "Please create an account or login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SignUp Now!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/sign-up', {state:{from: location}})
        }
      });
     }
  }
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h1 className='text-center text-5xl mt-5 fw-bold'>All Books are here</h1>

      <div className=' grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>  <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.imageURL} className='h-96' />
          <Card.Body>
            <Card.Title>{book.bookTitle}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button onClick={()=>handleAddToCart(book)}  className='w-100 btn mt-3 fw-bold bg-primary text-light '>Add to cart</button>
          </Card.Body>
        </Card>)
        
        }
       
      </div>
 
    </div>
  )
}

export default Shop