import React from 'react'
import ContactInfo from './contact-info'
import Map from './map'
import ContactHeader from './contact-header/index'

const ContactComponent = () => {
  return (
    <>
      <ContactHeader />
      <ContactInfo />
      <Map />
    </>
  )
}

export default ContactComponent