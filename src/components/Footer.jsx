import React from 'react'
import { CONTACT } from '../constants'

const Footer = () => {
  return (
    <div className=' border-b border-neutral-900 pb-20'>
        <h1 className=' my-10 text-center text-5xl'>Get in touch</h1>
        <div className='text-center tracking-tighter'>
            <p className=' my-4'>{CONTACT.address}</p>
            <p className=' my-4'>{CONTACT.phoneNo}</p>
            <a href='#'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Footer
