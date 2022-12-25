import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

const Contactinfo = () => {
  return (

    <Container fluig="lg" className="contactContainer" id="contact">

      <Row className="px-5 px-lg-0">

        <Col xs={ { span: 12, order: 2 } } lg={ { span: 10, order: 1, offset: 1 } } className="px-4">
          <form className="contactForm">
            <h2 className="contactHeading">Kontakt formular</h2>
            <p className="mainText">Brug af kontakt formular skal ske på tablet eller pc.<br /> Ellers brug mail ikonet ovenover der åbner din
              stardard mail application.</p>

            <input
              type="text"
              name="name"
              className="input-name"
              placeholder="Skriv dit navn..." />

            <input
              type="email"
              name="email"
              className="input-email"
              placeholder="Skriv din mail..." />

            <textarea
              name="txtArea"
              className="input-txtArea"
              cols="30"
              rows="10"
              placeholder="Skriv din besked her..."
            />

            <input type="submit" value="Send beseked" className="submit" />

          </form>
        </Col>

      </Row>

      <Row className="rulerRow">
        <Col xs={ 12 } md={ { span: 10, offset: 1 } }>
          <hr className="ruler" />
        </Col>
      </Row>

    </Container>

  )
}

export default Contactinfo;