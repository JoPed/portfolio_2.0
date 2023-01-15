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

        setIsRemarksOpen(!isRemarksOpen);

        console.log(e.currentTarget.nextElementSibling)

        if(isRemarksOpen){
            e.currentTarget.nextElementSibling.classList.remove("active");
            document.querySelector('.cvList').scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );


        }
        else{
            e.currentTarget.nextElementSibling.classList.add("active");
            e.target.nextElementSibling.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
        }

    }


    return (
        <section id="cv" className="page">

            <Container fluid="lg">

                {/* Row of heading, underline, image and personal info */ }
                <Row className="px-4">

                    {/* Image  */ }
                    <Col
                        xs={ { span: 2, order: 2 } }
                        className="d-none d-md-block"
                    >


                        <picture>
                            <source media="(max-width: 991px )" srcSet={ cvContent.image.imgTablet } />
                            <source media="(max-width: 1199px )" srcSet={ cvContent.image.imgLg } />
                            <source media="(min-width: 1200 )" srcSet={ cvContent.image.imgLx } />

                            <img src={ cvContent.image.imgLg } alt="Jonas Bjørn Pedersen" />

                        </picture>
                    </Col>

                    {/* Heading, underline & contact info  */ }
                    <Col xs={ { span: 12, order: 1 } } md={ { span: 7, offset: 1 } } className="px-0">
                        <Row >
                            {/* Heading */ }
                            <Col xs={ 12 } className="px-0 mt-5" >

                                <Typewriter
                                    headingId="cvHeading"
                                    headline={ cvContent.headline }
                                    enableScrollTrigger={ true }
                                />

                            </Col>

                            {/* Underline  */ }
                            <Col xs={ 12 } className="px-0 d-none d-md-block ">
                                <hr className="ruler" />
                            </Col>

                            {/* personal info */ }
                            <Col xs={ 12 } >
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

                {/* Row of education and employmenthistory */ }
                <Row className="mt-5">

                    {/* education */ }
                    <Col xl={ { span: 5, offset: 1 } }>
                        <h3>Uddannelse</h3>
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
                        xl={ { span: 5, offset: 1 } }
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
                    <Col xl={ { span: 5, offset: 1 } } >
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
                    <Col xl={ { span: 5, offset: 1 } } >
                        <h3>Personlige kompetancer</h3>
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
                    <Col xl={ { span: 6, offset: 3 } } className="mt-5">

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

                {/* <Row className="rulerRow">
                    <Col xs={ 12 } md={ { span: 10, offset: 1 } }>
                        <hr className="ruler" />
                    </Col>
                </Row> */}

            </Container>





        </section>

    )

}

export default Cv;