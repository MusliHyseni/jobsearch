import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Container, Table } from 'react-bootstrap';

function MyJobs() {
  const [allApps, setAllApps] = useLocalStorage("allApps");
  const [user, setUser] = useLocalStorage('loggedin')
return (
  <>
  
  <h1 className='yourJobsTitle fw-bold'>Your jobs</h1>
  <Container className='container-fluid row main'> 
    <Table className='container-fluid col'>
      <thead>
        <tr className='p-2 bg-secondary headrow'>
          <th>Company</th>
          <th>Job</th>
          <th>Category</th>
        </tr>
        
        {allApps && allApps.map((app, index) => (
          <>
            <tr key={app.index}className='fw-bold bg-secondary'>
              <td>{app.company}</td>
              <td>{app.job}</td>
              <td>{app.category ? app.category : "Unknown"}</td>
            </tr>
          </>
        ))}
      </thead>
    </Table>
  </Container>

  </>
)

}

export default MyJobs