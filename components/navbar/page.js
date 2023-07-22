"use client"
import { useState } from 'react'
import './navbar.css'
import Link from 'next/link'
import { FaBars , FaTimes } from 'react-icons/fa'

function Navbar() {

    const [ show , setShow ] = useState()

    const switchBurger = ()=>{
        setShow(!show)
    }

  return (
    <>
        <nav className='w-full fixed' >
                <h3 className=' animate__animated animate__rollIn' >Pouya<br/>Behrooj</h3>
                <div className="">
                    {/* logic for showing by clicking */}
                    <ul id="navbar" className={ show ? "#navbar active" : "#navbar"} >
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