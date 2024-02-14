import { FaAddressCard } from "react-icons/fa6";

function Personal({name, handleChangeName, phone, handleChangePhone, email, handleChangeEmail}){
    return(
        <div className="personal box" id="personal"> 
        <div className="box_title">
                <FaAddressCard size={35} />
                <h2>Personal Information</h2>
                </div>
                <p>Full name</p>
                <input placeholder="Inhrit Novak" value={name} onChange={handleChangeName}></input>
                <p>Email</p>
                <input placeholder="notarealemail123@gmail.com" value={email} onChange={handleChangeEmail}></input>
                <p>Phone Number</p>
                <input placeholder="555-555-555" value={phone} onChange={handleChangePhone}></input>
        </div>
    )
}

export default Personal;