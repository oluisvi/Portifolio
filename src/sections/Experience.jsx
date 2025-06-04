/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */

export default function(){
  return(
    <>
    <section className="career">
      <section className="career__jobs">
        <h3 id="about">Work Experience</h3>

        <article className="job">
          <i className="ri-pen-nib-line"></i>
          <div className="job__info">
            <h5>
              Fullstack Developer at <span>Compass UOL</span>
            </h5>
            <p>October 2024 - April 2025</p>
          </div>
        </article>

        <article className="job">
          <i className="ri-reactjs-fill"></i>
          <div className="job__info">
            <h5>
              Front-End Developer as <span>Freelancer</span>
            </h5>
            <p>April 2024 – Present</p>
          </div>
        </article>
      </section>

      <section className="career__awards">
        <h3>Certificates</h3>

        <article className="award">
          <div>
            <i className="ri-medal-fill"></i>
            <div className="award__info">
              <h5>
                GenAI Technical Certification <span>Compass UOL</span>
              </h5>
              <p>October 2024</p>
            </div>
          </div>
        </article>

        <article className="award">
          <div>
            <i className="ri-javascript-line"></i>
            <div className="award__info">
              <h5>
                AI-Assisted Certified Professional <span>Compass UOL</span>
              </h5>
              <p>October 2024</p>
            </div>
          </div>
        </article>
      </section>
    </section>
    </>
    
  )
}
