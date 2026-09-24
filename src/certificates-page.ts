import './style.css'
import { certificates } from './certificates-data'

document.querySelector<HTMLDivElement>('#certificate-library')!.innerHTML = `
  <header class="certificate-library-header">
    <a class="certificate-library-brand" href="/" aria-label="Razi Ashary portfolio home"><span class="monogram">RA</span><span>RAZI ASHARY<span>AI RESEARCHER &amp; DEVELOPER</span></span></a>
    <a class="certificate-library-back" href="/#certificates">← BACK TO PORTFOLIO</a>
  </header>
  <main class="certificate-library-main" id="all-certificates">
    <div class="certificate-library-intro">
      <p class="section-label"><span>LEARNING &amp; DEVELOPMENT</span> · ${String(certificates.length).padStart(2, '0')} CERTIFICATES</p>
      <h1>Certificates<span class="heading-dot">.</span></h1>
      <p>Courses and credentials across AI, machine learning, data, web development and prompt engineering. Select a thumbnail to open the full certificate.</p>
    </div>
    <div class="certificate-library-grid">
      ${certificates.map((certificate, index) => `<article class="certificate-library-card"><a class="certificate-library-image" href="/certificates/${certificate.image}" target="_blank" rel="noreferrer" aria-label="Open ${certificate.title} certificate at full size"><img src="/certificates/${certificate.image}" alt="${certificate.title} certificate issued by ${certificate.issuer}" loading="lazy" /><span>OPEN FULL SIZE <b aria-hidden="true">↗</b></span></a><div class="certificate-library-copy"><span class="certificate-index">CERTIFICATE ${String(index + 1).padStart(2, '0')}</span><h2>${certificate.title}</h2><p>${certificate.issuer}</p></div></article>`).join('')}
    </div>
  </main>
  <footer class="certificate-library-footer"><a href="/#certificates">← Return to portfolio</a><span>RAZI ASHARY · ${String(certificates.length).padStart(2, '0')} CERTIFICATES</span></footer>
`
