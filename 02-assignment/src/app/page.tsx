
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Footer from '@/components/footer/footer'
import React from 'react'

const Home
 = () => {
  return (
    <div>
      <Header /> <br /><br />

<p> &nbsp; At Pakistan tech Institute, we empower aspiring tech enthusiasts and professionals through high-quality education in graphic design, web development, and artificial intelligence. Whether you're a beginner or looking to advance your skills, our diverse range of courses is designed to meet your needs and help you thrive in the digital landscape.</p> <br /><br />
&nbsp;<ul> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Why Choose Us?</ul>
&nbsp;<li>Expert Instructors: Learn from industry professionals with years of experience.</li>
&nbsp;<li>Flexible Learning: Choose from in-person, online, or hybrid classes to fit your schedule.</li>
&nbsp;<li>Hands-OnHands-On Experience: Engage in real-world projects that enhance your skills and build your portfolio.</li>
&nbsp;<li>Career Support: Benefit from our dedicated career services, including resume building, interview preparation, and job placement assistance.</li> <br /><br />
<section className='pt-5'>
  <h1 className='text-green-700 pl-4 text-[30px] font-extrabold bg-green-200' >About Us</h1>
<p className='pt-4'>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;we empower aspiring tech enthusiasts and professionals through high-quality education in graphic design, web development, and artificial intelligence. Whether you're a beginner or looking to advance your skills, our diverse range of courses is designed to meet your needs and help you thrive in the digital landscape</p>
</section>

      <section className='pt-5'>
        <h1 className='text-green-700 pl-4 text-[30px] font-extrabold bg-green-200' >Our Services</h1>
        <p className='pt-4'>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Our institute offers a diverse range of courses designed to equip you with the skills needed to excel in the ever-evolving tech industry. Whether you're looking to master Web Development, dive into Graphic Designing, or explore the exciting world of Artificial Intelligence, we have comprehensive programs tailored to your needs. Our web development courses cover everything from HTML, CSS, and JavaScript to advanced frameworks, enabling you to build responsive and dynamic websites. In graphic designing, you'll learn to create stunning visuals using industry-standard tools like Adobe Photoshop and Illustrator. Our AI courses take you through the fundamentals of machine learning, deep learning, and data analysis, providing hands-on experience with real-world applications. With experienced instructors, a flexible learning environment, and state-of-the-art resources, we’re committed to helping you achieve your professional goals and stay ahead in the digital age.</p>
      </section>
      <br /><br />
     <Footer /> 
      </div>
  )
}

export default Home
