import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='content_contact'>
        <h3>My Contact Info</h3>
        <ul>
            <li>raigerim133@gmail.com</li>
            <li>+9666666645454</li>
            <li>94102 Kyrgyzstan</li>
        </ul>
        <h3>Let’s Keep In Touch</h3>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Phone Number' />
        <button type='submit'>Submit</button>
    </div>
    </>
     
  )
}

export default Contact