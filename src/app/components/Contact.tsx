import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';

const KaggleIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'><path d='M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334'/></svg>
);
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    window.location.href = `mailto:ashwingupta3012@gmail.com?subject=Hey Ashwin, from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;
  };

  const links = [
    { label: 'Email', value: 'ashwingupta3012@gmail.com', href: 'mailto:ashwingupta3012@gmail.com', icon: <Mail size={14} /> },
    { label: 'Phone', value: '+91 79966 01575', href: 'tel:+917996601575', icon: <Phone size={14} /> },
    { label: 'GitHub', value: 'github.com/spice14', href: 'https://github.com/spice14', icon: <Github size={14} /> },
    { label: 'LinkedIn', value: 'linkedin.com/in/ashwingupta3012', href: 'https://www.linkedin.com/in/ashwingupta3012/', icon: <Linkedin size={14} /> },
    { label: 'Kaggle', value: 'kaggle.com/ashwingupta3012', href: 'https://www.kaggle.com/ashwingupta3012', icon: <KaggleIcon /> },
    { label: 'Location', value: 'Bangalore, India', href: 'https://maps.google.com/?q=Bangalore,India', icon: <MapPin size={14} /> },
  ];

  return (
    <section id="contact" style={{ padding: '10rem 6vw 8rem', background: 'rgba(255,255,255,0.015)', position: 'relative' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>04 — Contact</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'start' }}>

        {/* LEFT */}
        <div>
          <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
            <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fafaf8', margin: 0 }}>
              Let's build something that matters.
            </motion.h2>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontFamily: FONT_SANS, fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '400px', marginBottom: '2.5rem' }}>
            Open to full-time AI/ML engineering roles, research collaborations, and interesting problems at the intersection of LLMs, distributed systems, and scientific ML.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '2.5rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: FONT_MONO, fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase' }}>Open to opportunities</span>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {links.map(({ label, value, href, icon }, i) => (
              <motion.a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderBottomColor = 'rgba(255,255,255,0.35)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderBottomColor = 'rgba(255,255,255,0.05)'; }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', width: '16px' }}>{icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: FONT_MONO, fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</p>
                  <p style={{ fontFamily: FONT_SANS, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{value}</p>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>↗</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}>
          <TiltCard intensity={5} style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.5rem' }}>
          <p style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '2rem' }}>Send a message</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { name: 'name', placeholder: 'Your name', type: 'text' },
              { name: 'email', placeholder: 'Your email', type: 'email' },
            ].map(({ name, placeholder, type }) => (
              <input key={name} name={name} type={type} placeholder={placeholder} required
                style={{ fontFamily: FONT_SANS, fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '14px 16px', color: '#e8e0d0', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.45)'}
                onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'} />
            ))}
            <textarea name="message" placeholder="What's on your mind?" rows={5} required
              style={{ fontFamily: FONT_SANS, fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '14px 16px', color: '#e8e0d0', outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
              onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.45)'}
              onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'} />
            <motion.button type="submit" whileHover={{ background: '#fff' }} whileTap={{ scale: 0.98 }}
              style={{ fontFamily: FONT_SANS, fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em', background: '#e8e0d0', color: '#0a0a0a', border: 'none', borderRadius: '4px', padding: '14px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.2s' }}>
              Send message <Send size={14} />
            </motion.button>
          </form>
          </TiltCard>
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Ashwin Gupta — 2025</span>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>AI Engineer — Bangalore, India</span>
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=DM+Sans:wght@400;600&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />
    </section>
  );
}