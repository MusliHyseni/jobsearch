import React from 'react'

function Card({data}) {
  return (
    
    <div class="card m-2 border-info">
    <h6 class="card-header d-flex align-items-center justify-content-center">{data.company_name.toUpperCase()}</h6>
    <div class="card-body">
        <h6 class="card-title align-items-center fs-5 mb-5">{data.title}</h6>
        <div className='row justify-content-center card-text tagHolder'>
            {data.tags && data.tags.map(tag => (
                <span class="badge m-1 col-sm-10  p-3">{tag}</span>
            ))}
        </div>
    </div>
    <a href={data.url} class="btn card-footer">Read more</a>
</div>
        
       
        
        
    
  )
}

export default Card