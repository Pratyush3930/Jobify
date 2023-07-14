import React from 'react'
import './eachjob.css';
// import { useState } from 'react';

const EachJob = ({position , timing , location , keywords , company_logo ,company}) => {



  return (

    <div className='jobify__job-container_eachjob section__margin'>
        <div className='jobify__job-container_eachjob-logo'>
            <img src={company_logo} alt="Logo" />
        </div>
        <div className='separate'>
            <div className='jobify__job-container_eachjob-about '>
                <div className='jobify__job-container_eachjob-about_company'>
                    <h3>{company}</h3>  
                </div>   
                <div className='jobify__job-container_eachjob-about_new'>
              
                    <p>NEW!</p>
              
            </div>  
                    
            
            </div>
            <div className='jobify__job-container_eachjob-desc'>
                <div className='jobify__job-container_eachjob-desc_pos'>
                    <h1>{position}</h1>
                    <div className='jobify__job-container_eachjob-desc_pos-keyword'>
                    {keywords.map((keyword) => 
                            <p>{keyword}</p>
                    )}
                    </div>
                </div>
                <div className='jobify__job-container_eachjob-desc_date'>
                    <p>1d ago</p>
                    <p>{timing}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EachJob