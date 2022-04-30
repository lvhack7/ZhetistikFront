import React from 'react'
import { Card, CardBody, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import './style.css'

function LandingSearch() {
    return (
        <div className="search-bg">
            <Card style={{ background: 'transparent' }}>
                <CardBody className="overlay d-flex align-items-center justify-content-center">
                    <div className="py-3 px-5">
                        <div className='search-head'>
                            <h1 className="search-title">Find the right college for you!</h1>
                            <p className="search-subtitle">Enter the name of university</p>
                        </div>
                        <InputGroup style={{ width: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Input placeholder="University name" />
                            <InputGroupAddon addonType='append'>
                                <Button color='primary'>
                                    Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default LandingSearch