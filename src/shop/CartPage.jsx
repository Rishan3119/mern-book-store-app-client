import React, { useContext, useState } from 'react'
import { Table } from 'react-bootstrap'
import UseCart from '../hooks/UseCart'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
function CartPage({book}) {
  const [cartItems,setCartItems] = useState([]);
  const [cart,refetch] = UseCart()

  //calculate price
  const calculatePrice = (book) =>{
    return 10 * book.quantity
  }
  

  //handle delete
  const handleDeleteItem = (book)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:5000/carts/${book._id}`, {
        method:"DELETE"
       }).then(res=> res.json()).then(data =>{
        if(data.deletedCount > 0){
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
       })
      }
    });
  }

  //handle inc
  const handleIncrease = (book)=>{
    // console.log(book._id);
    fetch(`http://localhost:5000/carts/${book._id}`, {
      method:"PUT",
      headers:{
        "content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({quantity: book.quantity +1})
    })
    .then((res)=> res.json())
    .then((data)=>{

      const updatedCart =  cartItems.map((cartItem)=>{
        if(cartItem.id === book.id){
          return{
            ...cartItem,
            quantity: cartItem.quantity +1
          }
        }

        return cartItem;
      })
      refetch()
      setCartItems(updatedCart)
    });
    refetch();

  }
  // handle dec
  const handleDecrement = (book) =>{
    if(book.quantity > 1){
      fetch(`http://localhost:5000/carts/${book._id}`, {
      method:"PUT",
      headers:{
        "content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({quantity: book.quantity - 1})
    })
    .then((res)=> res.json())
    .then((data)=>{

      const updatedCart =  cartItems.map((cartItem)=>{
        if(cartItem.id === book.id){
          return{
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        }

        return cartItem;
      })
      refetch()
      setCartItems(updatedCart)
    });
    refetch();
    }else{
      alert("Item can't be zero")
    }
  }

  //Calculate total price
  const cartSubTotal = cart.reduce((total,book)=>{
    return total + calculatePrice(book);
  },0);

  const orderTotal = cartSubTotal;


  return (
    <div className='container p-5'>
        {/* banner */}
       <div className='py-28 text center d-flex justify-content-center'> 
        <h1 style={{fontSize:'50px',fontWeight:'bold'}}>Items Added To The <span className='text-primary'>Cart</span></h1>
        </div>

        {/* Tables data */}
        <div>
        <Table className='shadow' striped   hover>
      <thead className='rounded bg-info '>
        <tr>
          <th>#</th>
          <th>BOOK</th>
          <th>PRICE</th>
          <th>Quantity</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((book,index)=>(
            <tr key={index}>
          <td>{index + 1}</td>
          <td>Yellowface</td>
          <td>${calculatePrice(book)}</td>
          <td>
            <button className='btn btn-light shadow' onClick={()=>handleDecrement(book)}>-</button>
            <input 
            type="number" 
            value={book.quantity} 
            onChange={()=>console.log(book.quantity)}
            className='overflow-hidden w-5 mx-2 appearence-none text-center rounded' />
            <button onClick={()=>handleIncrease(book)} className='btn btn-light shadow'>+</button>
          </td>
          <td>
            <button onClick={()=>handleDeleteItem(book)}><i className="fa-solid fa-trash text-danger fa-xl text-center"></i></button>
          </td>
        </tr>
          ))
        }
      </tbody>
        </Table>
        </div>

        {/* customer details */}
        <div className='my-12 text-end p-2 me-4'>
            <h3 className='font-medium mt-2'>Shoppin Details</h3>
            <p className='mt-2'>Total Items: {cart.length} </p>
            <p className='mt-2'>Total Price: ${orderTotal.toFixed(2)} </p>
            <Link to='/process-checkout'><button className='btn btn-info text-light mt-2 text-center'>Proceed Checkout</button></Link>
        </div>
    </div>
  )
}

export default CartPage