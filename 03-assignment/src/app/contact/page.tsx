import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='py-3 ps-3 '><p>We’d love to hear from you! Whether you have a question about our menu, need help with a special order, or just want to say hello, our team at Sweet Tooth is here for you. Get in touch with us.</p></div>
    <div className="bg-grey-100 justify-center items-center flex flex-col m-6">
    <div className="bg-blue-600 rounded-lg p-8" >
        <h1 className="text-6xl font bold text-white text-center">Contact Us</h1>
        <form className="flex flex-col gap-5 text-2xl bg-blue-600 px-2 py-4">
            <input type="text" placeholder="Your name" className="outline-none rounded-md"/>
            <input type="email" placeholder="Your Email" className="outline-none rounded-md"/>
            <textarea placeholder="Type your message" className="outline-none rounded-md resize-none"></textarea>
            <input type="submit" value="submit" className="bg-orange-500 text-white cursor-pointer transition-all hover:bg-orange-800 rounded-md" />
        </form>
        </div>
    </div>
    </div>
   
  )
}

export default Contact