import { FormRow, FormRowSelect, SearchContainer } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import React, { useEffect } from 'react'
import { handleChange, 
        clearValues, 
        createJob,
        editJob} from '../../features/job/JobSlice';

function AddJob() {

  const {
    isLoading,
    position,
    company,
    jobType,
    jobTypeOptions,
    jobLocation,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  //we this we takes the values we get from the handleJobInput
  const dispatch = useDispatch();
  const {user} = useSelector((store)=> store.user)

   const handleSubmit = (e) =>{

     e.preventDefault()

      if(!position || !company || !jobLocation){
        toast.error('Please fill out all fields')
        return;
      }
       //if is edition true then when we submit the form 
       if(isEditing){
        dispatch(editJob({jobId:editJobId,
                          job:{position,company,jobType,jobTypeOptions,jobLocation,status}
                        })
                        );
          //make sure you are using return so the program do not keep reading all the code
         return;                
       }


      dispatch(createJob({position,company,jobLocation,status,jobType}));
    
   }

    // this function handle every input and takes the user input value 
   const handleJobInput =(e) =>{
     const name = e.target.name
     const value = e.target.value
     //this handlechange comes from the jobSlice. we use handle change to pass name and value to redux 
     dispatch(handleChange({name,value}));
   }

   // we use this use effect to access the user location 
   useEffect(()=>{

    if(!isEditing){
      dispatch(handleChange({
        name:'jobLocation',
        value: user.location
      }))
    }

    
   },[])
  

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
         labelText={'status'}
         value={status}
         handleChange={handleJobInput}
         list={statusOptions}
       />
        
        <FormRowSelect
         name='jobType'
         labelText='job type'
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
