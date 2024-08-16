
import React from 'react'
import { Link } from 'react-router-dom'

import CardBody from '../components/CardBody'
import CardSkeleton from '../components/CardSkeleton';

import chaiLogo from "../assets/chai-logo.png"
import { MdRefresh, MdOutlineKeyboardBackspace } from "react-icons/md";

const RandomUserProfile = () => {

    const [user, setUser] = React.useState(null)
    const [location, setLocation] = React.useState(null)

    async function fetchUser() {
        try{
            const res = await fetch(`https://api.freeapi.app/api/v1/public/randomusers/user/random`)
            if(!res.ok){
                throw new Error('Something went wrong')
            }
            const data = await res.json()
            // console.log(data.data)
            setLocation(data.data.location.coordinates)
            setUser(data.data)
        }catch(err){
            console.log(err)
        }
    }

    React.useEffect(() => {
        fetchUser()
    }, [])

    const headerIconStyles = {
        fontSize: "1.5rem",
    }

    const handleRefresh = () => {
        setUser(null)
        fetchUser()
    }

    return (
        <div className='user-profile-container p-8 flex justify-center items-center'>

            <div className="card w-96 p-5 border-4 rounded-2xl border-white my-card">
                <div className="card-header flex justify-between text-black/70">
                    <MdOutlineKeyboardBackspace style={headerIconStyles} className="cursor-pointer" />
                    <p className="dm-font">Profile Overview</p>
                    <MdRefresh style={headerIconStyles} onClick={handleRefresh} className="cursor-pointer"/>
                </div>

                {
                    user ? <CardBody user={user} location={location} /> : <CardSkeleton />
                }

                <div className="card-footer w-full grid grid-cols-4 mt-8">
                    <div className=""></div>
                    <p className="col-span-2 self-end text-white/40 text-2xs text-center">© chai aur code</p>
                    <Link to="https://chaicode.com/" target="_blank">
                        <img className="chai-logo justify-self-end" src={chaiLogo} alt="chai code logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RandomUserProfile
