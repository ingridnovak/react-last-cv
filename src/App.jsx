import Container from './components/Container'
import Personal from './components/Presonal'
import Education from './components/Education'
import Experience from './components/Experience'
import './App.css'

function App() {

  return (
    <div className='container_app'>
    <div className='personal_info'>
    <Personal />
    <Education />
    <Experience />
    </div>
    <Container />
    </div>
  )
}

export default App
