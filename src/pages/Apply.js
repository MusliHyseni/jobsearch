import React from 'react';

import { useLocalStorage } from '@uidotdev/usehooks';
import { redirect } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Apply() {
  const [applied, setApplied] = useLocalStorage("applied_job");
  const [allApps, setAllApps] = useLocalStorage("allApps");


  const handleApply = e => {
    e.preventDefault()
    const form = e.target.elements;

    let application = {
      company: form['company'].value,
      job: form['job'].value,
      category: form['category'].value
    }

    if (allApps == undefined) {
      setAllApps(application);
    } else {
      if (!(allApps.filter(app => (
        app.company == application.company && app.job == application.job && app.category == application.category
      )).length)) {
        setAllApps(allApps => [allApps, application]);
      } else {
        alert("You have already appied for this job!");
      }
    }

    window.location.href = 'http://localhost:3000/myjobs';
  }

  return (
    <>
    <form method='POST' onSubmit={handleApply} className='p-4 form'>
      <div className='row'>
        <label htmlFor="company" className='fw-bold'>Company</label>
        <input className="col rounded-1" type='text' disabled name='company' value={applied[1].toUpperCase()} id='company'/>
     
        <label htmlFor="job" className='fw-bold'>Job</label>
        <input className="col rounded-1" type='text' disabled name='job' value={applied[0]} id='job' required/>

        <label htmlFor="category" className='fw-bold'>Job category</label>
        <input className="col rounded-1" type='text' disabled name='category' value={applied[2]} id='category' required/>
      </div>

      <div className='row'>
        <label htmlFor="email" className='fw-bold'>Email</label>
        <input className="col rounded-1" type='text' name='email' id='email' placeholder='Enter email' required/>

        <label htmlFor="password" className='fw-bold'>Password</label>
        <input className="col rounded-1" type='password' name='password' id='password' placeholder='Enter password' required/>
      </div>
      <div class="row">
          <label for="formFile" className="form-label fw-bold">Submit CV</label>
          <input className="form-control rounded-1" type="file" id="formFile"/>
      </div>
      <div className='row'>
      <button type="submit" className='btn btn-outline-primary col'>Apply</button>
      </div>
    </form>

    </>
  )
}

export default Apply