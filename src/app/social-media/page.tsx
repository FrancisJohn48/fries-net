export default function SocialMedia() {
  return (
    <div className="container">
      <section className="section">
        <h2>Social Media Power Analysis: Impact on Nursing</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Social media has fundamentally transformed how nurses communicate, learn, advocate, and interact
          with patients and the public. Understanding both its benefits and risks is essential for modern nursing practice.
        </p>

        <div className="stat-box">
          <p><strong>Philippine Context:</strong> With 89 million active social media users (81% of the population),
          the Philippines averages 10 hours and 27 minutes of social media use daily—making it a powerful platform
          for health communication.</p>
        </div>

        <h3 style={{marginTop: '2rem'}}>Benefits of Social Media for Nurses</h3>
        <div className="card-grid">
          <div className="card">
            <h3>📢 Public Health Awareness</h3>
            <ul>
              <li>COVID-19 vaccination campaigns reaching millions</li>
              <li>Dengue prevention tips during outbreak seasons</li>
              <li>Maternal health education for pregnant mothers</li>
              <li>First aid tutorials that can save lives</li>
            </ul>
          </div>
          <div className="card">
            <h3>🎓 Professional Education &amp; Networking</h3>
            <ul>
              <li><strong>LinkedIn:</strong> Professional networking, job opportunities</li>
              <li><strong>Facebook Groups:</strong> &quot;Filipino Nurses Worldwide&quot; (200k+ members)</li>
              <li><strong>Instagram:</strong> Following medical education accounts</li>
              <li><strong>YouTube:</strong> Clinical skills videos and lectures</li>
            </ul>
          </div>
          <div className="card">
            <h3>💪 Advocacy &amp; Policy Change</h3>
            <ul>
              <li>#NursesDeserveBetter - Better working conditions</li>
              <li>#SafeStaffingRatio - Patient safety advocacy</li>
              <li>#ProtectHealthWorkers - During COVID-19</li>
              <li>#MentalHealthMatters - Breaking stigma</li>
            </ul>
          </div>
          <div className="card">
            <h3>❤️ Patient Engagement &amp; Education</h3>
            <ul>
              <li>Sharing disease management tips</li>
              <li>Answering common health questions</li>
              <li>Debunking medical myths and misinformation</li>
              <li>Providing emotional support to chronic disease communities</li>
            </ul>
          </div>
          <div className="card">
            <h3>🌍 Community Building</h3>
            <ul>
              <li>Sharing experiences and coping strategies</li>
              <li>Finding mentorship and career guidance</li>
              <li>Celebrating wins and supporting through challenges</li>
              <li>Reducing isolation for overseas Filipino nurses</li>
            </ul>
          </div>
          <div className="card">
            <h3>📈 Crisis Response &amp; Mobilization</h3>
            <ul>
              <li>Organizing volunteer nurses during natural disasters</li>
              <li>Sharing real-time updates during health crises</li>
              <li>Coordinating blood donation drives</li>
              <li>Fundraising for medical equipment or patient support</li>
            </ul>
          </div>
        </div>

        <h3 style={{marginTop: '3rem'}}>Risks &amp; Challenges</h3>
        <div className="card-grid">
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>⚠️ Patient Privacy Violations</h3>
            <ul>
              <li>Posting patient photos without consent</li>
              <li>Sharing &quot;interesting cases&quot; with identifying details</li>
              <li>Taking photos in clinical areas showing patient information</li>
            </ul>
            <p><strong>Consequences:</strong> License suspension, legal action, job termination.</p>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>📰 Misinformation Spread</h3>
            <ul>
              <li>Unverified &quot;miracle cures&quot; going viral</li>
              <li>Anti-vaccine misinformation</li>
              <li>Fake health statistics</li>
              <li>Misleading clickbait health articles</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>👥 Cancel Culture &amp; Reputation</h3>
            <ul>
              <li>Employers screen social media during hiring</li>
              <li>Old posts can resurface years later</li>
              <li>One mistake can go viral and define you</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>🔒 Cybersecurity &amp; Scams</h3>
            <ul>
              <li>Phishing attempts targeting healthcare workers</li>
              <li>Identity theft</li>
              <li>Fake job offers and scams</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>😰 Mental Health Impact</h3>
            <ul>
              <li>Compassion fatigue from constant exposure to suffering</li>
              <li>Cyberbullying and harassment</li>
              <li>Comparison culture and imposter syndrome</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>⚖️ Boundary Violations</h3>
            <ul>
              <li>Adding patients as friends on personal accounts</li>
              <li>Engaging in private messaging with patients</li>
              <li>Blurring professional and personal boundaries</li>
            </ul>
          </div>
        </div>

        <h3 style={{marginTop: '3rem'}}>My Personal Social Media Guidelines</h3>
        <div className="card-grid">
          <div className="card">
            <h3>What I WILL Do:</h3>
            <ul>
              <li>Share evidence-based health information</li>
              <li>Celebrate nursing profession and achievements</li>
              <li>Support fellow nurses and healthcare workers</li>
              <li>Advocate for patient safety and healthcare access</li>
              <li>Think carefully before posting anything</li>
            </ul>
          </div>
          <div className="card">
            <h3>What I WILL NOT Do:</h3>
            <ul>
              <li>Post patient information or photos</li>
              <li>Share unverified health claims</li>
              <li>Engage in online arguments</li>
              <li>Complain about patients or workplace publicly</li>
              <li>Blur professional boundaries</li>
            </ul>
          </div>
        </div>

        <div className="cta-box" style={{marginTop: '3rem'}}>
          <h3>Remember: Social Media is Forever</h3>
          <p>What you post today can affect your career tomorrow. Screenshots exist forever. Think twice, post once.</p>
          <p style={{marginTop: '1rem', fontSize: '1.1rem'}}>
            <strong>Golden Rule:</strong> Don&apos;t post anything you wouldn&apos;t want your patients,
            employer, or professional licensing board to see.
          </p>
        </div>
      </section>
    </div>
  )
}