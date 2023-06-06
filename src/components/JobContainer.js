import React from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer';
import {useSelector,useDispatch} from 'react-redux'

function JobContainer() {
const {jobs, isLoading} =useSelector((store)=> store.allJobs)


if(isLoading){
    return (
        <Wrapper>
           <h2>Loading</h2>
        </Wrapper>
        )
}

if(jobs.length===0){
    return (
        <Wrapper>
           <h2>No jobs to display</h2>
        </Wrapper>
        )
}

return  <Wrapper>

           <h5>jobs info</h5>
           <div className='jobs'>
              {jobs.map((job)=>{
                console.log(job)
                return <Job key={job.id} {...job}/>
              })}
           </div>
           
        </Wrapper>

}

export default JobContainer