import Baymax from '../../public/baymax.png'
import Image from 'next/image'
import './home.css'

function Home() {
  return (
    <>
        <div id='home' className="main grid grid-cols-2 ">
            <div className="animate__animated animate__backInUp home flex justify-center items-center text-white md:mt-40 ">
                Hello
                <br/>
                I'm Pouya Behrooj<br/>
               and I'm a junior web developer
            </div>
            <div className="img flex justify-center items-center">
               <div className=" profile">
                <Image  src={Baymax} alt='profile' />
               </div>
            </div>
        </div>
    </>
  )
}

export default Home