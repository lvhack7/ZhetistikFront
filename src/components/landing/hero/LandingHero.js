import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './style.css'

function LandingHero() {
    return (
        <div className='hero'>
            <div className='hero-title'>
                <p className='title'>Zhetistik</p>
                <p className='subtitle'>Discover top universities, new courses and the latest careers guidance</p>
                <button className='explore-btn'>Explore</button>
            </div>

        </div>
    )
}

export default LandingHero