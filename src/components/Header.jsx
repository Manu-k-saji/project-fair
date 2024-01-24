import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({insideDashBoard}) {
  return (   
         <Navbar style={{ backgroundColor: '#90ee90',width:'100%',position:'fixed',top:'0px',zIndex:5}} className="">
        <Container>
          <Navbar.Brand >
           <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>
           <i class="fa-solid fa-hands-holding-circle fa-1x me-2"style={{color:'white'}}></i>
          <b className=' text-white ' style={{fontSize:'30px'}}>Project Fair</b> </Link>
          </Navbar.Brand>
          {
            insideDashBoard&&
            <div className="ms-auto">
                <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i class="fa-solid fa-gear me-2"></i>Logout</button>
            </div>
          }
        </Container>
      </Navbar>
  
  )
}

export default Header