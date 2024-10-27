import React from 'react'
import cssStyle from '../about/about.module.css'

const About = () => {
  return (
    <div className= {cssStyle.green}>
        <h1 className= {cssStyle.blue}>About Us</h1> <br /><br />
        <p className= {cssStyle.para}> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; we empower aspiring tech enthusiasts and professionals through high-quality education in graphic design, web development, and artificial intelligence. Whether you're a beginner or looking to advance your skills, our diverse range of courses is designed to meet your needs and help you thrive in the digital landscape.</p>
        </div>
    
  )
}

export default About