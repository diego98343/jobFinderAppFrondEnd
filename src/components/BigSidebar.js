import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar';
import {useSelector} from 'react-redux'
import Logo from '../components/Logo'
import { NavLinks } from './NavLinks';

function BigSidebar() {

  const {isSidebarOpen} = useSelector((store)=> store.user)

  return (
  
   <Wrapper>
      <div className={
        isSidebarOpen? 'sidebar-container show-sidebar': ''
        }
    >
      <div className='content'>
          <header>
            <Logo/>
          </header>
        <NavLinks/>
      </div>
    </div>
   </Wrapper>
      
   
  )
}

export default BigSidebar