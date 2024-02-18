import React from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Container } from 'react-bootstrap';

function AddJob() {
    const [jobs, setJobs] = useLocalStorage("jobs");
    const [loggedin, setLoggedIn] = useLocalStorage('loggedin');

    
    const handlePostPosition = e => {
        e.preventDefault()
        if (loggedin == undefined) {
            alert("Log in to post jobs!");
            window.location.href = 'http://localhost:3000/login';
        } else {
            const form = e.target.elements;

            const addedJob = {
                company: form['company'].value,
                job: form['job'].value,
                category: form['category'].value,
                poster: loggedin.id
        }


        setJobs([...jobs, addedJob]);
        window.location.href = 'http://localhost:3000/myjobs';

        }
    }
  return (
    <>
        <h2 className='titleText mt-5 fw-bold'>Have an open position? We've got you covered.</h2>
        <Container className='my-5 container-fluid primaForm bg-white p-5'>
            <form method="POST" onSubmit={handlePostPosition} className='container-fluid'>
                <div className='row'>
                    <label htmlFor="company" className='fw-bold'>Company</label>
                    <input className="col rounded-1" type='text' name='company' id='company'/>
                
                    <label htmlFor="job" className='fw-bold'>Job</label>
                    <input className="col rounded-1" type='text' name='job' id='job' required/>

                    <label htmlFor="category" className='fw-bold'>Job category</label>
                    <input className="col rounded-1" type='text' name='category' id='category' required/>
                </div>
                <div className='row'>
                    <button type="submit" className='btn btn-outline-primary col'>Post job</button>
                </div>
            </form>
        </Container>
    </>
  )
}

export default AddJob