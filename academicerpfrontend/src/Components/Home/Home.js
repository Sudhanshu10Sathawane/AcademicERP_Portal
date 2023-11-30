import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const [selectedButton,setSelectedButton]=useState('button');
  function handleSelect(act){
    setSelectedButton(act);
  }
  return (
    <div className='home'>
      <Link to="/domains"><button className={selectedButton==='activeD'?'activeD':'button'} onClick={()=>handleSelect('activeD')}>Domain</button></Link>
      <Link to="/students"><button className={selectedButton==='activeS'?'activeS':'button'} onClick={()=>handleSelect('activeS')}>Students</button></Link>
    </div>
  )
}

export default Home

