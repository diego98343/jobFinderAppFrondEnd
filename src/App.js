
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Landing,Error,Dashboard,Register} from './pages'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Logo from './components/Logo'

function App() {
  return (
      <BrowserRouter>
      
          <Routes>
             <Route path='/' element={<Dashboard/>}/>
             <Route path='/landing' element={<Landing/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/*' element={<Error/>}/>
          </Routes>
          <ToastContainer position='top-center'/>
      </BrowserRouter>
  );
}

export default App;
