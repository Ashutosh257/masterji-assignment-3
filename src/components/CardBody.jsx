
import React from "react"
import { Link } from 'react-router-dom';

import { HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

import { getFlag } from '../utils/countries';


const CardBody = ({ user, location }) => {

    const [isImageLoaded, setIsImageLoaded] = React.useState(false);


    const contactStyles = {
        color: "white", 
        backgroundColor: "black", 
        borderRadius: "50%",
        fontSize: "1.2rem",
        padding: "2px"
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

    // const getNearestTimeZoneCity = (city) => {
    //     const cityName = city.split(',')[0].trim()
    //     return cityName
    // }

    // const handleGoogleMaps = () => {
    //     const {latitude, longitude} = location
    //     window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
    // }

    return (
        <>
            <div className="flex flex-col items-center mt-4">
                <div className="user-avatar flex flex-col">
                    <span className="text-white bg-black rounded-badge self-end">{user.name.title}</span>
                    {
                        !isImageLoaded && (
                            <div className="skeleton bg-zinc-500 animate-pulse w-24 h-24 rounded-full" />
                        )
                    }
                    <img 
                        src={user.picture.large} 
                        alt="user avatar" 
                        className={`w-24 rounded-full ${isImageLoaded ? 'block' : 'hidden'}`} 
                        onLoad={() => setIsImageLoaded(true)} 
                    />
                </div>

                <div className="flex flex-col items-center mt-5">
                    <p className="donegal-font text-2xl text-black font-medium">{user.name.first} {user.name.last}</p>
                    <p className="text-black mt-3 mb-4">{user.login.username}</p>
                </div>

                <div className="sep-90" />

                <div className="user-contact w-full flex justify-center gap-x-10 font-light text-black/70">
                    <Link to={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`} target="_blank">
                        <div  className="flex items-center justify-center my-3 text-2xs cursor-pointer">
                            <IoLocationOutline style={contactStyles} />
                            <p className="font-medium ml-2">Location</p>
                        </div>
                    </Link>
                    <Link to={`tel:${user.cell}`} target="_blank">
                        <div className="flex items-center justify-center my-3 text-2xs cursor-pointer">
                            <HiOutlinePhone style={contactStyles} />
                            <p className="font-medium ml-2">Call me</p>
                        </div>
                    </Link>
                </div>

                <div className="sep-90" />

                <div className="user-details w-full grid grid-cols-2 gap-y-2 gap-x-10 my-2 text-black/70">
                    <div>
                        <span className="font-light text-2xs">City</span>
                        <p className="text-lg">{user.location.city}</p>
                    </div>
                    <div>
                        <span className="font-light text-2xs">Nationality</span>
                        <p className="text-lg">{getFlag(user.location.country)} {user.nat}</p>
                    </div>
                    <div>
                        <span className="font-light text-2xs">Date of birth</span>
                        <p className="text-lg">{displayHumanReadableDate(user.dob.date)}</p>
                    </div>
                    <div>
                        <span className="font-light text-2xs">Phone No.</span>
                        <p className="text-lg">{user.phone}</p>
                    </div>
                    <div>
                        <span className="font-light text-2xs">Time Zone</span>
                        <p className="text-lg">{user.location.timezone.offset} ({user.location.city})</p>
                        {/* <p className="text-lg">{user.location.timezone.offset} ({getNearestTimeZoneCity(user.location.timezone.description)})</p> */}
                    </div>
                    <div>
                        <span className="font-light text-2xs">Registered Since</span>
                        <p className="text-lg">{displayHumanReadableDate(user.registered.date)}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardBody