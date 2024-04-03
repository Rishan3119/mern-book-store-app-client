import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import userImg from '../Assets/profile.jpg'
import { AuthContext } from '../../context/AuthProvider';

function SideBar() {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <Sidebar  className='bg-light'>
        <div style={{marginBottom:'40px'}} className='d-flex gap-3 ms-2'>
            <img style={{width:'30px',borderRadius:'100%'}} src={user?.photoURL} alt="" />
            <p className='fw-bold '>{user?.displayName || "Demo Users"}</p>
        </div>
      <Sidebar.Items  style={{marginTop:'-50px'}} >
        <Sidebar.ItemGroup className='mb-4'  >
          <Sidebar.Item href="/admin/dashboard" style={{marginRight:'15px'}} >
          <i className="fa-solid fa-chart-pie me-2"></i>  Dashboard
          </Sidebar.Item >
          <Sidebar.Item href="/admin/dashboard/upload" >
          <i className="fa-solid fa-cloud-arrow-up  me-2"></i> Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" style={{marginRight:'-10px'}} >
          <i className="fa-solid fa-inbox me-2"></i> Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/shop" style={{marginRight:'55px'}}>
          <i class="fa-solid fa-bag-shopping me-2"></i> Shop
          </Sidebar.Item>
          <Sidebar.Item href="/login" style={{marginRight:'50px'}}>
          <i className="fa-solid fa-arrow-right me-2"></i> Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout"style={{marginRight:'40px'}} >
          <i className="fa-solid fa-table me-2"></i> Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <hr />
        <Sidebar.ItemGroup  >
          <Sidebar.Item href="#"  style={{marginTop:'-25px'}} >
          <i class="fa-solid fa-chart-pie me-2"></i>Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" >
          <i class="fa-solid fa-bars fa-rotate-90 me-2"></i>Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" style={{marginRight:'70px'}} >
          <i class="fa-solid fa-circle-info me-2"></i> Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar