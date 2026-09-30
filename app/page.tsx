"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays, Car, Check, ChevronDown, Clock3, Compass, HandHeart,
  Heart, House, MapPin, Menu, Phone, ShieldCheck, Sparkles, SunMedium,
  Users, UtensilsCrossed, X,
} from "lucide-react";

const phoneDisplay = "772-722-0176";
const phoneHref = "tel:+17727220176";

const services = [
  { icon: Users, title: "Companion Care", description: "Meaningful company and everyday support that helps clients stay connected." },
  { icon: House, title: "Light Housekeeping", description: "A cleaner, more comfortable home without the stress of keeping up alone." },
  { icon: Car, title: "Transportation", description: "Reliable help getting to appointments and everyday destinations." },
  { icon: HandHeart, title: "Respite Support", description: "A trusted helping hand so family caregivers can pause, rest and recharge." },
  { icon: UtensilsCrossed, title: "Meal Preparation", description: "Thoughtful support with simple meals, routines and the comforts of home." },
  { icon: Clock3, title: "Daily Routines", description: "Gentle reminders and dependable assistance that bring ease to each day." },
];

const faqs = [
  { question: "What kind of support can you provide?", answer: "Our prototype service offering includes companionship, respite support, transportation, light housekeeping, meal preparation, laundry, safety supervision, medication reminders and help with daily routines. Final services will be confirmed before launch." },
  { question: "Can care be built around our family’s schedule?", answer: "That is the goal. Every household has its own rhythm, so care begins with a conversation about the support, timing and routine that would be most helpful." },
  { question: "What areas do you serve?", answer: "Treasure Coast Home Health Services is being created to serve the Treasure Coast and surrounding communities. Exact cities and coverage will be confirmed as the business prepares to launch." },
  { question: "How do we get started?", answer: "Start with a simple, no-pressure conversation. Call us or request care online, tell us what would make life easier, and we’ll talk through the next step together." },
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand--inverse" : ""}`} href="#top" aria-label="Treasure Coast Home Health Services home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48"><path d="M7.5 21.5 24 8l16.5 13.5" /><path d="M12 20.5v18h24v-18" /><path d="M24 37.2s-9-5.1-9-11.1c0-5.2 6.2-6.8 9-2.7 2.8-4.1 9-2.5 9 2.7 0 6-9 11.1-9 11.1Z" /></svg>
      </span>
      <span className="brand__type"><strong>TREASURE COAST</strong><small>HOME HEALTH SERVICES</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="prototype-note"><span>Private concept preview</span><span className="prototype-note__detail">A vision for the future of Treasure Coast care</span></div>

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="shell site-header__inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">Services</a><a href="#about">About</a><a href="#difference">Why Us</a><a href="#faq">FAQ</a></nav>
          <div className="header-actions"><a className="phone-link" href={phoneHref} aria-label={`Call ${phoneDisplay}`}><Phone size={17} />{phoneDisplay}</a><a className="button button--primary button--small" href="#contact">Request Care</a></div>
          <button ref={menuButtonRef} className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu"><Menu /></button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen} role="dialog" aria-modal="true" aria-label="Site navigation">
        <div className="mobile-menu__top"><BrandMark /><button className="menu-toggle" onClick={closeMenu} aria-label="Close menu" autoFocus={menuOpen}><X /></button></div>
        <nav aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About</a><a href="#difference" onClick={closeMenu}>Why Us</a><a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <div className="mobile-menu__actions"><a className="button button--primary" href="#contact" onClick={closeMenu}>Request Care</a><a className="mobile-menu__phone" href={phoneHref}><Phone size={18} /> {phoneDisplay}</a></div>
      </div>

      <section className="hero" id="main-content" aria-labelledby="hero-title">
        <div className="hero__wash" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__content">
            <div className="eyebrow eyebrow--status"><span /> Now accepting new clients</div>
            <h1 id="hero-title">Care that feels<br />like <em>family.</em></h1>
            <p className="hero__lead">Compassionate in-home support helping Treasure Coast families find more independence, comfort and peace of mind.</p>
            <div className="hero__actions"><a className="button button--primary" href="#contact">Request Care</a><a className="button button--ghost" href="#services">Explore Services</a></div>
            <div className="hero__reassurance"><div className="avatar-stack" aria-hidden="true"><span>TC</span><span><Heart size={15} fill="currentColor" /></span><span><Check size={16} /></span></div><p><strong>Start with a conversation.</strong><br />No pressure. Just a thoughtful next step.</p></div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-frame"><img src="/images/hero-care.webp" width="1536" height="1024" fetchPriority="high" decoding="async" alt="A caregiver sharing a warm conversation with an older woman at home" /><div className="hero__image-shade" aria-hidden="true" /></div>
            <div className="care-note"><span className="care-note__icon"><Heart size={18} fill="currentColor" /></span><p><strong>Personal care, thoughtfully matched</strong><small>Support shaped around your family</small></p></div>
            <div className="hero__coastline" aria-hidden="true"><span>27.4° N</span><i /></div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Our care values"><div className="shell trust-bar__inner">
        {[[ShieldCheck, "Dependable", "Support you can count on"], [CalendarDays, "Flexible", "Care around your routine"], [Heart, "Personal", "The little things matter"], [MapPin, "Local", "Rooted in the Treasure Coast"]].map(([Icon, title, body]) => { const ItemIcon = Icon as typeof Heart; return <div className="trust-item" key={String(title)}><ItemIcon /><p><strong>{String(title)}</strong><small>{String(body)}</small></p></div>; })}
      </div></section>

      <section className="section services" id="services"><div className="shell">
        <div className="section-heading section-heading--split"><div><span className="eyebrow">Everyday support, elevated</span><h2>More ease in the day.<br /><em>More life in the moments.</em></h2></div><p>From morning routines to meaningful companionship, our support is designed to make home feel easier, safer and more connected.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, description }, index) => <article className="service-card" key={title}><div className="service-card__top"><span className="service-card__icon"><Icon /></span><span className="service-card__number">0{index + 1}</span></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Ask about ${title}`}>Ask about this service</a></article>)}</div>
        <div className="service-note"><Sparkles size={18} /><p><strong>Also available:</strong> laundry support, safety supervision and medication reminders.</p></div>
      </div></section>

      <section className="story" id="about"><div className="shell story__grid">
        <div className="story__visual"><img src="/images/family-care.webp" width="1536" height="1024" loading="lazy" decoding="async" alt="A father and daughter enjoying time together at home with support nearby" /><div className="story__caption"><span>Peace of mind</span><strong>is knowing someone dependable is there.</strong></div></div>
        <div className="story__content"><span className="eyebrow eyebrow--light">Care for them. Confidence for you.</span><h2>Love stays at the center.<br /><em>We help with the rest.</em></h2><p>When someone you love needs a little extra support, every detail matters. A ride to an appointment. A familiar routine. A warm meal. A real conversation.</p><p>Treasure Coast Home Health Services is being built around one simple belief: people deserve to feel seen, respected and comfortable in the place they know best.</p><a className="text-link text-link--light" href="#difference">Discover our approach</a></div>
      </div></section>

      <section className="section process" id="difference"><div className="shell">
        <div className="section-heading section-heading--center"><span className="eyebrow">A simple path forward</span><h2>Getting support should feel<br /><em>reassuring, not overwhelming.</em></h2><p>We begin by listening, then shape the experience around what matters to your family.</p></div>
        <div className="process-grid">{[["01", Phone, "Talk with us", "Tell us what life looks like today and where a little support could make a difference."], ["02", Compass, "Shape the plan", "Together, we identify the right services, schedule and personal preferences."], ["03", SunMedium, "Begin with confidence", "Care starts with clarity, warmth and a focus on feeling comfortable at home."]].map(([number, Icon, title, body]) => { const StepIcon = Icon as typeof Phone; return <article className="process-card" key={String(number)}><span className="process-card__number">{String(number)}</span><StepIcon /><h3>{String(title)}</h3><p>{String(body)}</p></article>; })}</div>
        <div className="process__action"><a className="button button--outline" href={phoneHref}><Phone size={17} /> Start with a conversation</a></div>
      </div></section>

      <section className="manifesto"><div className="manifesto__rings" aria-hidden="true" /><div className="shell manifesto__inner"><span className="manifesto__label">The promise behind the name</span><p>Caring people.<br /><em>Healthier lives.</em><br />Stronger communities.</p><div className="manifesto__line"><span /><Heart fill="currentColor" /><span /></div></div></section>

      <section className="section local"><div className="shell local__grid">
        <div className="local__content"><span className="eyebrow">Local by design</span><h2>Care with a true sense of <em>place.</em></h2><p>Built for the Treasure Coast and shaped by the people who call it home. Our vision is personal, responsive support with the warmth and accountability only a local team can bring.</p><ul><li><Check /> A familiar local team</li><li><Check /> Support that adapts to real life</li><li><Check /> Communication families can feel good about</li></ul></div>
        <div className="local__map" aria-label="Conceptual Treasure Coast service area"><div className="map-water"><span>ATLANTIC OCEAN</span></div><div className="map-land"><div className="map-route" /><span className="map-pin map-pin--one"><i /><b>Treasure Coast</b><small>Primary service region</small></span><span className="map-pin map-pin--two"><i /></span><span className="map-pin map-pin--three"><i /></span><div className="map-key"><MapPin size={17} /><p><strong>Serving the Treasure Coast</strong><small>and surrounding communities</small></p></div></div></div>
      </div></section>

      <section className="section faq" id="faq"><div className="shell faq__grid">
        <div className="faq__intro"><span className="eyebrow">Good questions are welcome</span><h2>What families<br /><em>want to know.</em></h2><p>Choosing support for someone you love is personal. Here are a few simple starting points.</p><a className="text-link" href={phoneHref}>Call us at {phoneDisplay}</a></div>
        <div className="faq__list">{faqs.map((item, index) => { const isOpen = activeFaq === index; const answerId = `faq-answer-${index}`; return <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.question}><button onClick={() => setActiveFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}><span>{item.question}</span><ChevronDown aria-hidden="true" /></button><div id={answerId} className="faq-item__answer" aria-hidden={!isOpen}><p>{item.answer}</p></div></article>; })}</div>
      </div></section>

      <section className="final-cta" id="contact"><div className="final-cta__glow" aria-hidden="true" /><div className="shell final-cta__inner"><span className="eyebrow eyebrow--light">The next step can be simple</span><h2>Let’s talk about what<br /><em>would make life easier.</em></h2><p>You don’t need to have every answer before reaching out. Tell us what’s on your mind, and we’ll take it from there.</p><div className="final-cta__actions"><a className="button button--white" href={phoneHref}>Request Care</a><a className="final-cta__phone" href={phoneHref}><Phone size={18} /> {phoneDisplay}</a></div><span className="final-cta__note">Prototype inquiry experience — no health information is collected.</span></div></section>

      <footer className="site-footer"><div className="shell"><div className="site-footer__top"><div className="site-footer__brand"><BrandMark inverse /><p>Thoughtful in-home support for the Treasure Coast and surrounding communities.</p></div><div className="site-footer__column"><strong>Explore</strong><a href="#services">Services</a><a href="#about">About</a><a href="#difference">Why Us</a><a href="#faq">FAQs</a></div><div className="site-footer__column"><strong>Connect</strong><a href={phoneHref}>{phoneDisplay}</a><a href="#contact">Request Care</a><span>Treasure Coast, Florida</span></div></div><div className="site-footer__bottom"><span>© 2026 Treasure Coast Home Health Services LLC</span><span>Prototype concept · Details subject to confirmation</span></div></div></footer>
      <div className="mobile-cta"><a href={phoneHref}><Phone size={19} /> Call</a><a href="#contact">Request Care</a></div>
    </main>
  );
}
