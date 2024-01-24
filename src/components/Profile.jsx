import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import profileimg from '../assets/profilepic.png'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='border rounded p-2 mb-5'>
        <div className="d-flex justify-content-between">
            <h2>Profile</h2>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'><i class="fa-solid fa-caret-down"></i></button>
        </div>
        <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
          <form>
          <label>
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='img-fluid rounded' src={profileimg} alt="Upload profile photo" />
          </label>
           <div className='mb-3'> 
           <input type="text" className="rounded w-75 p-1" placeholder='Enter your GitHub Link Here' /></div>
           <div className='mb-2'> 
           <input type="text" className="rounded w-75 p-1" placeholder='Enter your LinkedIn Link Here' /></div>
           <div className="mb-3 d-grid w-75 mx-auto">
            <button className='btn btn-warning'>Update</button>
           </div>
          </form>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile