import React from 'react'
import Wrapper from '../assets/wrappers/Navbar';
import {GoHome} from 'react-icons/go'
import {MdOutlineFormatAlignLeft} from 'react-icons/md'
import { FaUserCircle, FaCaretDown,FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  //we have make sure bring the user information
  const {user} = useSelector((store)=>store.user)
  const dispatch = useDispatch();


  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' 
                className='toggle-btn' 
                onClick={()=> console.log('toggle sidebar')}
              >
                <MdOutlineFormatAlignLeft/>
        </button>
        <div>
           <Logo/>
           <h3>Navbar</h3>
           {/* <GoHome></GoHome> */}
        </div>
        <div className='btn-container'>
          <button 
              type='button' 
              className='btn' 
              onClick={()=> console.log('toggle logout dropdown')}
              ><FaUserCircle>{user?.name}</FaUserCircle>
          </button>

          <div className='dropdown show-dropdown'>
             <button 
                 type='button' 
                 className='dropdown-btn'
                 onClick={()=> console.log(' logout user')}
                >logout
             </button>
          </div>
        </div>
      </div>     
    </Wrapper>
           
  )
}

export default Navbar