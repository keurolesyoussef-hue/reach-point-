/* ═══════════════════════════════════════════════════
   REACHPOINT — Shared Layout (Nav + Footer)
   Include BEFORE main.js on every page
═══════════════════════════════════════════════════ */

/* ── Inject Navigation ───────────────────────────── */
document.body.insertAdjacentHTML('afterbegin', `
<div class="red-line-top"></div>

<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Reach<span>Point</span></a>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="packages.html">Packages</a></li>
      <li><a href="testimonials.html">Testimonials</a></li>
    </ul>

    <a href="contact.html" class="nav-cta">Contact Us</a>

    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<nav class="nav-mobile">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="packages.html">Packages</a>
  <a href="testimonials.html">Testimonials</a>
  <a href="contact.html">Contact</a>
</nav>
`);

/* ── Inject Footer ───────────────────────────────── */
document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">Reach<span style="color:#B52420">Point</span></a>
        <span class="tagline" style="display:block;margin:8px 0 16px">Where Ideas Reach.</span>
        <p>Full-service media production and social media agency. We turn ideas into content that moves people and builds brands.</p>
        <div class="footer-social">
          <a href="https://wa.me/201507077974" target="_blank" title="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
          <a href="https://instagram.com/reachpoint" target="_blank" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://tiktok.com/@reachpoint" target="_blank" title="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z"/></svg>
          </a>
          <a href="https://facebook.com/reachpoint" target="_blank" title="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Pages</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="packages.html">Packages</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="services.html">Video Production</a></li>
          <li><a href="services.html">Post Production</a></li>
          <li><a href="services.html">Social Media Mgmt</a></li>
          <li><a href="services.html">Content Writing</a></li>
          <li><a href="services.html">Brand Identity</a></li>
          <li><a href="services.html">Storyboard & Direction</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Contact</h5>
        <ul>
          <li><a href="tel:+201507077974">01507077974</a></li>
          <li><a href="https://wa.me/201507077974" target="_blank">WhatsApp Us</a></li>
          <li><a href="contact.html">Get a Proposal</a></li>
          <li><a href="https://reachpoint.co" target="_blank">reachpoint.co</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 ReachPoint. All rights reserved.</p>
      <p style="color:var(--cream-low);font-size:13px">Where Ideas Reach.</p>
    </div>
  </div>
</footer>

<div class="red-line-bottom"></div>
`);
