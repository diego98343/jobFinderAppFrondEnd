import React from 'react'
import Logo from '../components/Logo'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
    <main>
        <nav>
           <Logo></Logo>
        </nav>

        <div className='container page'>
            <div className='info'>
            <h1>job 
                <span> finder and tracking</span> app
            </h1>
             <p>I'm baby live-edge selvage chia street art, flannel listicle jianbing pickled. YOLO bruh sriracha photo booth biodiesel. Bruh banjo vape gentrify sartorial, umami franzen cornhole direct trade neutral milk hotel street art tousled occupy fingerstache ethical. 8-bit literally post-ironic raclette migas mixtape messenger bag aesthetic vaporware tbh poke helvetica kickstarter shaman. You probably haven't heard of them williamsburg DIY hella.</p>
            </div>
            <Link to='/register' className='btn btn-hero'>Login/Register</Link>
          <img src={main} alt='job hunt' className='img main-img'/>
        </div>    
    </main>
    </Wrapper>
  )
}



const Wrapper = styled.main`

nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display:flex;
  align-items:center
}
.page{
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
}
h1{
  font-weight: 700;
  margin-top: 3rem

  span{
    color:var(--primary-500)
  }
}
p{
  color:var(--grey600)
}
.main-img{
  display:none;
}
@media (min-width: 992px){
  .page{
    grid-template-columns: 1fr 1 fr;
    column-gap: 3rem;
  }
  .main-img{
    display: block
  }
}

`

export default Landing