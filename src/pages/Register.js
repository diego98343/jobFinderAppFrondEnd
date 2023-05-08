

import {useState,useEffect} from 'react'
import React from 'react'
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo'
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import {useDispatch,userSelector} from 'react-redux'
import {loginUser, registerUser} from '../features/user/userSlice'

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}


function Register() {


const [values, setValues] = useState(initialState)
// const {user, isLoading} = userSelector(store=> store.user);

const dispatch = useDispatch();



const handleChange = (e) =>{
   //we create the valariables 
    const name = e.target.name
    const value = e.target.value
    // then we set the state values 

    setValues({ ...values, [name]: value });
   
};

const onSubmit = (e) =>{ 

    e.preventDefault()

   const {name,email,password,isMember} = values;

   if(!email || !password || (!isMember && !name)){
      toast('email or password are empty')
   }

   if (name.length < 3 ){
      toast('name must have more than 3 characters')
   }

   if (password.length < 7){
      toast('password must has more than 7 characters')
   }

   if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));

};


const toggleMember = () => {
   setValues({ ...values, isMember: !values.isMember });
 };

  return (
    <Wrapper>

           <form className="form" onSubmit={onSubmit}>
              <Logo></Logo>

               <h3>{values.isMember?'Login': 'Register'}</h3>

               {!values.isMember && (
                  <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
                  />
               )}

              <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
               />
               
               <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
               />

              <button type='submit' className='btn btn-block'>
                 submit
              </button>

                
              <p>
                  {values.isMember?'Not a member yet?':'Already a member'}
              
                   <button type='button' 
                           onClick={toggleMember}
                           className='member-btn'
                           >{values.isMember? 'Register' : 'Login'}
                           </button>
              </p>
           </form>
    </Wrapper>
    
  )
}

export default Register