// ── SITE CONFIG ── edit these to rebrand the whole site.
const SITE = {
  NAME: 'Coastline Referral Co.',
  SHORT: 'C',
  TAGLINE: 'South Surrey · White Rock · Langley',
  EMAIL: 'hello@example.com',
  PHONE: '',
  // Optional POST endpoint (Formspree, Basin, Google Apps Script…). Empty = open a pre-filled email.
  FORM_ENDPOINT: '',
};

const PAGES = [
  { href: 'referral-network.html', label: 'Referral Network' },
  { href: 'smart-system.html', label: '24/7 Smart System' },
  { href: 'consulting.html', label: 'Consulting' },
  { href: 'index.html#faq', label: 'FAQ' },
];

(function renderChrome() {
  const here = location.pathname.split('/').pop() || 'index.html';
  const links = PAGES.map(p =>
    `<li><a href="${p.href}"${p.href === here ? ' aria-current="page"' : ''}>${p.label}</a></li>`).join('');

  document.getElementById('site-nav').outerHTML = `
    <nav>
      <div class="wrap nav-inner">
        <a href="index.html" class="logo">
          <div class="logo-icon">${SITE.SHORT}</div>
          <div class="logo-text">${SITE.NAME}<span>${SITE.TAGLINE}</span></div>
        </a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="nav-links">Menu</button>
        <ul class="nav-links" id="nav-links">
          ${links}
          <li><a href="book.html" class="btn btn-primary">Book a call</a></li>
        </ul>
      </div>
    </nav>`;

  document.getElementById('site-footer').outerHTML = `
    <footer>
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <div class="logo-text" style="color:#fff;margin-bottom:0.6rem">${SITE.NAME}</div>
            <p>Done-for-you referral networks and automation for home service businesses in South Surrey, White Rock and Langley.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>${PAGES.slice(0, 3).map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:${SITE.EMAIL}">${SITE.EMAIL}</a></li>
              ${SITE.PHONE ? `<li><a href="tel:${SITE.PHONE.replace(/[^\d+]/g, '')}">${SITE.PHONE}</a></li>` : ''}
              <li><a href="book.html">Book a strategy call</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${SITE.NAME}. All rights reserved.</span>
          <span>Proudly local to the Semiahmoo Peninsula &amp; Langley.</span>
        </div>
      </div>
    </footer>`;

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('[data-site="name"]').forEach(el => { el.textContent = SITE.NAME; });
})();

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const status = form.querySelector('.form-status');
  const data = new FormData(form);
  const subject = `Strategy call request: ${data.get('business') || data.get('name')}`;

  if (SITE.FORM_ENDPOINT) {
    data.append('_subject', subject);
    try {
      const res = await fetch(SITE.FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      status.textContent = 'Thanks! We\'ll be in touch within one business day to lock in a time.';
    } catch (err) {
      status.textContent = `Something went wrong. Please email us at ${SITE.EMAIL}.`;
    }
  } else {
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    location.href = `mailto:${SITE.EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email app should open with your details filled in. Just hit send.';
  }
  status.classList.add('show');
}
document.querySelectorAll('form[data-form]').forEach(f => f.addEventListener('submit', handleSubmit));
