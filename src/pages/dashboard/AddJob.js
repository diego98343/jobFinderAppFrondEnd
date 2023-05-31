import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import React from 'react'
import { handleChange, clearValues } from '../../features/job/JobSlice';

function AddJob() {

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  //we this we takes the values we get from the handleJobInput
  const dispatch = useDispatch();

   const handleSubmit = (e) =>{

     e.preventDefault()

      if(!position || !company || !jobLocation){
        toast.error('Please fill out all fields')
        return;
      }
   }

    // this function handle every input and takes the user input value 
   const handleJobInput =(e) =>{
     const name = e.target.name
     const value = e.target.value
     //this handlechange comes from the jobSlice. we use handle change to pass name and value to redux 
     dispatch(handleChange({name,value}));
   }
  

  return (
    <Wrapper>
      <form className='form'>
         <h3>{isEditing? 'edit job': 'add job'}</h3>
         <div className='form-center'>
            <FormRow
               type='text'
               name='position'
               value={position}
               handleChange={handleJobInput}
            />  
         </div>
         <div className='form-center'>
            <FormRow
               type='text'
               name='company'
               value={company}
               handleChange={handleJobInput}
            />  
         </div>
         <div className='form-center'>
            <FormRow
               type='text'
               name='jobLocation'
               labelText={'job location'}
               value={jobLocation}
               handleChange={handleJobInput}
            />  
         </div>

       <FormRowSelect
         name='status'
         value={status}
         handleChange={handleJobInput}
         list={statusOptions}
       />

       <FormRowSelect
         name='jobType'
         labelText={'job type'}
         value={jobType}
         handleChange={handleJobInput}
         list={jobTypeOptions}
       />

         <div className='btn-container'>
           <button  type='button' 
                    className='btn btn-block clear-btn'
                    onClick={()=> dispatch(clearValues())}
                    >clear</button>

           <button  type='submit' 
                    className='btn btn-block submit-btn'
                    onClick={handleSubmit}
                    disabled={isLoading}
                    >submit</button>
         </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
