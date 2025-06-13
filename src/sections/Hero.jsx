/* eslint-disable react/no-unescaped-entities */


export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Homepage hero section">
      <div className="hero__content">
        <figure className="hero__image-wrapper">
          <img
            src="../assets/profile.jpg"
            alt="Profile image of Luís Henrique"
            className="hero__image"
          />
        </figure>
        <h1>Hello! I'm Luís Henrique</h1>
      </div>

      <article className="hero__intro">
        <h2>Front-end Developer and UX Designer from São Paulo, Brazil</h2>
        <p>
          Crafting intuitive and high-performance web interfaces for digital
          solutions.
        </p>
        <div className="hero__actions">
          <button className="btn">Work With Me</button>
          <button className="btn btn--secondary">See My Portfolio</button>
        </div>
      </article>

      <nav className="hero__socials" aria-label="Social media links">
        <a
          href="https://www.instagram.com/oluisvi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="ri-instagram-line" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/oluisvi/Portifolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="ri-github-line" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/oluisvi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="ri-linkedin-box-line" aria-hidden="true"></i>
        </a>
      </nav>
    </section>
  );
}
