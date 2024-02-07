import React, { useEffect, useState } from 'react'
import DataCard from '../components/Card';
import {Container } from 'react-bootstrap';
import ScrollMenu from '../components/ScrollMenu';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
    .then(response => response.json())
    .then(data => setJobs(data.data));
  }, [])

  let c_array = jobs.map(job => job.tags[0]);
  // Remove duplicates from the tags
  let visited = [];
  for (let tag of c_array) {
    if (!visited.includes(tag)) {
      visited.push(tag);
    }
  }



  

  return (
    <Container className=''>
    {visited && visited.map((name, index) => (
      <Container key={index} className=''>
        <h3>{name}</h3>
        <ScrollMenu data={jobs.filter(job => (job.tags[0] == name))}/>
      </Container>
    ))}
  </Container>
  )
}

export default Jobs