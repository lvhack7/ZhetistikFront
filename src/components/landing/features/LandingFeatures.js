import React from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button } from 'reactstrap'
import { RiCustomerService2Line } from 'react-icons/ri'
import {AiFillDatabase} from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import './style.css'

function LandingFeatures() {
    const features = [
        {
            img: <RiCustomerService2Line style={{ width: '50px', height: '50px', margin: '16px' }} />,
            title: 'Easy and convinient service',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: <AiFillDatabase style={{ width: '50px', height: '50px', margin: '16px' }} />,
            title: 'Huge database of resources',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: <MdDesignServices style={{ width: '50px', height: '50px', margin: '16px' }} />,
            title: 'Ability to create portfolio',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
    ]

    return (
        <div className='landing-features'>
            <div className='features-head'>
                <p className='features-title'>Explore our features</p>
                <p className='features-subtitle'>We work hard every day to make life of our clients better and happier</p>
            </div>
            <div className='features'>
                <CardGroup>
                    {features.map(({ img, title, subtitle }) => (
                        <Card key={title} style={title === 'Ability to create portfolio' ? {} : { marginRight: '24px' }}>
                            <div>
                                {img}
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {title}
                                </CardTitle>
                                <CardText>
                                    {subtitle}
                                </CardText>
                            </CardBody>
                        </Card>
                    ))}
                </CardGroup>
            </div>
        </div>
    )
}

export default LandingFeatures