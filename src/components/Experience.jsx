import { FaIdCardClip } from "react-icons/fa6";

function Experience(){
    return(
        <div className="experience box" id="experience"> 
         <div className="box_title">
        <FaIdCardClip size={35} />
        <h2>Work experience</h2>
        </div>
        <p>Position title</p>
        <input placeholder="Customer Service Specialist"></input>
        <p>Company name</p>
        <input placeholder="AdviceOwl, RedCar"></input>
        <p>Start date</p>
        <input type="date"></input>
        <p>End date</p>
        <input type="date"></input>
</div>
    )
}

export default Experience;