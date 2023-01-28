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

import Notification from "../../Notification";
import Typewriter from "../../Typewriter";

const Contactinfo = () => {

  // Creating a useState to store the datasubmitted from the form. Starting value of empty object
  const [ submitting, setSubmitting ] = useState( false );
  const [ message, setMessage ] = useState( {
    msg: '',
    class: ''
  } );
  const [ isVisible, setIsVisible ] = useState( false );
  const [ recaptchaToken, setRecaptchaToken ] = useState();
  const notificationRef = useRef();

  const _SPARKFORMID = '1lIsDWsS';
  const _FORMSPARKURL = `https://submit-form.com/${ _SPARKFORMID }`;
  const _RECAPTCHAKEY = '6LfN-d8jAAAAAKHnUwCVJMlDEZ0It-td0U-22zqG';
  const recaptchaRef = useRef();

  //useForm hook. By setting the default values to '' the form fields values can be reset isSubmitSuccessful
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm( {
    resolver: yupResolver( Schema ),
    defaultValues: {
      mail: '',
      subject: '',
      textArea: ''
    }
  } );

  //Setting the useState to the data object containing the values from the form
  const onSubmit = async ( formData ) => {

    setSubmitting( true );

    const payload = {

      email: formData.mail,
      subject: formData.subject,
      message: formData.textArea,
      "g-recaptcha-response": recaptchaToken

    };

    axios.post( _FORMSPARKURL, payload ).then( () => {
      setMessage( {
        msg: 'Beskeden er blevet sendt. Jeg vil vende tilbage hurtigst muligt.',
        class: 'success'
      } )
      resetForm();
      recaptchaRef.current.reset();
    } ).catch( () => {
      setMessage( {
        msg: `Der opstod en fejl og beskeden blev ikke sendt.\n\n Prøv igen eller prøv at send en mail direkte ved at klikke på mail ikonet.`,
        class: 'failed'
      } )

    } ).finally( () => {
      setSubmitting( false );
      setIsVisible( true );
    } )

  }

  const onInvalid = () => {
    setIsVisible( true );
    setMessage( {
      msg: `Der opstod en fejl og beskeden blev ikke sendt.\n\nPrøv igen eller prøv at send en mail direkte ved at klikke på mail ikonet.`,
      class: 'failed'

    } )
  }

  const resetForm = () => {
    reset( { mail: '', subject: '', textArea: '' } );
  }

  const updateRecaptchToken = ( token ) => {
    setRecaptchaToken( token );
  }

  return (

    <section className="page" id="contact">

      {/* //* Change this to use same concept as the notification in my hangman game */ }

      <Container fluid="lg">

        <Row className="px-0 px-md-5 px-lg-0">

          <Col xs={ { span: 12, order: 2 } } lg={ { span: 10, order: 1 } } className="px-4">

            <form className="contactForm" id="contactForm" onSubmit={ handleSubmit( onSubmit, onInvalid ) }>

              <Row className="px-0">

                <Col xs={ { span: 12 } } lg={ { span: 10} } className="mt-5 ">

                  <Typewriter
                    headingId="contactHeading"
                    headline={ 'Kontakt' }
                  />

                </Col>

              </Row>

              <p className="mainText">Brug af kontakt formular skal ske på tablet eller pc.<br /> Ellers brug mail ikonet ovenover der åbner din
                stardard mail application.</p>

              <Row>

                <Col xs={ 12 } sm={6}>

                  <label htmlFor="e-mail" className="label">Email</label>

                  <input
                    type="text"
                    id="e-mail"
                    className="input-email"
                    placeholder="Skriv din mail..."
                    { ...register( 'mail' ) } />

                  <FormText className="ms-1 ms-md-0 mt-1 mb-5 errorText d-flex justify-content-center">
                    { errors.mail?.message }
                  </FormText>
                </Col>

                <Col xs={ 12 } sm={6}>
                  <label htmlFor="subject" className="label">Emne</label>
                  <input
                    type="text"
                    id="subject"
                    className="input-subject"
                    placeholder="Emnefelt"
                    { ...register( 'subject' ) } />

                  <FormText className="ms-1 ms-md-0 mt-1 mb-5 errorText d-flex justify-content-center">
                    { errors.subject?.message }
                  </FormText>
                </Col>

              </Row>

              <Row>
                <Col lg={ 12 }>
                  <label htmlFor="txtArea" className="label">Besked</label>

                  <textarea
                    id="txtArea"
                    className="input-txtArea"
                    cols="30"
                    rows="10"
                    placeholder="Skriv din besked her..."
                    { ...register( 'textArea' ) }
                  />

                  <FormText className="ms-1 ms-md-0 mt-1 mb-5 errorText d-flex justify-content-center">
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



              <button type="submit" className="submit" form="contactForm" disabled={ submitting }> { submitting ? 'Sender besked...' : 'Send besked' }</button>

              <Row>
                <Col className="mt-5">
                  <Notification
                    message={ message.msg }
                    notificationRef={ notificationRef }
                    customClass={ message.class }
                  />
                </Col>
              </Row>



            </form>
          </Col>

        </Row>

        <Row className="rulerRow ">
          <Col xs={ { span: 10, offset: 1 }} >
            <hr className="ruler" />
          </Col>
        </Row>

      </Container>



    </section>

  )
}

export default Contactinfo;