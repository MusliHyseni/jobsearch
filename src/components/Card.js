import React from 'react';
import { Link } from 'react-router-dom';

function Card({data}) {
  return (
    
    <div class="card m-2 border-info">
    <h6 class="card-header p-1 d-flex align-items-center justify-content-center">{data.company_name.toUpperCase()}</h6>
    <div class="card-body">
        <h6 class="card-title align-items-center fs-5 mb-5">{data.title}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Tags: {data.tags}</li>
          <li class="list-group-item">Work place: {data.remote ? 'Remote': 'On-site'}</li>
          <li class="list-group-item">Location: {data.location}</li>
        </ul>
        <Link to='/user-details' className='btn btn-secondary m-4'>
          Apply
        </Link>
    </div>
    <a href={data.url} class="btn card-footer">Read more</a>
</div>
        
       
        
        
    
  )
}

export default Card