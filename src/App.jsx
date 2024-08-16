
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import RandomUserProfile from './pages/RandomUserProfile'
import CatsListing from './components/CatsListing'
import RandomJokesTweet from './components/RandomJokesTweet'

import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path="/random-user" element={<RandomUserProfile />} />
                        <Route path="/cats-listing" element={<CatsListing />} />
                        <Route path="/random-jokes" element={<RandomJokesTweet />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
