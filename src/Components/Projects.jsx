import '../Styles/Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Credit Card Financial Dashboard',
      description: 'A Power BI dashboard designed to help users analyze and visualize credit card financial data.',
      image: 'https://www.bconcepts.pt/wp-content/uploads/2023/07/PowerBIBestPractices-600x313.jpg',
      technologies: ['PowerBI', 'MS Excel', 'SQL'],
      githubLink: 'https://github.com/RishavBurnwal/Credit_Card_Financial_Dashboard'
    },
    {
      title: 'Movie Recommendataion System',
      description: 'Movie recommendation app with personalized suggestions, enhanced user experience',
      image: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/260394461/original/47ffb94567ba58485b8f93d5f35d5189eca1631b/movie-recommendation-system-using-ml-algo.jpg',
      technologies: ['React', 'API', 'CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Online Book store Management System',
      description: 'Bookstore management system with inventory tracking, enhanced user experience',
      image: 'https://shop.signimus.com/wp-content/uploads/2024/05/library-1.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <>  
      
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link github-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects