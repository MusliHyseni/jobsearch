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
                <Button className='bg-white text-black' id={item} onClick={handleFilter}>{item}</Button>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {isFiltered &&  
              <Button className="btn-danger col" onClick={handleRemoveFilter}>
                  Remove filters
              </Button>}
      <Container xs={12} className='container-fluid myContainer'>
      {visited && visited.map((name, index) => (
        
        ((jobs.filter(job => (job.tags[0] == name))).length > 2 && 
          <> 
            <Container key={index} className='w-100 m-0 p-0 otherContainer'>
              <h3 className='category-title fw-bold'>{name}</h3>
              <ScrollMenu data={jobs.filter(job => (job.tags[0] == name))}/>
            </Container>
          </>)
        
      ))}
    </Container>
  </>
  )
}

export default Jobs