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

  
  const [titleOfStudy, setTitleOfStudy] = useState('');
  

  function handleChangeTitleOfStudy(e){
      setTitleOfStudy(e.target.value)
  }

  function handleChangeName(e){
    setName(e.target.value)
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
    <Education  titleOfStudy={titleOfStudy} handleChangeTitleOfStudy={handleChangeTitleOfStudy} />
    <Experience />
    </div>
    <Container name={name} phone={phone} email={email} titleOfStudy={titleOfStudy} />
    </div>
  )
}

export default App
