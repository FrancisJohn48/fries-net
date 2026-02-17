export default function DigitalCitizenship() {
  return (
    <div className="container">
      <section className="section">
        <h2>Digital Citizenship in My Nursing Career</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          As a future nurse in an increasingly digital world, practicing good digital citizenship is not optional—it&apos;s
          a professional and ethical responsibility.
        </p>

        <div className="hero" style={{marginBottom: '2rem'}}>
          <h1 style={{fontSize: '1.8rem'}}>My Digital Citizenship Pledge</h1>
          <p>I commit to being a responsible, ethical, and professional digital citizen throughout my nursing career.</p>
        </div>

        <h3>1. Digital Etiquette: Professional Communication Online</h3>
        <div className="card-grid">
          <div className="card">
            <h3>With Patients</h3>
            <ul>
              <li>Use respectful, clear language in all communication</li>
              <li>Respond to messages in a timely, professional manner</li>
              <li>Maintain appropriate boundaries (no personal relationships)</li>
              <li>Use secure, approved platforms only</li>
              <li>Never discuss patient care details over unsecured channels</li>
            </ul>
            <p><strong>Example:</strong> If a patient messages me on social media, I politely direct them
            to official hospital communication channels or scheduled appointments.</p>
          </div>
          <div className="card">
            <h3>With Colleagues</h3>
            <ul>
              <li>Communicate respectfully even during disagreements</li>
              <li>Use professional tone in emails and messages</li>
              <li>Avoid gossiping or complaining about coworkers online</li>
              <li>Give credit where due and acknowledge contributions</li>
              <li>Support colleagues publicly, address concerns privately</li>
            </ul>
          </div>
          <div className="card">
            <h3>In Public Forums</h3>
            <ul>
              <li>Identify myself and credentials when giving health information</li>
              <li>Clearly state when I&apos;m sharing personal opinion vs. medical fact</li>
              <li>Respond to criticism with grace and professionalism</li>
              <li>Avoid inflammatory language or personal attacks</li>
              <li>Know when to disengage from unproductive conversations</li>
            </ul>
          </div>
        </div>

        <h3 style={{marginTop: '3rem'}}>2. Data Privacy &amp; Patient Confidentiality</h3>
        <div className="card-grid">
          <div className="card" style={{border: '2px solid var(--accent-color)'}}>
            <h3>🔒 The Sacred Trust</h3>
            <p><strong>What I WILL NOT Do:</strong></p>
            <ul>
              <li>Take photos or videos in patient care areas</li>
              <li>Share patient stories, even &quot;anonymized&quot; ones</li>
              <li>Access patient records out of curiosity</li>
              <li>Share login credentials or leave computers unlocked</li>
            </ul>
            <p><strong>What I WILL Do:</strong></p>
            <ul>
              <li>Follow hospital privacy policies strictly</li>
              <li>Use secure, encrypted communication for patient information</li>
              <li>Report privacy breaches immediately</li>
              <li>Educate patients about their privacy rights</li>
            </ul>
          </div>
          <div className="card" style={{border: '2px solid var(--accent-color)'}}>
            <h3>🛡️ Protecting My Own Data</h3>
            <ul>
              <li>Use strong, unique passwords for all accounts</li>
              <li>Enable two-factor authentication</li>
              <li>Be cautious about what personal information I share online</li>
              <li>Regularly review privacy settings on social media</li>
              <li>Be wary of phishing attempts and scams</li>
              <li>Keep software and devices updated for security</li>
            </ul>
          </div>
        </div>

        <div className="stat-box" style={{marginTop: '2rem'}}>
          <p><strong>Philippine Context:</strong> The Data Privacy Act of 2012 (Republic Act No. 10173)
          protects personal data in the Philippines. Violations can result in imprisonment and fines up to ₱5 million.</p>
        </div>

        <h3 style={{marginTop: '3rem'}}>3. Avoiding &amp; Combating Misinformation</h3>
        <table className="comparison-table">
          <thead>
            <tr><th>Myth</th><th>Truth</th><th>My Response</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>&quot;Antibiotics cure colds and flu&quot;</td>
              <td>Antibiotics only work on bacteria, not viruses</td>
              <td>Educate about appropriate antibiotic use and dangers of resistance</td>
            </tr>
            <tr>
              <td>&quot;Natural/herbal is always safe&quot;</td>
              <td>Natural doesn&apos;t mean safe; herbs can have side effects</td>
              <td>Encourage patients to inform doctors about all remedies they use</td>
            </tr>
            <tr>
              <td>&quot;Vaccines cause more harm than good&quot;</td>
              <td>Vaccines are safe, effective, and save millions of lives</td>
              <td>Share evidence, address concerns with empathy, explain science clearly</td>
            </tr>
            <tr>
              <td>&quot;Only see a doctor when you&apos;re sick&quot;</td>
              <td>Preventive care and regular checkups are crucial</td>
              <td>Promote wellness visits, screenings, and early detection</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{marginTop: '3rem'}}>4. Real-World Scenarios</h3>
        <div className="section" style={{backgroundColor: '#fff9e6', border: '2px solid #ffd700'}}>
          <h3>Scenario 1: The Viral Post</h3>
          <p><strong>Situation:</strong> I see a viral Facebook post claiming &quot;Oregano oil cures diabetes!&quot;</p>
          <ol style={{paddingLeft: '1.5rem'}}>
            <li>Do NOT share the post</li>
            <li>Research the claim from medical sources (it&apos;s false)</li>
            <li>Create my own post correcting the information with evidence-based sources</li>
            <li>Encourage people to consult healthcare providers before trying &quot;cures&quot;</li>
          </ol>
        </div>
        <div className="section" style={{backgroundColor: '#e6f7ff', border: '2px solid #1890ff', marginTop: '1rem'}}>
          <h3>Scenario 2: The Tempting Photo</h3>
          <p><strong>Situation:</strong> I witness an interesting medical case and want to share it for educational purposes.</p>
          <ol style={{paddingLeft: '1.5rem'}}>
            <li>STOP. Never photograph patients or patient information</li>
            <li>If discussing a case for learning, anonymize completely</li>
            <li>Better yet: find published case studies or stock images instead</li>
            <li>Always prioritize patient privacy over getting likes or engagement</li>
          </ol>
        </div>
        <div className="section" style={{backgroundColor: '#ffe6f0', border: '2px solid #ff4d6d', marginTop: '1rem'}}>
          <h3>Scenario 3: The Negative Comment</h3>
          <p><strong>Situation:</strong> Someone attacks me personally in response to health information I shared.</p>
          <ol style={{paddingLeft: '1.5rem'}}>
            <li>Take a breath. Don&apos;t respond emotionally</li>
            <li>If legitimate concern: respond professionally with more information</li>
            <li>If trolling: don&apos;t engage. Block/report if necessary</li>
            <li>Remember: my response represents the nursing profession</li>
          </ol>
        </div>

        <div className="cta-box" style={{marginTop: '3rem'}}>
          <h3>My Digital Citizenship Oath</h3>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            I pledge to use technology ethically and responsibly in my nursing career. I will protect patient
            privacy absolutely, share only verified health information, communicate professionally in all digital
            spaces, and represent the nursing profession with integrity.
          </p>
        </div>
      </section>
    </div>
  )
}