import React, { useState } from 'react'

function UploadBook() {
 const bookCategories = [
  "Fiction","Non-Fiction","Mistery","Programming","Science Fiction","Fantasy","Horror","Bibliography","Autobiography","History","Self-help","Memooir","Buisness","Children Books","Travel","Religion","Art and Design"
 ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
     console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleBookSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    console.log(bookObj);

    //send data to db
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      // console.log(data)
      alert("Book Uploaded succesfully!!!")
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12  ms-4'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>

     <form onSubmit={handleBookSubmit}>
      {/* first row */}
      <div className="d-flex">
      <div>
        <label htmlFor="bookTitle" value="bookTitle" className='fw-bold'>Book Title</label>
        <input style={{width:'500px'}} type="text" id='bookTitle' name='bookTitle' placeholder='Book Name' className='mt-2 bg-light form-control border border-info' required  />
      </div>
      <div className='ms-5'>
        <label htmlFor="authorName" value="authorName" className='fw-bold'>Author Name</label>
        <input style={{width:'500px'}} type="text" id='authorName' name='authorName' placeholder='Author Name' className='mt-2 bg-light form-control border border-info' required  />
      </div>

      </div>

      {/* second row */}
      <div className="d-flex mt-4">
      <div>
        <label htmlFor="imageURL" value="Book Image URL" className='fw-bold'>Book Image URL</label>
        <input style={{width:'500px'}} type="text" id='imageURL' name='imageURL' placeholder='Book Image URL' className='mt-2 bg-light form-control border border-info' required  />
      </div>
      {/* category */}
      <div className='ms-5 d-flex flex-column'>
      <label htmlFor="inputState" value="Book Category" className='fw-bold'>Book Category</label>
      <select style={{width:'500px',height:'35px'}} id='inputState' name='categoryName' className=' mt-2 bg-light border border-info  rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option)=> <option  key={option} value={option}>{option}</option> )
        }
      </select>
      
      </div>

     

      </div>

      {/* book desc */}
      <div className='mt-4 d-flex flex-column'>
        <label htmlFor="bookDescription" value="bookDescription" className='fw-bold mb-2'>Book Description</label>
        <textarea name="bookDescription" id="bookDescription" cols="50" rows="4" className='p-2 bg-light border border-info rounded' placeholder='write your book description...' required></textarea>
      </div>

      {/* book pdf */}
      <div className='mt-3'>
        <label htmlFor="bookPDFURL" value="bookPDFURL" className='fw-bold'>Book PDF URL</label>
        <input style={{width:'100%'}} type="text" id='bookPDFURL' name='bookPDFURL' placeholder='Book PDF URL' className='mt-2 bg-light form-control border border-info' required  />
      </div>
        
      <button type='submit' className='w-100 btn mt-4  fw-bold bg-success text-light '>Upload Book</button>
      
     </form>

    </div>
  )
}

export default UploadBook