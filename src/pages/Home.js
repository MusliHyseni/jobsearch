import React, { useEffect, useState } from 'react'
import poster from '../assets/images/Poster.png'
import DataCard from '../components/Card'
import { Link } from 'react-router-dom'
import Jobs from './Jobs'

function Home() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
    .then(response => response.json())
    .then(data => setJobs(data.data.slice(0, 9)))
  }, [])

  return (
    <>
    <div className='row justify-content-center'>
      <img src={poster} className='mb-5'/>
      <h1 className='fw-bold mb-5 '>Your dream career starts with us!</h1>
      {jobs && jobs.map((job, index) => (
        <div className='col-3 m-1' key={index}>
          <DataCard data={job}/>
        </div>
      ))}
    </div>
    <Link to='/jobs' className='btn endButton '>See more jobs</Link>
    </>
  )
}

export default Home