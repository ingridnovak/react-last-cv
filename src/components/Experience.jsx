import { FaIdCardClip } from "react-icons/fa6";
import { useState } from "react";

function Experience(){
    const [work, setWork] = useState(false)

    function handleChangeWork(){
        setWork(!work);
    }
    return(
        <div className="experience box" id="experience"> 
         <div className="box_title">
        <FaIdCardClip size={35} />
        <h2>Work experience</h2>
        </div>
        {work ?  <>
        <p>Position title</p>
        <input placeholder="Customer Service Specialist"></input>
        <p>Company name</p>
        <input placeholder="AdviceOwl, RedCar"></input>
        <p>Start date</p>
        <input type="date"></input>
        <p>End date</p>
        <input type="date"></input>
        <p>Job descripton</p>
        <textarea id="work"  name="work" className="work_descr" rows="5" cols="33">
        
        </textarea>
        <div className="box_buttons">
        <button className="button-2 cancel" role="button" onClick={handleChangeWork}>Cancel</button>
        <button className="button-2 submit" role="button">Submit</button>
        </div>


        </>: <button className="button-2 add" role="button" onClick={handleChangeWork}>Add +</button>

        
        }
       
</div>
    )
}

export default Experience;