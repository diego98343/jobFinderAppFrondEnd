import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import logo2 from '../assets/images/apple-touch-icon.png'
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt='jobster logo' className='logo'></img>
        </nav>

        <div className='container page'>
            <div className='info'>
            <h1>job 
                <span> finder and tracking</span> app
            </h1>
             <p></p>
            </div>
          <img src={main} alt='job hunt' className='img main-img'/>
        </div>    
    </main>
  )
}

export default Landing