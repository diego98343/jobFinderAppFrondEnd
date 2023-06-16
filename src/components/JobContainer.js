import React, { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer';
import {useSelector,useDispatch} from 'react-redux'
import { getAllJobs } from '../features/alljobs/AlljobsSlice';
import PageBtnContainer from './PageBtnContainer';

function JobContainer() {

const {jobs, isLoading,page,numOfPages, totalJobs} =useSelector((store)=> store.allJobs)
const dispatch = useDispatch();

// in the use effect function we pass the functionality and then what we expect for example
useEffect(()=> {
    //dispatch 
    dispatch(getAllJobs());
},[])


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
           <h5>
             {totalJobs} job{jobs.length > 1 && 's'} found
           </h5>
           <div className='jobs'>
              {jobs.map((job) => {
                 return <Job key={job._id} {...job} />;
                 })}
            </div>
            {numOfPages > 1 && <PageBtnContainer/>}
        </Wrapper>

}

export default JobContainer