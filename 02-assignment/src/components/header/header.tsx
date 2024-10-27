import React from 'react'
import styleCss from '../header/header.module.css'
import Navbar from '../navbar/navbar'

const Header = () => {
  return (

    <div className= {styleCss.div} >
        <Navbar />
        <h1 className= {styleCss.h1}>Welcome to Pakistan tech Institute</h1> <br /><br />
        <h2 className= {styleCss.h2}>Unlock Your Future with Our Cutting-Edge Computer Courses</h2>
    </div>
  )
}

export default Header