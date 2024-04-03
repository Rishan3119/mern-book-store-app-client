import React, { useContext } from 'react'
import './header.css'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import CartPage from '../shop/CartPage'
import UseCart from '../hooks/UseCart'
function Header() {
  const {user} = useContext(AuthContext);
  const [cart,refetch] = UseCart()
  console.log(cart);
  // console.log(user)
  return (
           
             <>
                    <Navbar expand="lg" className="header">
                  <Container>
                    <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', fontWeight:'bold',fontSize:'30px',color:'blue' }}><i className="fa-solid  fa-blog me-3 ms-4"></i>Books</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className=' justify-content-center' id="basic-navbar-nav">
                      <Nav className="links">
                        <Nav.Link><Link style={{textDecoration:'none',color:'black',}} to={'/'}>HOME</Link></Nav.Link>
                       <a href="#about" style={{textDecoration:'none',color:'black'}} className='mt-2'>ABOUT</a>
                        <Nav.Link><Link style={{textDecoration:'none',color:'black'}} to={'/shop'}>SHOP</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration:'none',color:'black'}} to={'/admin/dashboard'}>SELL YOUR BOOKS</Link></Nav.Link>
                        
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                  <Nav.Link href='/cart-page' className='me-5' >
        <Badge style={{position:'absolute', top:'1px',marginTop:'4px'}} className='me-3 ms-3  rounded-circle' bg='dark'> {cart.length || 0} </Badge>
          <i className="fa-solid fa-cart-shopping text-green fa-xl"></i>    
        </Nav.Link>
                </Navbar>
                
             </>
  )
}

export default Header