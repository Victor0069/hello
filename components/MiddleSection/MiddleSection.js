import React from 'react'
import "./MiddleSection.css"
import MiddleSection1 from '../MiddleSection1/MiddleSection1'
import MiddleSection2 from '../MiddleSection2/MiddleSection2'
import MiddleSection3 from '../MiddleSection3/MiddleSection3'
import Footer from '../Footer/Footer'
function MiddleSection() {
  return (
    <div className='middleSection'>
        <MiddleSection1/>
        <MiddleSection2/>
        <MiddleSection3 />
        <Footer/>
    </div>
  )
}

export default MiddleSection