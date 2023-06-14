import React from 'react'
import Wrapper from '../assets/wrappers/SearchContainer';
import {useDispatch,useSelector} from 'react-redux'
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';



function SearchContainer() {
  const {isLoading, search, searchStatus, searchType, sort,sortOptions} = useSelector((store)=> store.allJobs);
  const {jobTypeOptions,statusOptions} = useSelector((store)=> store.job)
  const dispatch = useDispatch();


  const handleSearch = (e) =>{
    
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

  }


  return <Wrapper>
             <form className='form'>
                <h4>search form</h4>
                <div className='form-center'>
                  {/* search position */} 
                    <FormRow
                      type='text'
                      name='search'
                      value={search}
                      handleChange={handleSearch}
                    
                    />
                  {/* search position */} 
                    <FormRowSelect
                        labelText='status'
                        name='searchStatus'
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={['all', ...statusOptions]}
                    />  
                     {/* search by type*/} 
                     <FormRowSelect
                        labelText='type'
                        name='searchType'
                        //value is de default value 
                        value={searchType}
                        handleChange={handleSearch}
                        list={['all', ...jobTypeOptions]}
                      /> 
                        {/* sort */} 
                     <FormRowSelect
                        labelText='sort'
                        name='sort'
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                      /> 
                      <button className='btn btn-block btn-danger' 
                              disabled={isLoading}
                              onClick={handleSubmit}>clear filters</button> 
                </div>
             </form>
         </Wrapper>
}

export default SearchContainer