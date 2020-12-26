import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FaqTabs from "./Assets/FaqTabs";

class Faq extends React.Component {
  render() {
    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home /  FAQ</p>
        </div>
          <div className="faq-page content-body-section support-block">
              <Container>
                  <Row>
                    <Col md={12}>
                        <FaqTabs />
                    </Col>
                  </Row>
            </Container>
        </div>
      </div>
    );
  }
}
export default Faq;