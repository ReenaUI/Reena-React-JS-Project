import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePick from "../Assets/DatePick";
import PDSCancelled from "../ModalsView/PDSCancelled";
import AddFundConfirmation from "../ModalsView/AddFundConfirmation";
import $ from "jquery";

class Make_Investment extends React.Component {
  componentDidMount() {
    $(".main1-active").addClass("active");
    
    $(".pdsYes-btn").click(function () {
      $(".step1").css("display", "block");
      $(".pds-block").css("display", "none");
      $(".step1-active").addClass("active");
      $(".main1-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step1back").click(function () {
      $(".step1").css("display", "none");
      $(".pds-block").css("display", "block");
      $(".main1-active").addClass("active");
      $(".step1-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step1-btn").click(function () {
      $(".step2").css("display", "block");
      $(".step1").css("display", "none");
      $(".direct-debit-block,.debit-credit-block").css("display", "block");
      $(".step2-active").addClass("active");
      $(".step1-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".regular-btn,.one-off-regular-btn").click(function () {
      $(".step2").css("display", "block");
      $(".step1").css("display", "none");
      $(".direct-debit-block").css("display", "block");
      $(".debit-credit-block").css("display", "none");
      $(".step2-active").addClass("active");
      $(".step1-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step2back").click(function () {
      $(".step1").css("display", "block");
      $(".step2").css("display", "none");
      $(".step1-active").addClass("active");
      $(".step2-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".direct-credit-block-btn").click(function () {
      $(".step3").css("display", "block");
      $(".step2").css("display", "none");
      $(".step3-active").addClass("active");
      $(".step2-active").removeClass("active");
      $(".step3 .all-oneoffinvestment").css("display", "block");
      $(".step3 .dd-oneoffinvestment").css("display", "none");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".direct-debit-block-btn").click(function () {
      $(".step3").css("display", "block");
      $(".step2").css("display", "none");
      $(".step3-active").addClass("active");
      $(".step2-active").removeClass("active");
      $(".step3 .all-oneoffinvestment").css("display", "none");
      $(".step3 .dd-oneoffinvestment").css("display", "block");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step2back").click(function () {
      $(".step1").css("display", "block");
      $(".step2").css("display", "none");
      $(".step1-active").addClass("active");
      $(".step2-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step3back").click(function () {
      $(".step2").css("display", "block");
      $(".step3").css("display", "none");
      $(".step2-active").addClass("active");
      $(".step3-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step3next").click(function () {
      $(".step4").css("display", "block");
      $(".step3").css("display", "none");
      $(".step4-active").addClass("active");
      $(".step3-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step3-btn").click(function () {
      $(".step4").css("display", "block");
      $(".step3").css("display", "none");
      $(".step4-active").addClass("active");
      $(".step3-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step4back").click(function () {
      $(".step3").css("display", "block");
      $(".step4").css("display", "none");
      $(".step4-active").addClass("active");
      $(".step3-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".viewall").click(function () {
      $(".second-s-bank").toggle();
    });

    $(".select-bank").click(function () {
      $(".step5").css("display", "block");
      $(".step4").css("display", "none");
      $(".step5-active").addClass("active");
      $(".step4-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step5back").click(function () {
      $(".step4").css("display", "block");
      $(".step5").css("display", "none");
      $(".step4-active").addClass("active");
      $(".step5-active").removeClass("active");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });

    $(".step-5-yes, .invst-btn").click(function () {
        $(".step6").css("display", "block");
        $(".step5").css("display", "none");
        $(".confirmation-modal").css("display", "none");
        $(".step6-active").addClass("active");
        $(".step5-active").removeClass("active");
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "fast"
        );
      });
  }

  render() {
    return (
      <div className="content-body make-investment-page">
        <div className="content-box">
          <p>Home / Payment</p>
        </div>

        <div className="content-body-section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="progress-bar">
                  <div className="main1-active progressbar-items">
                      <span className="counter">1</span>
                      <span>Agreement to PDS</span>
                    </div>
                    
                  <div className="step1-active progressbar-items">
                    <span className="counter">2</span>
                    <span>Frequency</span>
                  </div>
                  <div className="step2-active progressbar-items">
                    <span className="counter">3</span>
                    <span>Payment type</span>
                  </div>
                  <div className="step3-active progressbar-items">
                    <span className="counter">4</span>
                    <span>Amount</span>
                  </div>
                  <div className="step4-active progressbar-items">
                    <span className="counter">5</span>
                    <span>Select Bank</span>
                  </div>
                  <div className="step5-active progressbar-items">
                    <span className="counter">6</span>
                    <span>Review</span>
                  </div>
                  <div className="step6-active progressbar-items">
                    <span className="counter">7</span>
                    <span>Confirmation</span>
                  </div>
         
   
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={12}>
                <div className="transaction-cells white-background">
                  <div className="pds-block">
                    <h2>Investor number:INVT1201</h2>
                    <a href="#" className="agree-pds">Agreement to PDS</a>
                    <div className="btn-wrap">
                        <Button className="payment-btn pdsYes-btn">
                           Yes
                        </Button>
                        <PDSCancelled />
                      </div>
                  </div>
                {/* step pds */}

                  <div className="step1">
                    <div className="form-group">
                      <span>Investor number :</span> <span>INV476</span>
                    </div>
                    <div className="form-group">
                      <h2>Select payment type:</h2>
                      <div className="btn-wrap">
                        <Button className="payment-btn step1-btn">
                          One off investment
                        </Button>
                        <Button className="payment-btn regular-btn">
                          Regular investment
                        </Button>
                        <Button className="payment-btn one-off-regular-btn">
                          One off + regular investment
                        </Button>
                      </div>
                    </div>
                    <div class="pagination-btn-wrap">
                      <Button className="back-btn mt-0 step1back">Back</Button>
                    </div>
                  </div>
                  {/* step1 */}

                  <div className="step2">
                    <div className="form-group">
                      <h2>How would you like to pay?</h2>
                      <div className="debit-credit-block mb-4">
                        <div className="payment-cards-selection">
                          <i class="fa fa-credit-card" aria-hidden="true"></i>
                          <h3>Direct Credit</h3>
                          <p>
                            We will provide you with the Fund’s bank account
                            details. Please make an online transfer and use your
                            investor number as a banking reference. <br />
                            Note: Mint will not be held responsible for
                            insufficiently referenced payments.
                          </p>
                          <label class="custom-radio direct-credit-block-btn">
                            <input type="checkbox" name="checkbox1" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="direct-debit-block mb-4">
                        <div className="payment-cards-selection">
                          <i class="fa fa-credit-card" aria-hidden="true"></i>
                          <h3>Direct Debit</h3>
                          <p>
                            You will need to complete an online direct debit
                            form to process this transaction. Once the
                            instruction is submitted, it takes three business
                            days to allocate units to your account.
                          </p>
                          <label class="custom-radio direct-debit-block-btn">
                            <input type="checkbox" name="checkbox2" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <Button className="back-btn mt-0 step2back">Back</Button>
                    </div>
                  </div>
                  {/* step3 */}

                  <div className="step3">
                    <Form className="col-md-12 all-oneoffinvestment">
                      <h2>One off investment</h2>
                      <Form.Group controlId="update-amount" className="row">
                        <Form.Label className="col-sm-6">
                          Enter the amount you want to invest now:
                        </Form.Label>
                        <Form.Control
                          className="col-sm-6 update-amount"
                          type="text"
                          placeholder="Enter $ amount"
                        />
                      </Form.Group>
                    </Form>

                    <Form className="col-md-12 dd-oneoffinvestment">
                      <h2>One off investment</h2>
                      <Form.Group controlId="update-amount" className="row">
                        <Form.Label className="col-sm-6">
                          Enter the amount you want to invest now:
                        </Form.Label>
                        <Form.Control
                          className="col-sm-6 update-amount"
                          type="text"
                          placeholder="Enter $ amount"
                        />
                      </Form.Group>

                      <Form.Group controlId="selectDate" className="row">
                        <Form.Label className="col-sm-6">
                          Select a date:
                        </Form.Label>
                        <Col className="p-0 col-sm-6">
                          <DatePick />
                        </Col>
                      </Form.Group>
                    </Form>

                    <div class="pagination-btn-wrap">
                      <Button className="back-btn mt-0 step3back">Back</Button>
                      <Button className="back-btn mt-0 step3next">Next</Button>
                    </div>
                  </div>

                  <div className="step4">
                    <div className="col-md-12">
                      <h2>Select bank account</h2>
                      <div className="select-bank-wrap">
                        <div class="select-bank">
                          <span>Account on file:</span>
                          <span>NZD account</span>
                          <span>ending in </span>
                          <span>5759</span>
                          <span>kaylaa new</span>
                        </div>

                        <div class="select-bank second-s-bank">
                          <span>Account on file:</span>
                          <span>NZD account</span>
                          <span>ending in </span>
                          <span>6284</span>
                          <span>kaylaa new</span>
                        </div>

                        <div class="select-bank second-s-bank">
                          <span>Account on file:</span>
                          <span>NZD account</span>
                          <span>ending in </span>
                          <span>4860</span>
                          <span>kaylaa new</span>
                        </div>
                      </div>
                      <Button className="viewall">View All</Button>
                    </div>

                    <div class="pagination-btn-wrap">
                      <Button className="back-btn mt-0 step4back">Back</Button>
                    </div>
                  </div>

                  <div className="step5">
                    <div className="col-md-12">
                      <h2 className="mt-4 mb-2">Payment details</h2>
                    </div>
                    <div className="col-md-12">
                      <p>
                        New investment of $11,111.00 into the Mint Australasian
                        Property Fund
                      </p>
                    </div>
                    <div className="col-md-12">
                      <h2 className="mt-4 mb-2">Details for payment</h2>
                      <div className="flex-between-center border-btm">
                        <span>Investment Fund</span>
                        <span>Mint Australasian Property Fund</span>
                      </div>
                      <div className="flex-between-center border-btm">
                        <span>Payment Frequency</span>
                        <span>one off</span>
                      </div>

                      <h2 className="mt-4 mb-2">Direct debit account</h2>
                      <div className="flex-between-center border-btm mb-2">
                        <span>Account Name</span>
                        <span>kaylaa new</span>
                      </div>
                      <div className="flex-between-center border-btm mb-2">
                        <span>Bank Code</span>
                        <span>15</span>
                      </div>

                      <div className="flex-between-center border-btm mb-2">
                        <span>Branch</span>
                        <span>3959</span>
                      </div>

                      <div className="flex-between-center border-btm mb-2">
                        <span>Account Number</span>
                        <span>0525759</span>
                      </div>

                      <h2 className="mt-4 mb-2">Payment reference</h2>
                      <div className="flex-between-center border-btm mb-2">
                        <span>Reference</span>
                        <span>INVT1201</span>
                      </div>

                      <label class="custom-checkbox agree-terms mt-4">I have read and agree to <a href="#">Direct Debit Terms and Conditions.</a>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                   </div>
                    <div class="pagination-btn-wrap">
                      <Button className="back-btn mt-0 step5back">Back</Button>
                 
                     <AddFundConfirmation />
           
                     
                    </div>
                  </div>

                  <div className="step6">
                    <div className="col-md-12 thanx-note">
                      <h2>
                        Thanks for Your investment in Mint Australasian Equity
                        Fund.
                      </h2>
                    </div>
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

export default Make_Investment;
