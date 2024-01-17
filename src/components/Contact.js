import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
   
  const form = useRef();
 
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

 

  const SendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending");
  
    emailjs.sendForm('service_5b4ayjj', 'template_xva5dgl', form.current, 'jA2Tl2ECSMLQOeBPy')
      .then((response) => {
        console.log('Email sent:', response);
        setStatus({
          success: true,
          message: 'Email sent successfully!',
        });
  
        // Reset the form after a brief delay (e.g., 2 seconds)
        setTimeout(() => {
          form.current.reset();
          setButtonText("Send");
        }, 2000);
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus({
          success: false,
          message: 'Failed to send email. Please try again later.',
        });
  
        // Reset the form and button immediately for errors
        form.current.reset();
        setButtonText("Send");
      });
  };
  
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={ SendEmail} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="name"   placeholder="Full Name"  />
                      </Col>
                       
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email"   placeholder="Email Address"   />
                      </Col>
                       
                      <Col size={12} className="px-1">
                        <textarea rows="6"  name="message"   placeholder="Message"  ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
  status.message && (
    <Col>
      <p style={{ color: status.success === false ? "#dc3545" : "#28a745" }}>
        {status.message}
      </p>
    </Col>
  )
}

                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
