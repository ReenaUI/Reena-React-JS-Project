import React from 'react';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function FundsBlock() {
    return (
            <Container className="funds-block">
                <Row>
                    <h1 className="col-md-12 fund sub-heading">Your Funds</h1>
                    <Col md={12}>
                    <div className="third">
                    <Row className="wrap-link">
                        <Col md={12}>
                        <h1 className="equity">Mint Australasian Equity Fund</h1>
                            {/* <link variant="primary fund blue grey-btn">Show Me More</link> */}
                            <Link className="primary fund" to="/Showmemore">Show me more</Link>
                        </Col>
                    </Row>
                    
            
                    <Row>
                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6>CONTRIBUTIONS</h6>
                    <h5>$1,548.00</h5>
                    </div>
                    </Col>

                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6>WITHDRAWALS</h6>
                    <h5>$0.00</h5>
                    </div>
                    </Col>

                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6> CURRENT BALANCE</h6>
                    <h5>$6,002.63</h5>
                    </div>
                    </Col>


                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                
                    <h6 className="pulse-main performance-fund">PERFORMANCE   
                        <div className="popover__wrapper">
                    
                            <h2 className="popover__title">
                                <div className="center pulse-wrap">
                                <div className="pulse"></div>
                                </div>
                            </h2>
                            
                            <div className="popover__content popover__content-right">
                            <p>This is a non-annualised return, after fees have been deducted and before tax, since inception of the fund to the latest valuation date.</p>
                            </div>
                        </div>

                        </h6>
                    <h5>1,548.00%</h5>
                    </div>
                    </Col>

                    </Row>

                    

                    </div>
                    </Col>

                    <Col md={12}>
                    <div className="third">
                    <Row className="wrap-link">
                    <Col md={12}>
                    <h1 className="equity">Mint Australasian Equity Fund</h1>
                        {/* <link variant="primary fund blue grey-btn">Show Me More</link> */}
                        <Link className="primary fund red" to="/Showmemore">Show me more</Link>
                    </Col>
                    </Row>
                
            
                    <Row>
                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6>CONTRIBUTIONS</h6>
                    <h5>$1,548.00</h5>
                    </div>
                    </Col>

                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6>WITHDRAWALS</h6>
                    <h5>$0.00</h5>
                    </div>
                    </Col>

                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    <h6> CURRENT BALANCE</h6>
                    <h5>$6,002.63</h5>
                    </div>
                    </Col>


                    <Col lg={3} md={6} className="fund-cell">
                        <div className="fundcolor">
                    
                    <h6 className="pulse-main performance-fund">PERFORMANCE   
                        <div className="popover__wrapper">
                    
                            <h2 className="popover__title">
                                <div className="center pulse-wrap">
                                <div className="pulse"></div>
                                </div>
                            </h2>
                            
                            <div className="popover__content popover__content-right">
                            <p>This is a non-annualised return, after fees have been deducted and before tax, since inception of the fund to the latest valuation date.</p>
                            </div>
                        </div>

                        </h6>
                    <h5>1,548.00%</h5>
                    </div>
                    </Col>

                    </Row>

                    

                    </div>
                    </Col>

                    <Col md={12}>
                        <div className="third">
                        <Row className="wrap-link">
                        <Col md={12}>
                        <h1 className="equity">Mint Australasian Equity Fund</h1>
                            {/* <link variant="primary fund blue grey-btn">Show Me More</link> */}
                            <Link className="primary fund blue grey-btn" to="/Showmemore">Show me more</Link>
                        </Col>
                        
                        </Row>
                    
                        <Row>
                        <Col lg={3} md={6} className="fund-cell">
                            <div className="fundcolor">
                        <h6>CONTRIBUTIONS</h6>
                        <h5>$1,548.00</h5>
                        </div>
                        </Col>

                        <Col lg={3} md={6} className="fund-cell">
                            <div className="fundcolor">
                        <h6>WITHDRAWALS</h6>
                        <h5>$0.00</h5>
                        </div>
                        </Col>

                        <Col lg={3} md={6} className="fund-cell">
                            <div className="fundcolor">
                        <h6> CURRENT BALANCE</h6>
                        <h5>$6,002.63</h5>
                        </div>
                        </Col>


                        <Col lg={3} md={6} className="fund-cell">
                            <div className="fundcolor">
                            <h6 className="pulse-main performance-fund">PERFORMANCE   
                            <div className="popover__wrapper">
                        
                                <h2 className="popover__title">
                                    <div className="center pulse-wrap">
                                    <div className="pulse"></div>
                                    </div>
                                </h2>
                                
                                <div className="popover__content popover__content-right">
                                <p>This is a non-annualised return, after fees have been deducted and before tax, since inception of the fund to the latest valuation date.</p>
                                </div>
                            </div>

                            </h6>
                        <h5>1,548.00%</h5>
                        </div>
                        </Col>

                        </Row>

                        

                        </div>
                        </Col>
                </Row>
            </Container>
        );
    }

  export default FundsBlock;