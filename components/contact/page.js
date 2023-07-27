import Link from 'next/link'
import {LiaLinkedinIn , LiaTelegramPlane} from 'react-icons/lia'
import {BiLogoGmail} from 'react-icons/bi'
import './contact.css'
import Card from '../card/page'

function Contact() {
  return (
    <>
        <div id="contact" className=' pb-12 text-white mt-80 md:mt-44'>
            <p className=' contact-text text-center' >Contacte Me </p>
               <div className=" center md:flex justify-evenly"> 

                <Card>
                    <i className="linkedIn">
                            <LiaLinkedinIn className='icon-style linked-in-icon' size={40} />
                            <Link  className='icon-link' href='https://www.linkedin.com/in/pouya-behrooj-971618213/' >Pouya Behrooj</Link>
                    </i>
                </Card>
                
                <Card>
                    <i className="gmail">
                            <BiLogoGmail className='icon-style gmail-icon'  size={40} />
                            <Link  className='icon-link-gmail' href='mailto:pouyabh102@gmail.com' >pouyabh102@gmail.com</Link>
                        </i>
                </Card>

               </div>

              <div className="flex justify-center">
                <Card>
                    <i className="telegram">
                            <LiaTelegramPlane className='icon-style telegram-icon'  size={40} />
                            <Link className='icon-link' href='pouya339@telegram' >ID : Pouya339</Link>
                        </i>
                </Card>
              </div>
                
               
            
        </div>
    </>
  )
}

export default Contact