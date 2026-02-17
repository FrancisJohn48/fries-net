export default function GlobalComparison() {
  return (
    <div className="container">
      <section className="section">
        <h2>Philippines vs First-World Countries: ICT in Nursing</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          How does nursing and healthcare technology in the Philippines compare to developed nations like
          the United States, United Kingdom, or Japan?
        </p>

        <h3>Comprehensive Comparison</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Philippines</th>
              <th>First-World Countries (US/UK/Japan)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Internet Penetration</strong></td>
              <td>67% of population (2024), Average 33 Mbps mobile</td>
              <td>90-95% penetration, 100+ Mbps average</td>
            </tr>
            <tr>
              <td><strong>Mobile Usage</strong></td>
              <td>76% access internet via smartphone, 10.5 hrs/day social media</td>
              <td>95%+ smartphone penetration, Advanced 5G networks</td>
            </tr>
            <tr>
              <td><strong>EHR Adoption</strong></td>
              <td>Limited in public hospitals, many still use paper records</td>
              <td>90%+ adoption, fully integrated systems</td>
            </tr>
            <tr>
              <td><strong>Digital Literacy</strong></td>
              <td>High social media literacy, lower health IT literacy</td>
              <td>Comprehensive digital training, regular upskilling</td>
            </tr>
            <tr>
              <td><strong>Telemedicine</strong></td>
              <td>Growing rapidly post-pandemic, limited in rural areas</td>
              <td>Well-established, insurance-covered, advanced monitoring</td>
            </tr>
            <tr>
              <td><strong>Healthcare Budget</strong></td>
              <td>3.6% of GDP on health (2023), ₱4,906 per capita</td>
              <td>US: 17%, UK: 10%, Japan: 11% of GDP</td>
            </tr>
            <tr>
              <td><strong>Nurse-to-Patient Ratio</strong></td>
              <td>1:20-40 in public hospitals</td>
              <td>US: 1:4-6, UK: 1:8, Japan: 1:7</td>
            </tr>
            <tr>
              <td><strong>Medical Equipment</strong></td>
              <td>Limited in public facilities, outdated equipment common</td>
              <td>Latest technology standard, full technical support</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{marginTop: '3rem'}}>How These Differences Affect My Career</h3>
        <div className="card-grid">
          <div className="card" style={{borderLeft: '4px solid var(--accent-color)'}}>
            <h3>🇵🇭 Challenges in the Philippines</h3>
            <ul>
              <li><strong>Limited Resources:</strong> May work with outdated equipment, requiring creativity</li>
              <li><strong>Higher Workload:</strong> Poor nurse-to-patient ratios increase stress and burnout risk</li>
              <li><strong>Technology Gaps:</strong> Less access to advanced medical technology</li>
              <li><strong>Manual Documentation:</strong> More time on paperwork without EHR systems</li>
              <li><strong>Lower Salaries:</strong> ₱15,000-25,000/month vs $50,000-80,000/year in US</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '4px solid var(--secondary-color)'}}>
            <h3>🌟 Opportunities in the Philippines</h3>
            <ul>
              <li><strong>Innovation from Scarcity:</strong> Filipino nurses are known for being resourceful</li>
              <li><strong>Growing Digital Health:</strong> Rapid adoption of telemedicine creates leadership opportunities</li>
              <li><strong>High Mobile Penetration:</strong> Leverage smartphones for patient education</li>
              <li><strong>Global Demand:</strong> Philippine conditions prepare nurses for international work</li>
              <li><strong>Making Big Impact:</strong> Small improvements help millions of underserved people</li>
            </ul>
          </div>
        </div>

        <h3 style={{marginTop: '3rem'}}>If I Practiced Nursing in the United States</h3>
        <div className="card-grid">
          <div className="card">
            <h3>Technology &amp; Resources</h3>
            <ul>
              <li>Access to latest medical equipment</li>
              <li>Fully digital EHR systems integrated across settings</li>
              <li>Automated medication dispensing and verification</li>
              <li>Comprehensive IT support available 24/7</li>
            </ul>
          </div>
          <div className="card">
            <h3>Work Environment</h3>
            <ul>
              <li>Better nurse-to-patient ratios (1:4-6 typically)</li>
              <li>More support staff (nursing assistants, clerks)</li>
              <li>Stronger labor protections and advocacy</li>
              <li>Mandatory break times and overtime regulations</li>
            </ul>
          </div>
          <div className="card">
            <h3>Compensation &amp; Benefits</h3>
            <ul>
              <li>Starting salary: $60,000-70,000/year (≈₱3.5M)</li>
              <li>Comprehensive health insurance</li>
              <li>Retirement benefits (401k)</li>
              <li>Paid time off and sick leave</li>
            </ul>
          </div>
          <div className="card">
            <h3>Challenges I&apos;d Face</h3>
            <ul>
              <li>High cost of living (rent, food, transport)</li>
              <li>Being away from family and Filipino community</li>
              <li>Cultural adjustment and potential discrimination</li>
              <li>Licensing requirements and credential verification</li>
            </ul>
          </div>
        </div>

        <div className="section" style={{backgroundColor: '#fff9e6', marginTop: '2rem'}}>
          <h3>Why Filipino Nurses Excel Globally</h3>
          <ul className="feature-list">
            <li><strong>Resourcefulness:</strong> Working with limited resources teaches creative problem-solving</li>
            <li><strong>Resilience:</strong> High-stress environments build mental toughness</li>
            <li><strong>Holistic Care:</strong> Filipino culture emphasizes treating the whole person</li>
            <li><strong>Compassion:</strong> &quot;Malasakit&quot; (genuine care) is ingrained in Filipino nursing</li>
            <li><strong>Adaptability:</strong> Experience in diverse settings prepares us for any environment</li>
            <li><strong>English Proficiency:</strong> Easy integration into English-speaking healthcare systems</li>
          </ul>
        </div>

        <div className="cta-box" style={{marginTop: '3rem'}}>
          <h3>My Commitment</h3>
          <ul style={{listStyle: 'none', padding: 0, marginTop: '1rem'}}>
            <li>✓ Leveraging technology to provide the best care possible</li>
            <li>✓ Advocating for better healthcare access for all Filipinos</li>
            <li>✓ Representing Filipino nurses with excellence and integrity</li>
            <li>✓ Contributing to improving Philippine healthcare systems</li>
            <li>✓ Never forgetting where I came from and giving back to my community</li>
          </ul>
        </div>
      </section>
    </div>
  )
}