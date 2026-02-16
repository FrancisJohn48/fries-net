export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Your Name Here</h1>
        <p className="mb-2">Aspiring Nurse | Healthcare Advocate | Digital Health Champion</p>
        <p style={{fontSize: '1.1rem', fontStyle: 'italic'}}>
          "Compassionate care meets digital innovation"
        </p>
      </div>

      <div className="container">
        <section className="section">
          <h2>Who I Am & Who I Want to Be</h2>
          
          <div style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            <p>
              <strong>Hello!</strong> I am [Your Name], a [Your Grade/Year] student who is passionate about 
              pursuing a career in nursing. Ever since [describe a moment or experience that inspired you], 
              I knew that I wanted to dedicate my life to caring for others and making a difference in healthcare.
            </p>

            <h3>Why I Chose Nursing</h3>
            <p>
              Nursing is more than just a profession to me—it&apos;s a calling. I chose this career because:
            </p>
            <ul className="feature-list">
              <li>I have a deep desire to help people during their most vulnerable moments</li>
              <li>I want to be at the frontline of healthcare, directly impacting lives</li>
              <li>I believe in holistic care that treats not just the body, but the mind and spirit</li>
              <li>I am inspired by the resilience and dedication of Filipino nurses worldwide</li>
            </ul>

            <h3 style={{marginTop: '2rem'}}>My Mission Statement</h3>
            <div className="cta-box">
              <h3>&quot;To provide compassionate, evidence-based care while leveraging technology to improve patient outcomes and advocate for accessible healthcare for all Filipinos.&quot;</h3>
            </div>

            <h3>My Journey Ahead</h3>
            <p>
              As I prepare for my nursing career, I am committed to:
            </p>
            <ul className="feature-list">
              <li>Mastering both traditional nursing skills and modern digital health tools</li>
              <li>Understanding the unique healthcare challenges facing the Philippines</li>
              <li>Becoming a lifelong learner who stays updated with medical advancements</li>
              <li>Using my voice and platform to advocate for better healthcare access</li>
              <li>Upholding the highest standards of digital ethics and patient privacy</li>
            </ul>

            <div className="stat-box">
              <p><strong>Did you know?</strong> The Philippines is known as the world&apos;s leading source of 
              nurses, with over 150,000 Filipino nurses working abroad. I want to be part of this legacy 
              while also contributing to improving healthcare here at home.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>What You&apos;ll Find on This Website</h2>
          <div className="card-grid">
            <div className="card">
              <h3>🏥 ICT in Nursing</h3>
              <p>Discover how technology is revolutionizing healthcare and the digital tools I&apos;ll use as a nurse.</p>
            </div>
            <div className="card">
              <h3>💚 My Advocacy</h3>
              <p>Learn about my campaign to address a critical healthcare issue in the Philippines.</p>
            </div>
            <div className="card">
              <h3>📱 Social Media Impact</h3>
              <p>Explore how social media influences healthcare and how nurses can use it responsibly.</p>
            </div>
            <div className="card">
              <h3>🌐 Digital Citizenship</h3>
              <p>Understanding ethical practices, privacy, and professionalism in the digital age of nursing.</p>
            </div>
            <div className="card">
              <h3>🌏 Global Perspective</h3>
              <p>Comparing nursing and healthcare technology in the Philippines versus first-world countries.</p>
            </div>
            <div className="card">
              <h3>📧 Contact Me</h3>
              <p>Get in touch through professional channels and connect with my work.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}