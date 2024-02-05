import React, { useEffect, useState } from 'react'

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
    .then(response => response.json())
    .then(data => setJobs(data.data));
  }, [])

  const c_array = jobs.map(job => job.tags[0]);
  // Remove duplicates from the tags
  visited = [];
  for (let tag of c_array) {
    if (!visited.includes(tag)) {
      visited.push(tag)
    }
  }
  
  

  return (
    <div>Jobs</div>
  )
}

export default Jobs