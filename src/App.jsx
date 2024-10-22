
import { Link } from 'react-router-dom'
import './App.css'
// import Pokedex from './components/pokedex/pokedex.jsx'

import CustomRoutes from './routes/CustomRouts.jsx'
function App() {
 

  return (
    <>
    <div className='outer-wraper'> 
    <h1 id="pokedex-heading">
      <Link to="/">Pokedex</Link>
      </h1>
      
    <CustomRoutes/>
    </div>
       </>
  )
}

export default App
