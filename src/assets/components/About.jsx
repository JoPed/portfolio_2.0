import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = ({ data }) => {

    return (
        <section id="about" className="container-fluid pb-3">
            <Row>
                <Col xs={{span: 12, order: 2}} lg={{span:6, order: 1, offset:0}}>
                    <h1 className="mt-3">{data.content[0].headline}</h1>

                    <Row>
                        <Col>
                            <article>
                                <p className="mainText">{data.content[0].paragraphs.map(item => item)}</p>
                            </article>
                        </Col>
                    </Row>
                </Col>

                <Col xs={{span:12, order: 1}} md={{span: 6, offset:3}} lg={{span:6, order: 2, offset:0}}>
                    <figure className="mt-3 mx-auto" id="portrait">
                        <img src="/assets/images/desktop/Portrait_Jonas_Pedersen.jpg" alt="Portrait of Jonas Bjørn Pedersen" />
                    </figure>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} md={{span: 10, offset:1}}>
                    <hr className="ruler" />
                </Col>
            </Row>


        </section>

    )
}
export default About;