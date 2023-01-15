import { useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import FormText from 'react-bootstrap/FormText';



import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from '../../Schema';

import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Contactinfo = () => {

  // Creating a useState to store the datasubmitted from the form. Starting value of empty object
  const [ submitting, setSubmitting ] = useState( false );
  const [ message, setMessage ] = useState();
  const [ recaptchaToken, setRecaptchaToken ] = useState();

  const _SPARKFORMID = '1lIsDWsS';
  const _FORMSPARKURL = `https://submit-form.com/${ _SPARKFORMID }`;
  const _RECAPTCHAKEY = '6LfN-d8jAAAAAKHnUwCVJMlDEZ0It-td0U-22zqG';
  const recaptchaRef = useRef();

  //useForm hook. By setting the default values to '' the form fields values can be reset isSubmitSuccessful
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm( {
    resolver: yupResolver( Schema ),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      textArea: ''
    }
  } );

  //Setting the useState to the data object containing the values from the form
  const onSubmit = async ( formData ) => {

    setSubmitting( true );

    const payload = {

      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.textArea,
      "g-recaptcha-response": recaptchaToken

    };

    console.log( payload )

    try {
      axios.post( _FORMSPARKURL, payload );
      setMessage( 'Beskeden er blevet sendt. Jeg vil vende tilbage hurtigst muligt.' )
      resetForm();
      recaptchaRef.current.reset();

    } catch ( error ) {
      console.log( error )
      setMessage( 'Der opstod en fejl og beskeden blev ikke sendt. Prøv igen eller prøv at send en mail direkte ved at klikke på mail ikonet.' )
    }

    setSubmitting( false );

  }

  const resetForm = () => {
    reset( { name: '', email: '', subject: '', textArea: '' } );
  }

  const updateRecaptchToken = ( token ) => {
    setRecaptchaToken( token );
  }

  return (

    <section className="page" id="contact">

      <Container fluid="lg">

        <Row className="px-5 px-lg-0">

          <Col xs={ { span: 12, order: 2 } } lg={ { span: 10, order: 1, offset: 1 } } className="px-4">


            <form className="contactForm" onSubmit={ handleSubmit( onSubmit ) }>
              <h2 className="contactHeading">Kontakt</h2>

              {/* //* Change this to use same concept as the notification in my hangman game */ }
              {/* { message && <div className="submissonInfo">
                <span>Information</span> <br />
                  { message }
                </div> } */}

              <p className="mainText">Brug af kontakt formular skal ske på tablet eller pc.<br /> Ellers brug mail ikonet ovenover der åbner din
                stardard mail application.</p>

              <Row>

                <Col xs={ 12 }>

                  <label htmlFor="email" className="label">Email</label>

                  <input
                    type="email"
                    id="email"
                    className="input-email"
                    placeholder="Skriv din mail..."
                    { ...register( 'email' ) } />

                  <FormText className="ms-1 ms-md-0 mt-2 mb-5 errorText d-flex justify-content-center">
                    { errors.email?.message }
                  </FormText>
                </Col>

                <Col xs={ 12 }>
                  <label htmlFor="subject" className="label">Emne</label>
                  <input
                    type="text"
                    id="subject"
                    className="input-subject"
                    placeholder="Emnefelt"
                    { ...register( 'subject' ) } />

                  <FormText className="ms-1 ms-md-0 mt-2 mb-5 errorText d-flex justify-content-center">
                    { errors.subject?.message }
                  </FormText>
                </Col>

              </Row>

              <Row>
                <Col>
                  <label htmlFor="txtArea" className="label">Besked</label>

                  <textarea
                    id="txtArea"
                    className="input-txtArea"
                    cols="30"
                    rows="10"
                    placeholder="Skriv din besked her..."
                    { ...register( 'textArea' ) }
                  />

                  <FormText className="ms-1 ms-md-0 mt-2 mb-5 errorText d-flex justify-content-center">
                    { errors.textArea?.message }
                  </FormText>
                </Col>

              </Row>

              <Row>
                <ReCAPTCHA
                  ref={ recaptchaRef }
                  sitekey={ _RECAPTCHAKEY }
                  onChange={ updateRecaptchToken }
                  className="d-flex justify-content-center"
                />
              </Row>



              <button type="submit" className="submit" disabled={ submitting }> { submitting ? 'Sender besked...' : 'Send besked' }</button>

            </form>
          </Col>

        </Row>

        <Row className="rulerRow ">
          <Col xs={ 12 } md={ { span: 10, offset: 1 } }>
            <hr className="ruler" />
          </Col>
        </Row>

      </Container>



    </section>

  )
}

export default Contactinfo;