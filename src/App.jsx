import { PROFILE, METRICS, PROJECTS, EXPERIENCE, STACK, CERTS, EDUCATION } from './data'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="sig">mohit mehral</span>
          <span className="at">{'\u00B7'} {PROFILE.role.toLowerCase()}</span>
        </a>
        <div className="links">
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#stack">stack</a>
          <a href="#contact">contact</a>
        </div>
        <div className="status"><span className="dot"></span>malm&ouml;, sweden</div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero container" id="top">
      <div className="meta-row">
        <span className="tag mono">v2025</span>
        <span>{'\u25C9'} {PROFILE.location}</span>
        <span>// 19+ yrs {'\u00B7'} 2 orgs {'\u00B7'} 6 certs</span>
        <span>aws {'\u00B7'} azure {'\u00B7'} github enterprise</span>
      </div>
      <h1 className="h1 display">
        I architect secure cloud platforms at <span className="pitch-serif">scale</span>.
      </h1>
      <p className="sub">{PROFILE.blurb}</p>
      <div className="bottom">
        <div className="identity">
          <div className="avatar"><span>MM</span></div>
          <div className="ident-text">
            <div className="role">{PROFILE.role}</div>
            <div className="loc mono">currently @ capgemini {'\u00B7'} ikano bank</div>
          </div>
        </div>
        <div className="cta-row">
          <a href="#work" className="btn primary">selected work {'\u2192'}</a>
          <a href={'mailto:' + PROFILE.email} className="btn">get in touch</a>
          <a href="#experience" className="btn">experience</a>
        </div>
      </div>
    </header>
  )
}

function MetricsSection() {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-head">
          <h3>// impact ledger</h3>
          <div className="mono dim">measured across capgemini {'\u00B7'} spice money</div>
        </div>
        <div className="metrics-grid">
          {METRICS.map((m, i) => (
            <div className="m" key={i}>
              <span className="num"><span className="accent-num">{m.value}</span></span>
              <div className="label">{m.label}</div>
              <div className="note">{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHead({ num, title, sub }) {
  return (
    <div className="section-head">
      <div><div className="num">{'\u00A7'} {num}</div><h2>{title}</h2></div>
      <div className="sub-text">{sub}</div>
    </div>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="container">
        <SectionHead num="01" title="Selected work." sub="Open-source projects I've designed and shipped — tools developers actually use." />
        <div className="projects">
          {PROJECTS.map((p, i) => (
            <a key={p.slug} className={'p ' + (i===0?'flagship':'')} href={p.url} target="_blank" rel="noopener noreferrer">
              <span className="idx mono">P{'\u00B7'}{String(i+1).padStart(2,'0')}</span>
              <div className="head"><span className="ptag">{p.tag}</span></div>
              <h3>{p.name}</h3>
              <div className="tagline">{p.tagline}</div>
              <div className="pbody">{p.body}</div>
              <div className="chips">{p.chips.map(c => <span key={c} className="chip">{c}</span>)}</div>
              <div className="stat"><span className="v">{p.stat.value}</span><span className="l">{p.stat.label}</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead num="02" title="Nineteen years, two chapters." sub="From telecom C programming in India to leading DevSecOps for a Swedish bank." />
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div className="row" key={i}>
              <div className="period">
                <span className="dot"></span>{e.period}
                <span className="loc">{e.location}</span>
              </div>
              <div className="tbody">
                <h3>{e.company}</h3>
                <div className="role-line">
                  <span>{e.role}</span>
                  {e.badge && <span className="badge">{e.badge}</span>}
                </div>
                <p className="summary">{e.summary}</p>
                <ul>{e.highlights.map(h => <li key={h}>{h}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StackSection() {
  return (
    <section id="stack">
      <div className="container">
        <SectionHead num="03" title="Technical surface." sub="A working stack — the tools I actually operate daily." />
        <div className="stack-grid">
          {STACK.map(g => (
            <div className="group" key={g.group}>
              <h4>{g.group}</h4>
              <div className="tags">{g.items.map(t => <span key={t} className="stag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <h2 className="big">Building something that needs a <em>cloud architect</em>? Let's talk.</h2>
          <div className="list">
            <div className="r"><span className="k">email</span><span className="v"><a href={'mailto:' + PROFILE.email}>{PROFILE.email}</a></span></div>
            <div className="r"><span className="k">linkedin</span><span className="v"><a href={'https://' + PROFILE.links.linkedin}>{PROFILE.links.linkedin}</a></span></div>
            <div className="r"><span className="k">github</span><span className="v"><a href={'https://' + PROFILE.links.github}>{PROFILE.links.github}</a></span></div>
            <div className="r"><span className="k">org</span><span className="v"><a href={'https://' + PROFILE.links.copilot}>{PROFILE.links.copilot}</a></span></div>
            <div className="r"><span className="k">certs</span><span className="v mono">{CERTS.join(' \u00B7 ')}</span></div>
            <div className="r"><span className="k">education</span><span className="v mono">{EDUCATION.map(e=>e.degree).join(' \u00B7 ')}</span></div>
          </div>
        </div>
        <div className="footer">
          <span>{'\u00A9'} {new Date().getFullYear()} Mohit Mehral {'\u00B7'} built in malm&ouml;</span>
          <span className="mono">deployed via github pages</span>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <MetricsSection />
      <Work />
      <ExperienceSection />
      <StackSection />
      <Contact />
    </>
  )
}
