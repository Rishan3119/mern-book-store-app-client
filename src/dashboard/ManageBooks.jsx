import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
function ManageBooks() {
  const [allBooks,setAllBooks] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])
  //delete item
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted Succesfully!")
      // setAllBooks(data);
    })
  }
  return (
    <div className='px-4 my-12  ms-4'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your  book</h2>

            {/* table */}
            <Table style={{width:'1180px'}} className='shadow' striped   hover>
      <thead className='bg-info' >
        <tr>
          <th>NO.</th>
          <th>BOOK NAME</th>
          <th>AUTHOR NAME</th>
          <th>CATEGORY</th>
          <th>PRICES</th>
          <th >EDIT OR MANAGE</th>
        </tr>
      </thead>
      {
        allBooks.map((book, index) =><tbody className='divide-y' key={book._id}>
             <tr>
          <td>{index+1}</td>
          <td>{book.bookTitle}</td>
          <td>{book.authorName}</td>
          <td>{book.category}</td>
          <td>$10.00</td> 
          <td rowSpan={4}><Link className='bg-info rounded text-light p-2 ms-2 me-2' to={`/admin/dashboard/edit-books/${book._id}`}>Edit</Link>
          <button onClick={()=> handleDelete(book._id)} className='btn btn-danger rounded ms-3'>Delete</button>
          </td>
        </tr>
        </tbody> )
      }
     
    </Table>

    </div>
  )
}

export default ManageBooks