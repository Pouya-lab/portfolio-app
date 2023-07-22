import Home from "@/components/home/page"
import Intro from "@/components/intro/page"
import Navbar from "@/components/navbar/page"
import Skills from '@/components/skills/page'
import Contact from '@/components/contact/page'
import "animate.css"

function page() {
  return (
    <>
      <div className="contain">
        <Navbar/>
        <Home/>
        <Intro/>
        <Skills/>
        <Contact/>
      </div>
    </>
  )
}

export default page