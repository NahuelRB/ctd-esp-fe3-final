import React from 'react'
import image from '../images/DH.png'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img
        style={{ width: '200px', marginLeft: '10px', height: '40px' }}
        src= {image}
        alt="DH"
        />
    </footer>
  )
}

export default Footer
