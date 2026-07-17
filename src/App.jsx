import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const navItems = [
  ['#hero', 'bi-house', 'Home'], ['#about', 'bi-person', 'About'], ['#resume', 'bi-file-earmark-text', 'Resume'],
  ['#contact', 'bi-envelope', 'Contact'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeLink = (hash) => (location.pathname === '/' ? hash : `/${hash}`);
  return <header id="header" className={`header dark-background d-flex flex-column ${open ? 'header-show' : ''}`}>
    <i className={`header-toggle d-xl-none bi ${open ? 'bi-x' : 'bi-list'}`} onClick={() => setOpen(!open)} />
    <div className="profile-img"><img src="/assets/img/background.jpg" alt="Long Vicheka" className="img-fluid rounded-circle" /></div>
    <Link to="/" className="logo d-flex align-items-center justify-content-center"><h1 className="sitename">Long Vicheka</h1></Link>
    <div className="social-links text-center"><a href="#"><i className="bi bi-twitter-x" /></a><a href="#"><i className="bi bi-facebook" /></a><a href="#"><i className="bi bi-instagram" /></a><a href="#"><i className="bi bi-linkedin" /></a></div>
    <nav id="navmenu" className="navmenu"><ul>{navItems.map(([hash, icon, label]) => <li key={hash}><a href={homeLink(hash)} onClick={() => setOpen(false)}><i className={`bi ${icon} navicon`} /> {label}</a></li>)}</ul></nav>
  </header>;
}

function SectionTitle({ title, children }) { return <div className="container section-title"><h2>{title}</h2><p>{children}</p></div>; }
const portfolio = ['app-1', 'product-1', 'branding-1', 'books-1', 'app-2', 'product-2'];

function Home() {
  return <main className="main">
    <section id="hero" className="hero section dark-background"><img src="/assets/img/background.jpg" alt="" /><div className="container"><h2>Long Vicheka</h2><p>I&apos;m a <span className="typed-static">Designer, Developer, Freelancer</span></p></div></section>
    <section id="about" className="about section"><SectionTitle title="About">Creative web professional focused on thoughtful, useful digital experiences.</SectionTitle><div className="container"><div className="row gy-4 justify-content-center"><div className="col-lg-4"><img src="/assets/img/profile.jpg" className="img-fluid" alt="Long Vicheka" /></div><div className="col-lg-8 content"><h2>UI/UX Designer &amp; Web Developer.</h2><p className="fst-italic py-3">I turn ideas into clear, engaging interfaces and dependable web experiences.</p><div className="row"><div className="col-lg-6"><ul><li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li><li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>New York, USA</span></li></ul></div><div className="col-lg-6"><ul><li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>email@example.com</span></li><li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li></ul></div></div></div></div></div></section>
    <section id="resume" className="resume section light-background"><SectionTitle title="Resume">A mix of visual design, product thinking, and front-end development.</SectionTitle><div className="container"><div className="row"><div className="col-lg-6"><h3 className="resume-title">Education</h3><div className="resume-item"><h4>Master of Fine Arts &amp; Graphic Design</h4><h5>2015 - 2016</h5><p><em>Rochester Institute of Technology</em></p></div></div><div className="col-lg-6"><h3 className="resume-title">Experience</h3><div className="resume-item"><h4>Senior Graphic Design Specialist</h4><h5>2019 - Present</h5><p><em>Experion, New York, NY</em></p><p>Leading digital design and communication projects from concept through delivery.</p></div></div></div></div></section>


    <section id="contact" className="contact section"><SectionTitle title="Contact">Let&apos;s discuss your next project.</SectionTitle><div className="container"><div className="info-wrap"><div className="info-item"><i className="bi bi-envelope" /><div><h3>Email</h3><p>email@example.com</p></div></div></div></div></section>
  </main>;
}

function PageTitle({ title }) { return <div className="page-title dark-background"><div className="container d-lg-flex justify-content-between align-items-center"><h1 className="mb-2 mb-lg-0">{title}</h1><nav className="breadcrumbs"><ol><li><Link to="/">Home</Link></li><li className="current">{title}</li></ol></nav></div></div>; }
function PortfolioDetails() { return <main className="main"><PageTitle title="Portfolio Details" /><section className="portfolio-details section"><div className="container"><div className="row gy-4"><div className="col-lg-8"><img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="Portfolio project" /></div><div className="col-lg-4"><div className="portfolio-info"><h3>Project information</h3><ul><li><strong>Category</strong>: Web design</li><li><strong>Client</strong>: ASU Company</li><li><strong>Project date</strong>: 01 March, 2020</li></ul></div><div className="portfolio-description"><h2>Digital product design</h2><p>A considered web experience, created from research and visual direction through to a polished interface.</p></div></div></div></div></section></main>; }
function ServiceDetails() { return <main className="main"><PageTitle title="Service Details" /><section className="service-details section"><div className="container"><div className="row gy-4"><div className="col-lg-4"><div className="services-list"><Link to="/service-details" className="active">Web Design</Link><Link to="/service-details">Development</Link><Link to="/service-details">Branding</Link></div><h4>Thoughtful work, built around people</h4><p>From strategy through launch, each engagement is clear, collaborative, and focused on outcomes.</p></div><div className="col-lg-8"><img src="/assets/img/services.jpg" alt="Creative services" className="img-fluid services-img" /><h3>Design and development that moves projects forward</h3><p>I help shape useful, elegant digital products that are ready to grow.</p></div></div></div></section></main>; }
function Footer() { return <footer id="footer" className="footer position-relative light-background"><div className="container"><div className="copyright text-center"><p>© <span>Copyright</span> <strong className="px-1 sitename"> Long Vicheka</strong> <span>All Rights Reserved</span></p></div></div></footer>; }
function App() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/portfolio-details" element={<PortfolioDetails />} /><Route path="/service-details" element={<ServiceDetails />} /><Route path="*" element={<Home />} /></Routes><Footer /><a href="#" className="scroll-top active d-flex align-items-center justify-content-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><i className="bi bi-arrow-up-short" /></a></>; }
export default App;
