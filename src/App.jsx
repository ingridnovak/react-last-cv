import Container from './components/Container'
import Personal from './components/Presonal'
import Education from './components/Education'
import Experience from './components/Experience'

import './App.css'
import { useState, useEffect } from 'react'

function App() {
 

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

 
  
  const [education, setEducation] = useState([]);


  useEffect(() => {
   
    console.log('State updated:', education);

   
  }, [education]); 

  

  function addEducation(item){
    
      if(!education.includes(item)){
        setEducation([...education, item]);

      }
      console.log(education)
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
    <Education   addEducation={addEducation} />
    <Experience />
    </div>
    <Container education={education} name={name} phone={phone} email={email}  />
    </div>
  )
}

export default App
