import React from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button } from 'reactstrap'
import { GiConvergenceTarget } from 'react-icons/gi'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { IoMdPricetags } from 'react-icons/io'
import './style.css'

function LandingAdv() {
    const advs = [
        {
            img: <GiConvergenceTarget style={{ width: '50px', height: '50px', margin: '16px', color: '#45b1ff' }} />,
            title: 'Objectivity',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: <MdOutlineProductionQuantityLimits style={{ width: '50px', height: '50px', margin: '16px', color: '#ff455b' }} />,
            title: 'Quality',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: <IoMdPricetags style={{ width: '50px', height: '50px', margin: '16px', color: '#45f7ad' }} />,
            title: 'Price',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
    ]

    return (
        <div className='landing-adv'>
            <div className='adv-head'>
                <p className='adv-title'>Our advantages</p>
                <p className='adv-subtitle'>We work hard every day to make life of our <br />clients better and happier</p>
            </div>
            <div className='advs'>
                <CardGroup>
                    {advs.map(({ img, title, subtitle }) => (
                        <Card key={title} style={title === 'Price' ? {} : { marginRight: '2rem' }}>
                            <div className='icon'>
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

export default LandingAdv