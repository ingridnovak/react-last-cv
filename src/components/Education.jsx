import { FaUserGraduate } from "react-icons/fa6";


function Education(){
    return(
        <div className="education box" id="education"> 
        <div className="box_title">
        <FaUserGraduate size={35}/>
        <h2>Education</h2>
        </div>
        <p>Title of study</p>
        <input placeholder="Business and management, BA"></input>
        <p>School name</p>
        <input placeholder="University of Creative Arts, Epsom"></input>
        <p>Study start date</p>
        <input type="date"></input>
        <p>Study end date</p>
        <input type="date"></input>
</div>
    )
}

export default Education;