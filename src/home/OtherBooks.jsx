import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

function OtherBooks() {
    const [books, setBoooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBoooks(data.slice(3,8)))
    })
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks