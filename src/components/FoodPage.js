import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Food from './Food'

export default function FoodPage() {
    return (
        <div>
            <div style={{color: 'white', margin: '40px auto', textAlign: 'center'}}>
                <h1>RESTAURANT COLLECTION</h1>
                <p>Dining is reinvented at The Cosmopolitan with a one-of-a-kind restaurant collection featuring world-class</p>
                <p>flavors and authentic dining options by famed restaurateurs.</p>
            </div>
        <Container className='info-room'>
            <Row>
                <Col sm={4}><Food /></Col>
                <Col sm={4}><Food /></Col>
                <Col sm={4}><Food /></Col>
            </Row>
        </Container>
      </div>
    )
}
