import React, { useRef, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function ScrollMenu(data) {
    const [scrollPos, setScrollPos] = useState(0)
    const containerRef = useRef();

    function handleScroll(scrollAmount) {
        const newScrollPos = scrollPos + scrollAmount;
        setScrollPos(newScrollPos);

        containerRef.current.scrollLeft = newScrollPos;
    }

    

  return (
    <Container className='scrollMenu-container'>
        <div ref={containerRef} 
            style={{
                width: "100vh",
                overflowX: "scroll",
                scrollBehavior: "smooth"
            }}>
            <div className='content-box'>
                {data.data && data.data.map((item, index) => (
                    <Card className='col scrollCard' key={index}>
                        <p className='card-header'>{item.title} - {item.company_name}</p>
                        <div className='card-body'>
                            <span className={data.remote ? "badge badge-danger fw-bold" : "badge badge-primary fw-bold"}>{data.remote ? 'Remote': 'On-site'}</span>
                            <div className='row'>
                                <Button href={item.url} className='col mx-2'>Read more</Button>
                                <Button href={`/jobs/${item.tags[0]}/apply`} className='col mx-2'>Apply</Button>
                            </div>
                        </div> 
                    </Card>
                ))}
            </div>

            <div className='action-btns row container-fluid'>
                <Button className='col' onClick={() => {handleScroll(-330)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </Button>
                <Button className='col' onClick={() => {handleScroll(330)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </Button>
            </div>
        </div>
        
    </Container>
  )
}

export default ScrollMenu;