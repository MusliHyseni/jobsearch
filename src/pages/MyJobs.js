import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Table } from 'react-bootstrap';

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

return (
  <Table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Job</th>
        <th>Category</th>
      </tr>

      {allApps.toArray && allApps.toArray.map((app, index) => (
        <>
          <tr key={index}>
            <td>{app.company}</td>
            <td>{app.title}</td>
            <td>{app.category}</td>
          </tr>
        </>
      ))}
    </thead>
  </Table>
)

}

export default MyJobs