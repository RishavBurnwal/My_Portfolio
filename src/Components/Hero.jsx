import "../Styles/Hero.css"
import profile from '../assets/myprofile.jpg'

function Hero() {
  return (
    <>
    
      <section className="hero-section">
        <div className="hero-container">
          <div className="profile-image">
            <img 
              src={profile} 
              alt="Profile" 
            />
          </div>
          
          <div className="hero-content">
            <h1>Hi, I'm Rishav Burnwal</h1>
            <h2><b>Software Developer</b></h2>
            <p>I am a Software Developer specializing in building scalable, efficient, and user-friendly web applications using modern technologies.</p>
            <div>
                <a href="../assets/My_Resume.pdf" class="primary" download>Resume </a>
                <a href="#contact" class="secondary"> Contact Me</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Hero