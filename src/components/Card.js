import React from 'react'

function Card({data}) {
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
    </div>
    <a href={data.url} className="btn card-footer">Read more</a>
</div>
        
       
        
        
    
  )
}

export default Card