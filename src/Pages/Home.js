import React from 'react'
import Logo from '../Component/Common/Logo'
import CTAButton from '../Component/Common/Button'
import "./Home.css"
import Slider from '../Component/Core/Home/Slider'
import Footer from '../Component/Common/Footer'
function Home() {
  return (
    <div>
        <div className='Navbar'>
            <Logo/>
            <div className='Button-Group'>
            <CTAButton linkto={"/login"}>
              Login
            </CTAButton>
            <CTAButton linkto={"/signUp"}>
              SignUp
            </CTAButton>
            </div>
        </div>
        <div  className='Main-content'>
            <Slider/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home