
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Landing,Error,Dashboard,Register} from './pages'
import Logo from './components/Logo'

function App() {
  return (
      <BrowserRouter>
      <Logo></Logo>
          <Routes>
             <Route path='/' element={<Dashboard/>}/>
             <Route path='/landing' element={<Landing/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
