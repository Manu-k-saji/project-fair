import React from 'react'
import developerImg from '../assets/developer.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function Home() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
navigate('/project')
  }
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: '#90ee90' }} >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className='fw-bolder text-light mb-3' style={{ fontSize: '50px' }}>
                <i className='fa-solid fa-hands-holding-circle fa-1x'></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>one stop destination for all software development projects.Where user can add
                and manage their projects.As well as access all projects available in our websites...what
                are you waiting for!!!
              </p>
              <Link className='btn btn-warning mt-3' to={'/login'}>Start to Explore <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img src={developerImg} className='img-fluid mt-5 mb-5' alt="landing" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className="project me-5">
              <ProjectCard></ProjectCard>
            </div>         
          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleNavigate} className='btn btn-link'>View More Project</button>
        </div>
      </div>

    </>

  )
}

export default Home