import { RxAvatar } from "react-icons/rx";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";



function Container({name, phone, email, titleOfStudy, submit}){
    const style = { color: "white", margin: '10px' }
    console.log(submit)
    return(
        <>
        <div className="container" id="container">

           <div className="personal_photo">
            <div className="avatar_fullname">
            
            <RxAvatar style={style} size={95} />
            <p id="fullName_container">{name}</p>
            </div>
            <div className="contacts">
            <FiPhoneCall style={style} size={25} />
            <p className="phone_container">{phone}</p>

            <MdOutlineMarkEmailUnread style={style} size={25} />
            <p className="email_container">{email}</p>


            </div>

           </div>
           <div className="main_info">
                <h2 className="title_main">Education</h2>
                <div className="title_study">{submit ? {titleOfStudy} : null}</div>
                <h2 className="title_main">Work History</h2>
           </div>
        </div>
        </>
    )
}

export default Container;