import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

function LandingNavbar() {
    const history = useHistory()

    return <div className='landing-navbar'>
        <div>
            <p className='logo'>Zhetistik</p>
        </div>
        <div className='links'>
            <a className='link'>Companies</a>
            <a className='link'>News</a>
            <a className='link'>College List</a>
            <a className='link'>About us</a>
            <button className='nav-btn' onClick={() => history.push("/sign-up")}>Sign up</button>
            <button className='nav-btn' onClick={() => history.push("/sign-in")}>Login</button>
        </div>
    </div>
}

export default LandingNavbar