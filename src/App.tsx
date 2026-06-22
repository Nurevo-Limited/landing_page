import Header from "./components/Header"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Technology from "./components/Technology"
import MarketOpportunity from "./components/MarketOpportunity"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Technology />
        <MarketOpportunity />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
