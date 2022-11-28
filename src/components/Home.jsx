import React from 'react'
import { Link } from 'react-router-dom'
import Clock from './Clock'




const Home = () => {
  return (
    <div className='card__home'>
      
      <Clock/>
      <h1 className='card__title-home'>WHEADER APP</h1>

      <div className='card__icons'>
            <img className='icons' src="/src/images/sol.gif" alt="" />
            <img className='icons' src="/src/images/viento.gif" alt="" />
            <img className='icons' src="/src/images/lluvia.gif" alt="" />
            <img className='icons' src="/src/images/nubes.gif" alt="" />
            <img className='icons' src="/src/images/tormenta.gif" alt="" />
            </div>
      <Link to="./Principal" className='card__btn-home'> GO!...</Link>


    </div>
    
  )
}

export default Home