export default function About() {
  return (
    <>
      <section className="skills" id="skills">
        <article className="skills__desc">
          <h3>Experienced Across Multiple Projects and Technologies</h3>
          <p>
            Bringing creativity and technical proficiency to building responsive
            web applications and enhancing user experiences.
          </p>

          <div className="skills__actions">
            <button className="btn">Work With Me</button>
            <button className="btn btn--secondary">Send Email</button>
          </div>
        </article>

        <div className="skills__stats">
          <div className="skill__item">
            <i className="ri-codepen-line"></i>
            <div className="skill__info">
              <h5>Creative</h5>
              <p>JavaScript Projects</p>
            </div>
          </div>

          <div className="skill__item">
            <div className="skill__info">
              <h5>Designed</h5>
              <p>Remote Projects</p>
            </div>
            <i className="ri-reactjs-line"></i>
          </div>

          <div className="skill__item">
            <i className="ri-rocket-line"></i>
            <div className="skill__info">
              <h5>New</h5>
              <p>React Projects</p>
            </div>
          </div>

          <div className="skill__item">
            <div className="skill__info">
              <h5>Custom</h5>
              <p>Codepen Projects</p>
            </div>
            <i className="ri-remote-control-line"></i>
          </div>
        </div>
      </section>
    </>
  );
}
