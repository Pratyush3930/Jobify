import React from 'react'
import EachJob from '../component/eachjob'

// const Job = ({key ,position , timing , location , keywords , company_logo}) => {
const Job = ({jobs}) => {
  return (
    <div className='jobify__job-container'>
     {jobs.map((job , index) => (
        <EachJob  position = {job.position}
        timing = {job.timing} location = {job.location}
        keywords = {job.keywords} company_logo = {job.company_logo}
        company = {job.company}
        />
        ))}
    </div>
  )
}

export default Job