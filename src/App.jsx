
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RandomUserProfile from './pages/RandomUserProfile'
import CatsListing from './components/CatsListing'
import RandomJokesTweet from './components/RandomJokesTweet'

import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/random-user" element={<RandomUserProfile />} />
                    <Route path="/cats-listing" element={<CatsListing />} />
                    <Route path="/random-jokes" element={<RandomJokesTweet />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
