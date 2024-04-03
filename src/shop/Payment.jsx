import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js';
import UseCart from '../hooks/UseCart';
const stripePromise = loadStripe('pk_test_51OwfHYEdKyCN2uL09Je9bx3adcZGLEaYy2Fn8MQZFtWi4sRrriQImG5rOJMa5cjIsVhZHgvMJzGaAs8iRsp5Wvuy00ib66X7l4');
function Payment() {
    const [cart] = UseCart();
    console.log(cart)
    //calculate the price
    const cartTotal = cart.reduce((sum,book)=>sum + 10,0)
    // console.log(cartTotal)
    const totalPrice = parseFloat(cartTotal.toFixed(2))
  return (
    <div className='py-28 text center d-flex container'>
        <Elements stripe={stripePromise}>
      <CheckoutForm price={totalPrice} cart={cart} />
    </Elements>
    </div>
  )
}

export default Payment