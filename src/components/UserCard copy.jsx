

import chaiLogo from "../assets/chai-logo.png"
import { MdRefresh, MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";


const UserCard = ({ user=null }) => {

    const handleRefresh = () => {
        window.location.reload()
    }

    const contactStyles = {
        color: "white", 
        backgroundColor: "black", 
        borderRadius: "50%",
        fontSize: "1.2rem",
        padding: "2px"
    }

    const headerIconStyles = {
        fontSize: "1.5rem",
    }


    const displayHumanReadableDate = (date) => {
        const d = new Date(date)
        const monthNames = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        }
        date = d.getDate()
        let month = monthNames[d.getMonth()]
        let year = d.getFullYear()
        return `${date} ${month}, ${year}`
    }

    return (
        <>
            {
                user ? (
                    <div className="card">
                        
                        <div className="card-header">
                            <MdOutlineKeyboardBackspace style={headerIconStyles} className="btn-cursor" />
                            <p>Profile Overview</p>
                            <MdRefresh style={headerIconStyles} onClick={handleRefresh} className="btn-cursor"/>
                        </div>

                        <div className="card-body">
                            <span className="user-title">{user.name.title}</span>
                            <div className="user-avatar">
                                <img src={user.picture.large} alt="user avatar" />
                            </div>
                            <div className="user-name">
                                {user.name.first} {user.name.last}
                            </div>
                            <div className="profile-user-name">
                                {user.login.username}
                            </div>
                        </div>

                        <div className="sep-80"/> 

                        <div className="card-contact">
                            <div className="location">
                                <IoLocationOutline style={contactStyles} />
                                <p>Location</p>
                            </div>

                            <div className="phone">
                                <HiOutlinePhone style={contactStyles} />
                                <p>Call me</p>
                            </div>
                        </div>
                        
                        <div className="sep-80"/> 

                        <div className="card-details">
                            <div className="city">
                                <p>City</p>
                                <span>{user.location.city}</span>
                            </div>

                            <div className="nationality">
                                <p>Nationality</p>
                                <span>{user.location.country}</span>
                            </div>

                            <div className="dob">
                                <p>Date of Birth</p>
                                <span>{displayHumanReadableDate(user.dob.date)}</span>
                            </div>

                            <div className="phone-number">
                                <p>Phone No.</p>
                                <span>{user.phone}</span>
                            </div>

                            <div className="timezone">
                                <p>Timezone</p>
                                <span>{user.location.timezone.offset} ({user.location.city})</span>
                            </div>
                            
                            <div className="registered-date">
                                <p>Registered Since</p>
                                <span>{displayHumanReadableDate(user.registered.date)}</span>
                            </div>
                        </div>

                        <div className="card-footer">
                            <p className="copyright-text">© chai aur code</p>
                        </div>
                        <img className="chai-logo" src={chaiLogo} alt="chai code logo" />
                        
                        
                    </div>
                ) 
                : (
                    <div className="flex w-52 flex-col gap-4 text-white bg-white">
                        <p className="bg-white ">sdjbfjshdfhsdb</p>
                        <div className="flex items-center gap-4">
                            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                            <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-28"></div>
                            </div>
                        </div>
                        <div className="skeleton h-32 w-full"></div>
                    </div>
                )
            }
        </>
    )
}

export default UserCard