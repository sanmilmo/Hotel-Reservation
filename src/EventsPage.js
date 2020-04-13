import React, { Component } from 'react'
import Events from "./Events"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <Container className='info-room'>
            <Row>
                <Col sm={4}><Events 
                    title={"Latin music artist"} 
                    subTitle={"BUNBURY"} 
                    date={"Sep 19"} 
                    image={"./images/event-1.jpg"} 
                    details={"September 19, 2020 | The Chelsea | Doors open at 7PM | Show at 8PM, Tickets start at $59 + taxes/fees"}
                    explanation={"Enrique Bunbury started his singing and songwriting career in 1986 as a member of the legendary Spanish rock band Héroes del Silencio. The group was together for ten years, during which they recorded four studio albums that redefined Spanish rock, including their pop debut, \"El Mar No Cesa\" (1988), \"Senderos de Traición\" (1990), \"El Espíritu del Vino\" (1993) and \"Avalancha\" (1996)."}/></Col>
                <Col sm={4}><Events 
                    title={"Multi-platinum artist"} 
                    subTitle={"JOHN LEGEND"} 
                    date={"Nov 20"} 
                    image={"./images/eventJohn.jpg"}
                    details={"November 20, 2020 | The Chelsea, Doors open at 7PM | Show at 8PM, Tickets start at $35 + taxes/fees"}
                    explanation={"Multi-platinum artist John Legend has garnered eleven Grammy Awards, an Academy Award, a Golden Globe Award, a Tony Award, and an Emmy Award, making Legend the first African-American man to earn an EGOT. Legend has released six celebrated albums including, Get Lifted (2004), Once Again (2006), Evolver (2008), Love in the Future (2013), Darkness and Light (2016), and A Legendary Christmas (2018)."}/></Col>
                <Col sm={4}><Events 
                    title={"Cinema experience"} 
                    subTitle={"AVENGERS: ENDGAME"} 
                    date={"Sep 07"} 
                    image={"./images/EventMovies.jpg"}
                    details={"September 07, 2020 | The Chelsea, Doors open at 7PM | Show at 8PM, Tickets start at $40 + taxes/fees"}
                    explanation={"Monday evenings from May 11 to Labor Day, the marquee at Boulevard Pool transforms into a colossal movie screen, showing your favorite films high above The Las Vegas Strip. From classic films to modern blockbusters, take a dip or lounge poolside as you sip on handcrafted, movie-themed cocktails and enjoy creative movie snacks under the stars."}/></Col>
            </Row>
            <br></br>
            <Row>
              <Col sm={4}><Events 
                  title={"Sueños Tour"} 
                  subTitle={"SECH"} 
                  date={"Jun 21"} 
                  image={"./images/EventSuenos.jpg"}
                  details={"June 21, 2020 | The Chelsea, Doors open at 7PM | Show at 8PM, Tickets start at $70 + taxes/fees"}/></Col>
              <Col sm={4}><Events 
                  title={"how I'm feeling world tour"} 
                  subTitle={"LAUV"} 
                  date={"Aug 22"} 
                  image={"./images/EventLau.jpg"}
                  details={"August 22, 2020 | The Chelsea, Doors open at 7PM | Show at 8PM, Tickets start at $45 + taxes/fees"}/></Col>
              <Col sm={4}><Events 
                  title={"Comedy at The Chelsea"} 
                  subTitle={"BILL BURR"} 
                  date={"Jul 27"} 
                  image={"./images/EventBill.jpg"}
                  details={"July 27, 2020 | The Chelsea, Doors open at 7PM | Show at 8PM, Tickets start at $55 + taxes/fees"}/></Col>
            </Row>
        </Container>
      </div>
    )
  }
}
