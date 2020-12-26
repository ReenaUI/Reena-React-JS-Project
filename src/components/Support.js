import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
class Support extends React.Component {
  render() {
    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home / Support</p>
        </div>
        <div className="content-body-section support-block">
          <Container>
  
            <Row>
              <Col md={12}>
                <div>
                  <Row>
                    <Col md={4}>
                        <div className="white-background support-box">
                            <h3>Contact & Support:</h3>
                            <address>
                              <a href="tel:64 9 300 848"> +64 9 300 8484</a>
                              <a href="tel:0800 646 833">0800 646 833</a>
                              <a href="mailto:info&#64;mintasset.co.nz">info&#64;mintasset.co.nz</a>
                            </address>
                          </div>
                    </Col>

                    <Col md={4}>
                        <div className="white-background support-box">
                            <h3>Office Address:</h3>
                            <address>
                              <span>SAP Tower 151 Queen Street</span>
                              <span>Auckland Central</span>
                             <span>Auckland</span>
                             <a href="https://maps.google.com/maps?q=SAPTower151QueenStreet,AucklandCentral,Auckland,"> <i className="fa fa-map-marker" aria-hidden="true"></i></a>
                            </address>
                          </div>
                    </Col>

                    <Col md={4}>
                        <div className="white-background support-box">
                            <h3>Postal Address:</h3>
                            <address>
                              <span>123 Remuera Road</span>
                              <span>Remuera</span>
                              <span>Auckland</span>
                              <span>New Zealand</span>
                            </address>
                          </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={12} className="mt-4">
                <div className="white-background faq">
               
                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                    <div className="faq-content">
                      <Link className="faq-heading" to="/Faq">
                      <span>FAQ's</span>
                      <p>Frequently Asked Questions</p>
                      </Link> 
                      
                    </div>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Support;