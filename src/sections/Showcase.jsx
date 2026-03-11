export default function Showcase() {
  const projects = [
    {
      title: "Shop.co E-commerce",
      date: "March 2025",
      image: "assets/shop-co.png",
      description:
        "Creating a sleek, fully responsive e-commerce platform that showcases products with clarity and style, offering customers a seamless shopping experience from browsing to checkout.",
      link: "https://shop-co-ecommerce-three.vercel.app/",
    },
    {
      title: "Foods Project",
      date: "February 2025",
      image: "assets/foods.png",
      description:
        "Developing a clean, user-friendly platform that streamlines food management and showcases curated recipes, helping users discover, organize, and enjoy their favorite meals with ease.",
      link: "https://foodsprojectdemo.netlify.app/",
    },
    {
      title: "UrbanFarme",
      date: "March 2026",
      image: "assets/urbanFarm.png",
      description:
        "Fully compatible web, desktop and mobile urban farm management system, integrated to a database via self made API for the project, deployed totally online.",
      link: "https://https://fazenda-urbana.onrender.com/",
    },
    {
      title: "Gallery",
      date: "May 2025",
      image: "assets/Gallery.jpeg",
      description:
       "Developing a dynamic image gallery powered by an external API, designed to deliver responsive layouts, fluid browsing, and visually engaging user interaction.",
      link: "https://gallery-sigma-one-89.vercel.app/",
    },
    {
      title: "Terras Mil",
      date: "November 2024",
      image: "assets/fazenda.jpeg",
      description:
        "Website developed as a management dashboard for an Urban Farm, providing coworkers with real-time insights into the farm’s operations and processes.",
      link: "https://terras-mil.netlify.app/",
    },
     ,
     {
      title: "Form",
      date: "May 2025",
      image: "assets/Form.jpeg",
      description:
        "Building an intuitive and accessible form interface that streamlines user input, validates data in real-time, and ensures a smooth submission experience across all devices.",
      link: "https://form-eight-sepia.vercel.app/",
    }
  ];

  return (
    <>
      <section className="showcase">
      {/* Cabeçalho */}
      <div className="showcase__header" id="showcase">
        <h3>My Projects:</h3>
        <button className="btn">See My Work</button>
      </div>

      <div className="showcase_categories">
        <section className="category">
          {/* Descrição da categoria */}
          <div className="category__header">
            <div className="category__title">
              <i className="ri-macbook-line"></i>
              <h4>Portfolio Projects</h4>
            </div>
            <div className="category__desc">
              <p>
                Building interactive, visually and engaging user interfaces.
              </p>
              <a href="#"><i className="ri-share-circle-line"></i></a>
            </div>
          </div>

          {/* Projetos renderizados dinamicamente */}
          <div className="category__projects">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-card__image" />
                <div className="project-card__info">
                  <h5>{project.title}</h5>
                  <p>{project.date}</p>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <a
                  className="btn"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
    </>
  );
}
