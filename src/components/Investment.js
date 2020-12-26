import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Portfolio from './Portfolio';
import { Link } from "react-router-dom";
class Investment extends React.Component {
    render() {
        return (
            <div className="content-body">
                <div className="content-box">
                    <p>Home / Investment Option</p>
                 </div>
         
                <div id="investment-page" className="content-body-section">
                    <Container>
                        <Row>
                            <Col md={12}>
                            <p className="welcome-note pl-0">We have designed four managed funds, each offering a different investment objective and level of risk. All our funds invest using the same investment principles, tailored to meet different investment outcomes.</p>
                             <h4 className="heading-margin sub-heading heading-below-main">Investment Options</h4>

                            </Col>
                            <Col xl={8} lg={12}>
                                <Accordion className="theme_accordions">
                                     <Card className="theme_accordions_cells">
                                        <Card.Header className="theme-blue-bg">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Mint Australasian Equity Fund
                                            <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p>This is a single asset class Fund, which typically invests in New Zealand and Australian listed equities.</p>

                                                <Link className="theme-blue-bg" to="/Portfolio">Show me more</Link>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card className="theme_accordions_cells">
                                    <Card.Header className="red-bg">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Mint Australasian Property Fund
                                            <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                            </Accordion.Toggle>
                                        </Card.Header>

                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>This is a single asset class Fund, which typically invests in New Zealand and Australian listed property securities.</p>
                                                <Link className="red-bg" to="/Portfolio">Show me more</Link> 
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>


                                    <Card className="theme_accordions_cells">
                                       <Card.Header className="light-blue-bg">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Mint Diversified Income Fund
                                            <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                            </Accordion.Toggle>
                                        </Card.Header>

                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p>This is a multi-asset class Fund that offers diversification by investing across a number of asset classes both in New Zealand and internationally. These include cash, fixed interest, listed property and equites. Investors have the option to have dividends distributed or reinvested.</p>
                                                <Link className="light-blue-bg" to="/Portfolio">Show me more</Link> 
                                              
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>


                                    <Card className="theme_accordions_cells">
                                             <Card.Header className="light-grey-bg">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            Mint Diversified Growth Fund
                                            <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                            </Accordion.Toggle>
                                        </Card.Header>

                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p>This is a multi-asset class Fund that offers diversification by investing across a number of asset classes both in New Zealand and internationally. The Fund invests primarily in New Zealand and international equities, but will also hold cash and fixed interest securities.</p>
                                                <Link className="light-grey-bg" to="/Portfolio">Show me more</Link> 
                                             
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>


                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        );
    }
}

export default Investment;