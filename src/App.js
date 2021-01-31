import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Header, AboutSection, MenuSection, ChefsSection, Footer } from './components'

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <MenuSection />
        <ChefsSection />
        <Footer />
      </main>
    </>
  );
}

export default App
