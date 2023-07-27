"use client"
import { useState } from 'react'
import './navbar.css'
import Link from 'next/link'
import { FaBars , FaTimes } from 'react-icons/fa'

function Navbar() {

    const [ show , setShow ] = useState()
    const [ navbar , setNavbar ] = useState(false)

    const switchBurger = ()=>{
        setShow(!show)
    }

    const changeNavSize = ()=>{
      if(window.scrollY >= 100){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }

    window.addEventListener("scroll" , changeNavSize)

  return (
    <>
        <nav  className= { navbar ? "nav-scroll" : "nav-default" } >
                <h3 className= {` logo animate__animated animate__rollIn + ${navbar ? "logo-scroll" : "logo"}`} >Pouya<br/>Behrooj</h3>
                <div className="">
                    {/* logic for showing by clicking */}
                    <ul id="navbar" className={ ` ${show ? "#navbar active" : "#navbar"}  ${navbar ? "navbar-scroll-list" : ""} `} >
                            <li>                              
                              <Link href='#home'>Home</Link>
                            </li>
                            <li>
                              <Link href='#skills' >Skills</Link>
                            </li>
                           <li>
                             <Link href='#contact' >Contact</Link>
                          </li>
                    </ul>
                </div>
                <div id="mobile" onClick={switchBurger} >                    
                        { !show ? <FaBars/> : <FaTimes/> }
                </div>
            </nav>
    </>
  )
}

export default Navbar