import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Food from './Food'


export default class FoodPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={{color: '#612c73', margin: '40px auto', textAlign: 'center'}}>RESTAURANT COLLECTION</h1>
                    <h5 style={{color: 'white', margin: '40px auto', textAlign: 'center'}}>"Dining is reinvented at SANMO hotel with a one-of-a-kind restaurant collection featuring world-class</h5>
                    <h5 style={{color: 'white', margin: '40px auto', textAlign: 'center'}}>lavors and aufthentic dining options by famed restaurateurs.</h5>
                </div>
                    <Container className='info-room'>
                        <Row>
                            <Col sm={4}><Food 
                                image={"./images/RestoBlue.jpg"} 
                                name={"BEAUTY & ESSEX"}
                                paragraph={"A partnership with TAO Group and acclaimed chef and restaurateur Chris Santos, Beauty & Essex offers unique sharing plates and new twists on classic cocktails in a speakeasy-like setting."} 
                                />
                            </Col>
                            <Col sm={4}><Food 
                                image={"./images/RestoJose.jpg"} 
                                name={"É BY JOSÉ ANDRÉS"}
                                paragraph={"é by José Andrés is tucked away in a small private room adjacent to Jaleo’s bustling bar and paella grill, and accessed through a glass door emblazoned with the letter é."} 
                                />
                            </Col>
                            <Col sm={4}><Food 
                                image={"./images/RestoBurger.jpg"} 
                                name={"HOLSTEINS"}
                                paragraph={"Holsteins offers deliciously crafted burgers, riffs on traditional American snacks, a wide selection of craft and draft beers, and a list of signature Bam-Boozled, alcohol-infused milkshakes."} 
                                />
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col sm={4}><Food 
                                image={"./images/RestoJuice.jpg"} 
                                name={"THE JUICE STANDARD"}
                                paragraph={"The Juice Standard is a stylish juicery known for its signature cold-pressed juices and nut milks."} 
                                />
                            </Col>
                            <Col sm={4}><Food 
                                image={"./images/RestoMilk.jpg"} 
                                name={"MILK BAR"}
                                paragraph={"Milk Bar is the highly acclaimed bakery founded by award-winning chef and owner Christina Tosi. Milk Bar puts a playful spin on familiar homestyle desserts and savory snacks using quality ingredients and locally sourced dairy."} 
                            />
                           </Col>
                            <Col sm={4}><Food 
                                image={"./images/RestoStk.jpg"} 
                                name={"STK"}
                                paragraph={"A new take on the traditional steakhouse, STK offers a flirty, bustling bar scene, an inspiring menu, and a sexy, energetic dining atmosphere."} 
                            />
                            </Col>
                        </Row>
                    </Container>
         </div>
        )

    }
    
}
