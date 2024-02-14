import Container from './components/Container'
import Personal from './components/Presonal'
import Education from './components/Education'
import Experience from './components/Experience'

import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');



  function handleChangeName(e){
    setName(e.target.value)
    console.log(name)
  }
  
  function handleChangePhone(e){
    setPhone(e.target.value)
  }
  function handleChangeEmail(e){
    setEmail(e.target.value)
  }


  return (
    <div className='container_app'>
    <div className='personal_info'>
    <Personal name={name} handleChangeName={handleChangeName} phone={phone} handleChangePhone={handleChangePhone} email={email} handleChangeEmail={handleChangeEmail}/>
    <Education />
    <Experience />
    </div>
    <Container name={name} phone={phone} email={email}/>
    </div>
  )
}

export default App
