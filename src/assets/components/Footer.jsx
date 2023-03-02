import React from 'react';

import '../css/Footer.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footerContainer container-fluid">

            <footer className='footer container-lg'>
                <Row>
                    <Col xs={ 12 } sm={ 6 }>

                        <section className="contactInfo">

                            <h2>Kontakt info</h2>
                            <ul>
                                <li>Jonas Bjørn Pedersen</li>
                                <li><FontAwesomeIcon icon={ faEnvelope } /> <a target="_blank" href="mailto:jonasbjoern@gmail.com"> jonasbjoern@gmail.com</a></li>
                                <li><FontAwesomeIcon icon={ faEnvelope } /> <a target="_blank" href="mailto:jona09h3@videndjurs.net"> jona09h3@videndjurs.net</a> </li>
                                <li><FontAwesomeIcon icon={ faHome } /> Skolestræde 1, 2.tv, <br /><span>8500 Grenaa</span></li>
                            </ul>

                        </section>

                    </Col>
                    <Col xs={ 12 } sm={ 6 } >

                        <section className="socials">
                            <h2>Links</h2>
                            <Row className="mb-2 mt-2">
                                <Col>
                                    <a href="https://github.com/JoPed" target="_blank"> <FontAwesomeIcon icon={ faGithub } /> </a>
                                    <a href="https://www.linkedin.com/in/joped" target="_blank"> <FontAwesomeIcon icon={ faLinkedin } /> </a>
                                    <a href="https://twitter.com/JoPed93" target="_blank"> <FontAwesomeIcon icon={ faTwitterSquare } /> </a>
                                    <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=1468180457" target="_blank"> <FontAwesomeIcon icon={ faFacebookSquare } />  </a>
                                </Col>
                            </Row>

                        </section>

                    </Col>
                </Row>
            </footer>


        </div>
    )
}

export default Footer;