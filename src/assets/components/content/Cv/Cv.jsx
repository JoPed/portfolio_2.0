import React, { useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { cvContent } from './CvContent';

import Typewriter from '../../Typewriter';

const Cv = () => {

    const [ isRemarksOpen, setIsRemarksOpen ] = useState( false );


    const handleDropdown = ( e ) => {

        setIsRemarksOpen( !isRemarksOpen );

        if ( isRemarksOpen ) {
            e.currentTarget.nextElementSibling.classList.remove( "active" );
            document.querySelector( '.cvList' ).scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
        }
        else {
            e.currentTarget.nextElementSibling.classList.add( "active" );
            e.target.nextElementSibling.scrollIntoView( { behavior: "smooth", block: "center", inline: "nearest" } );
        }

    }


    return (
        <section id="cv" className="page">

            <Container fluid="lg">

                {/* Row of heading, underline, image and personal info */ }
                <Row className="px-4">

                    {/* Image  */ }
                    <Col
                        className='d-none d-md-block'
                        xs={ { span: 2, order: 2 } }
                    >
                        <picture>
                            <source media="(max-width: 991px )" srcSet={ cvContent.image.imgTablet } />
                            <source media="(max-width: 1199px )" srcSet={ cvContent.image.imgLg } />
                            <source media="(min-width: 1200 )" srcSet={ cvContent.image.imgLx } />

                            <img src={ cvContent.image.imgLg } alt="Jonas Bjørn Pedersen" />

                        </picture>
                    </Col>

                    {/* Heading, underline & contact info  */ }
                    <Col xs={ { span: 12, order: 1 } } md={ { span: 8, offset: 1 } } className="px-0">
                        <Row >
                            {/* Heading */ }
                            <Col xs={ 12 } className="px-0 mt-5" >

                                <Typewriter
                                    headingId="cvHeading"
                                    headline={ cvContent.headline }
                                />

                            </Col>

                            {/* Underline  */ }
                            <Col md={ 12 } className="px-0 d-none d-md-block">
                                <hr className="ruler" />
                            </Col>

                            {/* personal info */ }
                            <Col md={ 12 } className="px-0" >
                                <ul id="personalInfoList">
                                    {
                                        cvContent.info.map( i => (
                                            <li
                                                key={ i.id }
                                            >
                                                <FontAwesomeIcon
                                                    icon={ i.icon } />

                                                { ' ' + i.info }

                                            </li>
                                        ) )
                                    }
                                </ul>

                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row className='mt-5 d-block d-md-none'>
                    <Col xs={ { span: 12 } } sm={ { span: 10, offset: 1 } } className="">
                        <p className='mainText'>
                            For at give den bedst mulige bruger oplevelse, kan CV'et ikke ses på mindre skærme. <br /> <br />
                            Tilgengæld kan du downloade det som pdf ved at klikke på knappen.
                        </p>
                    </Col>

                    <Col xs={ { span: 8, offset: 2 } }>
                        <a className='download_btn' download={ "CV_Jonas_Bjørn_Pedersen" } href="./assets/CV.pdf">Download CV</a>
                    </Col>
                </Row>

                <Container fluid className='d-none d-md-block'>
                    {/* Row of education and employmenthistory */ }
                    <Row className="mt-5">

                        {/* education */ }
                        <Col md={ { span: 10, offset: 1 } } xl={ { span: 5, offset: 1 } }>
                            <h3>
                                Uddannelse

                            </h3>
                            <table className="cvTable">

                                <tbody>
                                    {
                                        cvContent.education.map( e => (

                                            <tr key={ e.id }>
                                                <td>{ e.year }</td>
                                                <td><b>{ e.heading.split( "," )[ 0 ] }</b>, { e.heading.split( "," )[ 1 ] } </td>
                                            </tr>

                                        ) )
                                    }
                                </tbody>

                            </table>

                        </Col>

                        {/* employmenthistory */ }
                        <Col
                            md={ { span: 10, offset: 1 } }
                            xl={ { span: 5, offset: 1 } }
                            className="mt-5"
                        >
                            <h3>Ansættelseshistorik</h3>
                            <table className="cvTable">
                                <tbody>
                                    {
                                        cvContent.employmentHistory.map( emp => (
                                            <tr key={ emp.id }>
                                                <td>{ emp.year }</td>
                                                <td>
                                                    <b>{ emp.company }</b>
                                                    { emp.workPlace } <br />

                                                    {
                                                        emp.titles.map( empT => empT ).join( ",\n" )
                                                    }

                                                </td>
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </table>

                        </Col>

                    </Row>

                    {/* Row of skills, personal skills and languange */ }
                    <Row className="mt-5">

                        {/* skills */ }
                        <Col
                            md={ { span: 10, offset: 1 } }
                            xl={ { span: 5, offset: 1 } }
                        >
                            <h3>Færdigheder</h3>
                            <ul className="cvList">


                                {
                                    cvContent.skills.map( s => (

                                        <li key={ s.id } >
                                            { s.mainSkill }

                                            { s.hasOwnProperty( "subSkills" ) ? (
                                                <ul>
                                                    {
                                                        s.subSkills.map( ( ss, ii ) => (
                                                            <li key={ "sub" + ( ii + 1 ) + s.id } id={ "sub" + ii + s.id }>
                                                                { ss }
                                                            </li>
                                                        ) )
                                                    }

                                                    {
                                                        s.hasOwnProperty( "subSkills2" ) ? (
                                                            <li key={ "sub" + s.subSkills.length + s.id } id={ "sub" + s.subSkills.length + s.id }>
                                                                { s.subSkillsHeadline }

                                                                <ul>
                                                                    { s.subSkills2.map( ( ss2, ii2 ) => (
                                                                        <li key={ "sub" + ii2 + s.id } id={ "sub" + ii2 + s.id } >{ ss2 }</li>
                                                                    ) ) }
                                                                </ul>
                                                            </li>
                                                        ) : null
                                                    }

                                                </ul>
                                            ) : null }
                                        </li>

                                    ) )
                                }

                            </ul>

                        </Col>

                        {/* personal skills */ }
                        <Col
                            md={ { span: 10, offset: 1 } }
                            xl={ { span: 5, offset: 1 } }
                            className="mt-5"
                        >
                            <h3>Personlige kompetencer</h3>
                            <ul className="cvList">
                                {
                                    cvContent.personalSkils.map( ps => (
                                        <li key={ ps } className="cvList__personal">{ ps }</li>
                                    ) )
                                }
                            </ul>

                            {/* language */ }
                            <Col xl={ 12 } className="mt-5">
                                <h3>Sprog</h3>

                                <table className="cvTable" >
                                    <tbody>
                                        {
                                            cvContent.language.map( lang => (
                                                <tr key={ lang.id }>
                                                    <td>{ lang.lang }</td>
                                                    <td>{ lang.level }</td>
                                                </tr>
                                            ) )
                                        }
                                    </tbody>
                                </table>

                            </Col>

                        </Col>

                    </Row>


                    {/* Row of other remarks */ }
                    <Row className="mt-5">
                        <Col
                            md={ { span: 10, offset: 1 } }
                            xl={ { span: 6, offset: 3 } }>

                            <h3
                                id="headingOtherRemarks"
                                onClick={ handleDropdown }
                            >
                                Yderligere bemærkninger
                                { ' ' }
                                { isRemarksOpen ? <FontAwesomeIcon icon={ faAngleUp } /> : <FontAwesomeIcon icon={ faAngleDown } /> }</h3>

                            <table className="cvTable otherRemarks mb-5" >
                                <tbody>
                                    {
                                        cvContent.otherRemarks.map( or => (
                                            <tr key={ or.id }>
                                                <td>{ or.year }</td>
                                                <td>
                                                    { or.remark.heading } <br />
                                                    { or.remark.text }
                                                </td>
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </table>

                        </Col>
                    </Row>

                </Container>

                <Row className="rulerRow">
                    <Col xs={ { span: 10, offset: 1 } }>
                        <hr className="ruler" />
                    </Col>
                </Row>

            </Container>
        </section>

    )

}

export default Cv;