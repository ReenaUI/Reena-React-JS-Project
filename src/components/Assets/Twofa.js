import React from "react";
import { Button, Modal, Row, Form } from "react-bootstrap";
import $ from "jquery";

class twofa extends React.Component {
  componentDidMount() {
    $(".two-fa-form").hide();
    $("#cb1").click(function () {
      if ($(this).is(":checked")) {
        $(".two-fa-form").show();
      } else {
        $(".two-fa-form").hide();
      }
    });
  }
  render() {
    return (
      <div>
        <div className="fa-wrapper">
          <h1>2FA is disabled</h1>
          <div className="tg-list">
            <span className="tg-list-item">
              <input className="tgl tgl-light" id="cb1" type="checkbox" />
              <label className="tgl-btn" for="cb1"></label>
            </span>
          </div>

          <div></div>
        </div>
        <div>
          <Form className="col-md-12 two-fa-form">
            <Form.Group controlId="existing-ps" className="row mt-3">
              <Form.Label className="col-lg-6 flex-center">
                Enter Mobile SMS Code
                <Button className="resend-otp">59sec</Button>
              </Form.Label>
              <Form.Control className="col-lg-6" type="text" />
            </Form.Group>

            <Row className="mt-5">
              <Button className="form-btn">Validate OTP</Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
export default twofa;
