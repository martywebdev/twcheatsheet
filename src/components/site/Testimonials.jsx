import React from 'react'
import Section from './Section'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <Section title={'Testimonials'}>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-end'>
           <Testimonial />
           <Testimonial />
           <Testimonial />
        </div>
    </Section>
  )
}

export default Testimonials