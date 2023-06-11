import React from 'react'
import { useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/Job';
import { Link } from 'react-router-dom';
import  moment  from 'moment';

//remember to put array when the function is passing variables 
function Job({_id,position,company,jobLocation,jobType,createdAt,status}) {
  
  const dispatch = useDispatch();

  //modify the default date format 
  const date = moment(createdAt).format('MMM Do, YYYY')

  
  return (
    <Wrapper>
      <header>
      <div className='main-icon'>{company.charAt(0)}</div>
      <div className='info'>
         <h5>{position}</h5>
         <p>{company}</p>
      </div>
      </header>
       <div className='content-center'>
          <h4>more content</h4>
          <div className={`status ${status}`}>{status}</div>
       </div>
       <footer>
          <div className='actions'>
          <p>{jobLocation}</p>
          <p>{jobType}</p>
          <p>{date}</p>
             <Link
               to='/add-jobs'
               className='btn edit-btn'
               onClick={()=> console.log('edit job')}
             >
              edit
             </Link>
             <button
             className='btn delete-btn'
             onClick={()=> console.log('delete job')}
             >
              delete
             </button>
          </div>
       </footer>
    </Wrapper>
  )
}

export default Job