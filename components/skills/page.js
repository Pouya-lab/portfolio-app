"use client"

import { useRef , useEffect , useState } from 'react'
import { useInView } from 'react-intersection-observer';
import './skills.css'

function Skills() {

  const { ref : myRef, inView : isVisible, entry } = useInView();

  // const myRef = useRef()
  // const [ isVisible , setIsVisible ] = useState()
  // console.log('isVisible' , isVisible );

  // useEffect(()=>{
  //   const observer = new IntersectionObserver((entries)=>{
  //     const entry = entries[0]
  //     setIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // } , [])

  return (
    <>
        <div ref={myRef} id='skills' className="progress-skills text-white mt-32 xl:grid grid-cols-2">
            { isVisible ? (
            <>
              <div  className='section-1 '>
              <label >HTML</label>
              <div class="progress">
                <div class="progress-value-html">
                </div>
              </div>

              <label >Tailwind</label>
              <div class="progress">
                  <div class="progress-value-tailwind">
                  </div>
                </div>

                <label >React JS</label>
              <div class="progress">
                  <div class="progress-value-react">
                  </div>
                </div>

                <label >Mongo DB</label>
              <div class="progress">
                  <div class="progress-value-mongo">
                  </div>
                </div>

            </div>
            <div className='section-2 flex-col justify-center items-center' >

              <label >CSS</label>
              <div class="progress">
                  <div class="progress-value-css">
                  </div>
                </div>

              <label >Java Script</label>
              <div class="progress">
                  <div class="progress-value-js">
                  </div>
                </div>

              <label >Next JS</label>
              <div class="progress">
                  <div class="progress-value-next">
                  </div>
                </div>

                <label >Express JS</label>
              <div class="progress">
                  <div class="progress-value-express">
                  </div>
                </div>
            </div>
            </>) : "" }
        </div>
       
    </>
  )
}

export default Skills