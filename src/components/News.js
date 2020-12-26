import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class News extends React.Component {
  render() {
    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home / News & Research</p>
        </div>
        <div className="content-body-section">
          <Container>
            <Row>
              <Col md={12}>
                <p>Primary, here’s an overview of your investment with us:</p>
                <h4 className="heading-margin">News & Reserch</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default News;