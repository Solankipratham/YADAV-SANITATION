import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import FireProtection from './pages/FireProtection'
import HeavyEngineering from './pages/HeavyEngineering'
import Projects from './pages/Projects'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Page>
                  <Home />
                </Page>
              }
            />
            <Route
              path="/about"
              element={
                <Page>
                  <About />
                </Page>
              }
            />
            <Route
              path="/services"
              element={
                <Page>
                  <Services />
                </Page>
              }
            />
            <Route
              path="/services/fire-protection"
              element={
                <Page>
                  <FireProtection />
                </Page>
              }
            />
            <Route
              path="/services/heavy-engineering"
              element={
                <Page>
                  <HeavyEngineering />
                </Page>
              }
            />
            <Route
              path="/projects"
              element={
                <Page>
                  <Projects />
                </Page>
              }
            />
            <Route
              path="/industries"
              element={
                <Page>
                  <Industries />
                </Page>
              }
            />
            <Route
              path="/contact"
              element={
                <Page>
                  <Contact />
                </Page>
              }
            />
            <Route
              path="*"
              element={
                <Page>
                  <NotFound />
                </Page>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
