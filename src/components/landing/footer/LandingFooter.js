import React from 'react'
import {MdSchool} from 'react-icons/md'
import './style.css'

function LandingFooter() {
    return (
        <div className='landing-footer'>
            <footer>
                <div className='logo'>
                    <MdSchool/>
                    Zhetistik
                </div>
            </footer>
        </div>
    )
}

export default LandingFooter