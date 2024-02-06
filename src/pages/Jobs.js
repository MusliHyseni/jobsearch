import React, { useEffect, useState } from 'react'
import DataCard from '../components/Card';
import {Container } from 'react-bootstrap';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

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
    <Container>
      {visited && visited != undefined && visited.map((name, index) => (
        <Container key={index} className=''>
          <h3>{name}</h3>
          <ScrollMenu>
            {jobs.filter((job, index) => (
              job.tags[0] == name
            )).map((item, index) => (
              <DataCard data={item} key={index}/>
            ))}
          </ScrollMenu>
        </Container>
      ))}
    </Container>
  )
}

export default Jobs