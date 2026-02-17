export default function Contact() {
  return (
    <div className="container">
      <section className="section">
        <h2>Contact &amp; Connect</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          I&apos;d love to connect with fellow nursing students, healthcare professionals, or anyone interested in
          healthcare advocacy. Please feel free to reach out through the following professional channels.
        </p>

        <div className="hero" style={{marginBottom: '3rem'}}>
          <h1 style={{fontSize: '2rem'}}>Let&apos;s Connect Professionally</h1>
          <p>Building a network of passionate healthcare advocates</p>
        </div>

        <h3>Professional Contact Information</h3>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p style={{color: 'var(--primary-color)', fontWeight: '500'}}>nurse.jordan.demo@gmail.com</p>
              <p style={{fontSize: '0.9rem', color: '#666'}}>Professional inquiries only</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <h4>LinkedIn</h4>
              <p style={{color: 'var(--primary-color)', fontWeight: '500'}}>linkedin.com/in/jordan-reyes-rnstudent</p>
              <p style={{fontSize: '0.9rem', color: '#666'}}>Professional networking</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h4>Professional Instagram</h4>
              <p style={{color: 'var(--primary-color)', fontWeight: '500'}}>@carewithjordan.rn</p>
              <p style={{fontSize: '0.9rem', color: '#666'}}>Health education &amp; advocacy</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🐦</div>
            <div>
              <h4>Twitter/X</h4>
              <p style={{color: 'var(--primary-color)', fontWeight: '500'}}>@NursejordanPH</p>
              <p style={{fontSize: '0.9rem', color: '#666'}}>Healthcare discussions &amp; news</p>
            </div>
          </div>
        </div>

        <div className="section" style={{marginTop: '3rem', backgroundColor: 'var(--bg-light)'}}>
          <h3>⚠️ Important Communication Disclaimer</h3>
          <div className="stat-box">
            <p><strong>Professional Boundaries:</strong> I maintain strict professional boundaries in all online interactions:</p>
            <ul style={{marginTop: '1rem'}}>
              <li>I do not provide individual medical advice through social media or email</li>
              <li>General health information I share is for educational purposes only</li>
              <li>For medical concerns, please consult with your healthcare provider</li>
              <li>All communication will be respectful, professional, and appropriate</li>
            </ul>
          </div>
          <div className="stat-box">
            <p><strong>Privacy &amp; Confidentiality:</strong> I take privacy seriously. Any information shared with me
            will be kept confidential. I comply with all data privacy laws and professional ethics guidelines.</p>
          </div>
        </div>

        <h3 style={{marginTop: '3rem'}}>What I&apos;m NOT Available For</h3>
        <div className="section" style={{backgroundColor: '#fff0f0', border: '2px solid var(--accent-color)'}}>
          <ul className="feature-list">
            <li>Individual medical advice or diagnosis</li>
            <li>Prescription or medication recommendations</li>
            <li>Emergency medical situations (call 911 immediately!)</li>
            <li>Personal counseling or therapy sessions</li>
            <li>Unprofessional or inappropriate conversations</li>
          </ul>
        </div>

        <h3 style={{marginTop: '3rem'}}>Emergency Resources</h3>
        <div className="section" style={{backgroundColor: '#e8f5e9'}}>
          <div className="card-grid">
            <div className="card">
              <h4>🚨 Medical Emergency</h4>
              <p><strong>Emergency Hotline:</strong> 911</p>
              <p><strong>Red Cross:</strong> (02) 8790-2300</p>
              <p><strong>NDRRMC:</strong> (02) 8911-1406</p>
            </div>
            <div className="card">
              <h4>💚 Mental Health Crisis</h4>
              <p><strong>NCMH Crisis Hotline:</strong> 0917-899-8727</p>
              <p><strong>In Touch:</strong> (02) 8893-7603</p>
              <p><strong>Hopeline:</strong> 0917-558-4673</p>
            </div>
            <div className="card">
              <h4>🏥 Health Information</h4>
              <p><strong>DOH Hotline:</strong> 1555</p>
              <p><strong>Philippine Red Cross:</strong> 143</p>
              <p><strong>PhilHealth:</strong> (02) 8441-7442</p>
            </div>
          </div>
        </div>

        <div className="cta-box" style={{marginTop: '3rem'}}>
          <h3>Let&apos;s Build a Healthier Philippines Together</h3>
          <p style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem'}}>
            Professional inquiries welcome. Let&apos;s make a difference! 💚
          </p>
        </div>

        <div style={{marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', textAlign: 'center'}}>
          <p style={{fontSize: '0.9rem', color: '#666'}}>
            <strong>Website Disclaimer:</strong> This website is created as part of an educational project for ICT coursework.
            All health information is based on credible sources. This site does not replace professional medical advice.
          </p>
        </div>
      </section>
    </div>
  )
}