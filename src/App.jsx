import { useEffect } from 'react'
import { Routes, Route, Link, useParams, useLocation, Navigate } from 'react-router-dom'
import { person, projects } from './data'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  return (
    <header className="bar">
      <Link to="/" className="mark">{person.name}</Link>
      <nav>
        <Link to="/#work">Work</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Have a product that needs designing?</h2>
      <a className="big-link" href={`mailto:${person.email}`}>{person.email}</a>
      <p>
        <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
        <br />
        {person.location}
      </p>
    </section>
  )
}

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>{person.name}</h1>
        <img className="portrait" src="/me.jpg" alt={`Portrait of ${person.name}`} />
        <div className="hero-copy">
          <p>{person.intro}</p>
          <Link to="/#work" className="line-link">See the work</Link>
        </div>
      </section>

      <section id="work" className="work">
        {projects.map((p) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className="tile">
            <img src={p.cover} alt={`${p.title} cover`} loading="lazy" />
            <div className="tile-head">
              <h3>{p.title}</h3>
              <span>{p.type}</span>
            </div>
            <p>{p.summary}</p>
          </Link>
        ))}
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <div>
          <p>{person.about}</p>
          <ul>
            {person.skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  )
}

function Case() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx < 0) return <Navigate to="/" replace />
  const p = projects[idx]
  const next = projects[(idx + 1) % projects.length]
  const facts = [['Role', person.role], ['Platform', p.platform], ['Stage', p.status], ...(p.tools?.length ? [['Tools', p.tools.join(', ')]] : [])]

  return (
    <main className="case">
      <header className="case-head">
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
      </header>

      <section className="case-body">
        <dl>
          {facts.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <div className="prose">
          <h2>The problem</h2>
          <p>{p.problem}</p>
          <h2>Design decisions</h2>
          <ul>{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
          {p.note && <p className="note">{p.note}</p>}
        </div>
      </section>

      {p.sections.map((s, n) => (
        <section key={n} className="shots">
          {s.heading && <h2>{s.heading}</h2>}
          <div className={s.layout === 'phones' ? 'phones' : 'wide'}>
            {s.images.map((im) => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" />)}
          </div>
        </section>
      ))}

      <Link to={`/work/${next.slug}`} className="next">
        <span>Next project</span>
        <strong>{next.title}</strong>
      </Link>
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="foot">© {new Date().getFullYear()} {person.name}</footer>
    </>
  )
}
