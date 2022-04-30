import React from "react"
import LandingAdv from "../components/landing/advantages/LandingAdv"
import LandingSearch from "../components/landing/college-search/LandingSearch"
import LandingFeatures from "../components/landing/features/LandingFeatures"
import LandingFooter from "../components/landing/footer/LandingFooter"
import LandingHero from "../components/landing/hero/LandingHero"
import LandingNavbar from "../components/landing/landingNavbar/LandingNavbar"

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div style={style.backgroundHero}>
                    <LandingNavbar />
                    <LandingHero />
                </div>
                <div>
                    <LandingFeatures />
                </div>
                <div style={style.backgroundHero}>
                    <LandingSearch />
                </div>
                <div>
                    <LandingAdv />
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <LandingFooter />
                </div>
            </div>
        )
    }
}

const style = {
    backgroundHero: {
        backgroundImage: "url(https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
}

export default Landing