import React from 'react'
import Wrapper from '../assets/wrappers/Navbar';
import {MdOutlineFormatAlignLeft} from 'react-icons/md'
import { FaUserCircle, FaCaretDown,FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';

function Navbar() {
 
const[showLogout,setshowLogout] =useState(false)
 //we have make sure bring the user information
const { user } = useSelector((store) => store.user);
const dispatch = useDispatch();

const toggle = ()=>{
  dispatch(toggleSidebar())
}
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' 
                className='toggle-btn' 
                onClick={()=> toggle}
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
              onClick={()=> setshowLogout(!showLogout) }
              ><FaUserCircle/>
              {user?.name}
          </button>

          <div className={showLogout ? 'dropdown show-dropdown':'dropdown'}>
             <button 
                 type='button' 
                 className='dropdown-btn'
                 onClick={()=> dispatch(logoutUser())}
                >logout
             </button>
          </div>
        </div>
      </div>     
    </Wrapper>
           
  )
}

export default Navbar