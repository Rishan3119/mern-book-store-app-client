import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, {  useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
function CheckoutForm({price,cart}) {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('')

    const handleClick = async ()=>{
      Swal.fire("Payment Succesfull!");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('success!')
            console.log('[PaymentMethod]', paymentMethod);
          }
         
    };    
  return (
    
    <div className='d-flex w-100 items-start gap-8'>
        
        {/* left side */}
        <div className='' >
            <h4 className='text-lg font-semibold mb-1'>Order Sumary</h4>
            <p className='mb-1'>Total Price : ${price}</p>
            <p>Number of Items : {cart.length}</p>
        </div>
        {/* right side */}
        <div style={{marginLeft:'300px'}} className='md:w-1/3 w-full space-y-5 card border-none shrink-0 max-w-sm shadow  p-3' >
            <h4 className='text-lg font-semibold'>Process Your Payment!</h4>
            <h5 className='text-bold' >Credit/Debit Card</h5>
            {/* stripe form */}
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Link to={'/'}><button disabled={!stripe} onClick={handleClick} className='btn btn-primary w-full mt-4 text-light font-bold'>Pay</button></Link>
            </form>
            {
                cardError ? <p className='text-danger italic text-xs'>{cardError}</p> : ""
            }
            
            {/* paypal */}
            <div className='mt-5 text-center'>
            <hr  style={{marginTop:'-30px'}}/>
            <button   className='btn btn-warning mt-4 text-light font-bold ' ><i className="fa-brands fa-xl fa-paypal me-2"></i>Pay with Paypal</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutForm 