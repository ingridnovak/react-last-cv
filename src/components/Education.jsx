import { useState, useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa6";


function Education({addEducation}){
    const [education, setEducation] = useState(false)
    const [item, setItem] = useState('');



    function changeItem(e){
        setItem(e.target.value);
        
        
       
        
      }


      useEffect(() => {
   
        console.log('State updated:', item);
        addEducation(item);
       
      }, [item]); 
    


    function handleChangeEducation(){
        setEducation(!education);
    }



    return(
        <div className="education box" id="education"> 
        <div className="box_title">
        <FaUserGraduate size={35}/>
        <h2>Education</h2>
        </div>

        {education ? <><p>Title of study</p>
        <input  onBlur={changeItem} placeholder="Business and management, BA"></input>
        <p>School name</p>
        <input onBlur={changeItem} placeholder="University of Creative Arts, Epsom"></input>
        <p>Study start date</p>
        <input type="date"></input>
        <p>Study end date</p>
        <input  type="date"></input>
        <div className="box_buttons">

        <button className="button-2 cancel" role="button" onClick={handleChangeEducation}>Cancel</button>
        <button className="button-2 submit" role="button" >Submit</button>
        </div>
        </> 
        : <button className="button-2 add" role="button" onClick={handleChangeEducation}>Add +</button>
}
        
        
       
</div>
    )
}

export default Education;