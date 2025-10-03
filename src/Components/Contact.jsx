import '../Styles/Contact.css'

function Contact() {

  return (
    <>
      
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">Let's work together! Fill out the form below.</p>
          
          <form className="contact-form" action="https://formspree.io/f/mpwyrjvz" method='POST'>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="Your name"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder="your.email@example.com"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input" 
                placeholder="+91 123 456 7890"
                required 
              />
            </div>
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact