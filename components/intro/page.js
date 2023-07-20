import Image from 'next/image'
import Baymax from '../../public/baymax.png'
import SelfStudy from '../../public/self-study.jpg'
import './intro.css'

function Intro() {
  return (
    <>
        <div className="main grid grid-cols-2 ">
            <div className="intro flex justify-center items-center">
                Hello<br/>
                I'm Pouya Behrooj<br/>
               and I'm a junior web developer
            </div>
            <div className="img flex justify-center items-center">
               <div className="profile">
                <Image  src={Baymax} alt='profile' />
               </div>
            </div>
        </div>

        <div className="about-me md:grid grid-cols-2 mt-28 text-white">
                 <div className="img flex justify-center items-center">
                    <div className="self-study">
                        <Image className='rounded-full' src={SelfStudy} alt='self-study' />
                    </div>
                 </div>
                 <p className='about-txt text-center' > 
                    I'm a self study junior developer who want's to become a full stack one day.
                    I've been learning about front-end and backe-end and I keep learning about this field because I find it fascinating.
                 </p>
            </div>
    </>
  )
}

export default Intro