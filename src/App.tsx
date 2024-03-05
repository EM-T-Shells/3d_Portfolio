import { Route, Router } from 'solid-app-router';


function App() {
  return (
    <main class="bg-slate-300/20">
      <Router>
        Navbar
        <Route path="/" element={'Home'} />
        <Route path="/about" element={'About'}/>
        <Route path="/projects" element={'Projects'}/>
        <Route path="/contact" element={'Contact'}/>
      </Router>
    </main>
  )
}

export default App
