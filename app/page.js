import Home from "@/components/home/page"
import Intro from "@/components/intro/page"
import Navbar from "@/components/navbar/page"
import Skills from '@/components/skills/page'

function page() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Intro/>
      <Skills/>
    </>
  )
}

export default page