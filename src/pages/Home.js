import React, { useEffect, useState } from 'react'
import poster from '../assets/images/Poster.png'
import Card from '../components/Card'

function Home() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
    .then(response => response.json())
    .then(data => setJobs(data.data.slice(0, 17)))
  }, [])

  return (
    <div>
      {jobs && jobs.map((job, index) => {
        // <Card key={index} data={job}/>
      })}
    </div>
  )
}

export default Home