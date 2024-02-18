import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Link } from 'react-router-dom';

function DataCard({data}) {
  const [allApps, setAllApps] = useLocalStorage("allApps");
  const [applied, setApplied] = useLocalStorage("applied_job");
  const [users, setUsers] = useLocalStorage('users')
  const [loggedin, setLoggedIn] = useLocalStorage('loggedin')

  const handleApplication = e => {
    if (loggedin != undefined) {
        const [jobTitle, jobCompany, jobCategory] = e.target.getAttribute("id").split(',');
        setApplied([jobTitle, jobCompany, jobCategory]);
    } else {
        alert("Log in to apply to jobs!");
    }
  }


  return (
    <div className="card m-4 border-info">
    <h6 className="card-header p-1 d-flex align-items-center justify-content-center">{data.company_name.toUpperCase()}</h6>
    <div className="card-body">
        <h6 className="card-title align-items-center fs-5 mb-5">{data.title}</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Tags: {data.tags}</li>
          <li className="list-group-item">Work place: <span className={data.remote ? "text-danger fw-bold" : "text-primary fw-bold"}>{data.remote ? 'Remote': 'On-site'}</span></li>
          <li className="list-group-item">Location: {data.location}</li>
        </ul>
        <Link to={loggedin != undefined ? `/jobs/apply` : '/login'} onClick={handleApplication} id={[data.title,data.title,data.tags[0]]} className='btn btn-secondary m-4'>
          Apply
        </Link>
    </div>
      <a href={data.url} className="btn card-footer">Read more</a>
    </div>     
    
  )
}

export default DataCard