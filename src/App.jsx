import Nav from './components/Nav'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Stock from './components/Stock'
import Compliance from './components/Compliance'
import Zento from './components/Zento'
import Patients from './components/Patients'
import Insights from './components/Insights'
import Migration from './components/Migration'
import Mobile from './components/Mobile'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Closing from './components/Closing'

export default function App() {
  return (
    <>
      <a
        href="#counter"
        className="sr-only focus:not-sr-only"
        style={{
          position: 'fixed',
          left: 16,
          top: 16,
          zIndex: 999,
          borderRadius: '9999px',
          background: 'var(--color-ox)',
          color: '#fff',
          padding: '10px 20px',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Counter />
        <Stock />
        <Compliance />
        <Zento />
        <Patients />
        <Insights />
        <Migration />
        <Mobile />
        {/* <Pricing /> */}
        <Faq />
        <Closing />
      </main>
    </>
  )
}
