import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Documents extends React.Component {
  render() {
    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home / Documents</p>
        </div>
        <div className="content-body-section document-wrap">
          <Container>
            <Row>
              <Col md={12} className="mb-2">
         
                <h4 className="heading-margin sub-heading heading-below-main">Document By Beneficiary ID</h4>
                <p className="document-note">You do not have any documents. Please contact the client services team for any queries.</p>
              </Col>

              <Col md={12}>
                <h4 className="heading-margin sub-heading heading-below-main">Document By Investment Code</h4>
                <Form className="get-doc-wrap p-3">
                    <Form.Group>
                      <Form.Control as="select">
                        <option>select</option>
                        <option>INV476</option>
                      </Form.Control>
                      <Button type="submit" className="get-document-btn theme-btn--green">Get Document List</Button>
                    </Form.Group>
                </Form>
            
              </Col>

            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Documents;