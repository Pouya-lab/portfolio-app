import Image from 'next/image'
import SelfStudy from '../../public/self-study.jpg'
import './intro.css'

function Intro() {
  return (
    <>
        <div id='intro' className="about-me md:grid grid-cols-2 mt-28 text-white">
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