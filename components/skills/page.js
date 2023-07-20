
import './skills.css'

function Skills() {
  return (
    <>
        <div id='skills' className="progress-skills text-white mt-32 md:grid grid-cols-2">

            <div className='section-1 '>

              <label >HTML</label>
              <div class="progress">
                <div class="progress-value-html"></div>
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
        </div>
       
    </>
  )
}

export default Skills