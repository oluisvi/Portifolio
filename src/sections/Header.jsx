
export default function Header() {
  return (
    <>
    <nav className="navbar">
      <a href="#" className="navbar__logo" aria-label="Homepage logo">
        <i className="ri-code-s-slash-line"></i>
      </a>

      <article className="navbar__menu">
        <a href="#home" className="navbar__link">
          Home
        </a>
        <a href="#showcase" className="navbar__link">
          Projects
        </a>
        <a href="#skills" className="navbar__link">
          Skills
        </a>
        <a href="#about" className="navbar__link">
          About
        </a>
      </article>

      <article className="navbar__actions">
        <div className="navbar__location">
          <h5>Brazil, São Paulo, </h5>
        </div>
        <button className="btn">Get a Quote</button>
      </article>
    </nav>
    </>
    
  );
}
