import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';

import DataCard from '../components/Card';
import ScrollMenu from '../components/ScrollMenu';


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [prevJobs, setPrevJobs] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  
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

  console.log(jobs[0]);

  const handleFilter = e => {
    e.preventDefault();
    setPrevJobs(jobs);
    setJobs(jobs.filter(job => (job.tags[0] == e.target.getAttribute('id'))));
    setIsFiltered(true);
  }

  const handleRemoveFilter = e => {
    setJobs(prevJobs);
    setIsFiltered(false);
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

 
  


  return (
    <>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} className='filter-menu' id="dropdown-custom-components">
            Filter by category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {visited.map((item, index) => (
              <Dropdown.Item eventKey={index}>
                <Button className='bg-white text-black btn-link filterLink' id={item} onClick={handleFilter} style={{textDecoration: "none"}}>{item}</Button>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {isFiltered &&  
              <Button className="btn-danger col removeFilters mt-4" onClick={handleRemoveFilter}>
                  Filtered
                  <span className='px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                  </span>
              </Button>}
      <Container xs={12} className='container-fluid myContainer'>
      {visited && visited.map((name, index) => (
        
        (isFiltered == false ? (jobs.filter(job => (job.tags[0] == name))).length > 2 &&
          <> 
            <Container key={index} className='w-100 m-0 p-0 otherContainer'>
              <h3 className='category-title fw-bold'>{name}</h3>
              <ScrollMenu data={jobs.filter(job => (job.tags[0] == name))}/>
            </Container>
          </> : (jobs.filter(job => (job.tags[0] == name))).length > 2 ?  <Container key={index} className='w-100 m-0 p-0 otherContainer'>
              <h3 className='category-title fw-bold'>{name}</h3>
              <ScrollMenu data={jobs.filter(job => (job.tags[0] == name))}/>
            </Container> : <p style={{margin: "0px auto"}}>No jobs belonging to this category, at the moment! Check later!</p>)
        
      ))}
    </Container>
  </>
  )
}

export default Jobs