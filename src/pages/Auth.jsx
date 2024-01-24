import React from 'react'
import { Link } from 'react-router-dom';
import authImg from '../assets/auth.png'
import Form from 'react-bootstrap/Form';


function Auth({insideRegister}) {
  console.log(insideRegister);
  return (
    <div style={{width:'100%'}} className='d-flex justify-content-center align-items-center mb-3'>
        <div className="container w-75">
          <Link to={'/'} style={{textDecoration:'none'}}><i className="fa-solid fa-arrow-left"></i> Back To Home</Link>
          <div className="card shadow p-5 bg-success">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={authImg} alt="Authentication" className='img-fluid' />
              </div>
              <div className="col-lg-6">
                <h1 className="fw-bolder text-light mt-2">
                <i className='fa-solid fa-hands-holding-circle fa-1x me-3'></i>Project Fair</h1>
                <h5 className='fw-bolder text-light mt-2'>Sign {insideRegister?'up' :'In'} to your Account</h5>
                <Form>
                  {
                    insideRegister&&
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPswd">
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
{
  insideRegister?
  <div>
    <button className='btn btn-light mb-2'>Register</button>
    <p>Already have Account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
  </div>:
  <div>
  <button className='btn btn-light mb-2'>Login</button>
  <p>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
</div>
}
    </Form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth