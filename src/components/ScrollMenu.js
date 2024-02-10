import React, { useRef, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function ScrollMenu(data) {
    const [scrollPos, setScrollPos] = useState(0)
    const containerRef = useRef();

    function handleScroll(scrollAmount) {
        const newScrollPos = scrollPos + scrollAmount;
        setScrollPos(newScrollPos);

        containerRef.current.scrollLeft = newScrollPos;
    }

    

  return (
    <>
        <Container className='scrollMenu-container w-100 my-3'>
            <div ref={containerRef} 
                className='holder w-100 m-0'
                style={{
                    width: "100vh",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}>
                <div className='content-box'>
                    {data.data && data.data.map((item, index) => (
                        <Card className='col scrollCard' key={index}>
                            <p className='card-header text-white'>{item.title.slice(0, 50)}</p>
                            <div className='card-body p-4'>
                                <span className={item.remote ? "badge bg-danger fs-6 fw-bold col" : "badge bg-primary fs-6 fw-bold"}>{item.remote ? 'Remote': 'On-site'}</span>
                                <span className='bagde bg-primary fw-bold text-white mx-3 p-1 fs-6 rounded-2'>{item.location}</span>
                                <p className='mt-4 mb-1 fw-bold'>{item.slug.toUpperCase()}</p>
                                <div className='row buttons'>
                                    <Button href={item.url} className='col mx-2 btn-secondary'>Read more</Button>
                                    <Link to={`/jobs/apply`} className='col mx-2 btn-secondary btn btn-danger'>Apply</Link>
                                </div>
                            </div> 
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
        <div className='action-btns row container-fluid'>
            <Button className='col btn-secondary' onClick={() => {handleScroll(-390)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Button>
            <Button className='col btn-secondary' onClick={() => {handleScroll(390)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </Button>
        </div>
    </>
  )
}

export default ScrollMenu;