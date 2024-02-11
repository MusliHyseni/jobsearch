import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Badge, Container, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

function MyJobs() {
  const [allApps, setAllApps] = useLocalStorage("allApps");

  function countOcurrences(item, arrayOfObjects) {
    let counter = 1
    
    for (let i = 0; i < arrayOfObjects["length"]; i++) {
      if (arrayOfObjects[i]["length"] > 1) {
        arrayOfObjects[i] = arrayOfObjects[i][1];
      };
    
      if (arrayOfObjects[i].category == item) {
        counter++;
      }
    }
    return {category: item, count: counter}
  }

  let ctgWithCount = [];
  for (let i = 0; i < allApps["length"]; i++) {
    ctgWithCount.push(countOcurrences(allApps[i].company, allApps));
  }


return (
  <>
  <Container className='container-fluid row main'>
   {
      ctgWithCount && 
      <Container className='list contaier-fluid p-4 rounded-2 col'>
        <ListGroup as="ol" className='rounded-3'numbered>
        <h4 className="mb-4">Most frequent companies</h4>
          {ctgWithCount.map((item, index) => (
            index < 3 &&
            <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start rounded-2 m-1 p-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold px-2">{item.category}</div>
            </div>
            <Badge bg="primary" className='p-2 px-3' pill>
              {item.count}
            </Badge>
          </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    }
    
    <Table className='container-fluid col'>
      <thead>
        <tr className='p-2'>
          <th>Company</th>
          <th>Job</th>
          <th>Category</th>
        </tr>
        
        {allApps && allApps.map((app, index) => (
          <>
            <tr key={app.title}>
              <td>{app.company}</td>
              <td>{app.job.slice(0, 110)}</td>
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