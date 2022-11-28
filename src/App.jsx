import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Principal from './components/Principal'
import Home from './components/Home'


function App() {  return (

    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/> 
        <Route path="/principal" element={<Principal />}/> 
      </Routes>


    </div>
  )
}
export default App