import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Riskindicator from './Riskindicator';
import ChartsTwo from './ChartsTwo';
import PiechartTwo from './PiechartTwo';
import InvestmentChart from './InvestmentChart';
import { Link } from "react-router-dom";
class Showmemore extends React.Component {
  render() {
    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home / Investment</p>

          <h6 className="pulse-main sub-heading date-pulse">15 JULY 2020
            <div className="popover__wrapper pulse-white">
        
                <h2 className="popover__title">
                  <div className="center pulse-wrap">
                    <div className="pulse"></div>
                  </div>
                </h2>
              
              <div className="popover__content popover__content-right">
                <p>Latest valuation date</p>
              </div>
            </div>

          </h6>
        </div>
        <div className="content-body-section">
          <Container>
            <Row>
              <Col md={8}>
                <p>Here’s a more detailed look at this particular investment.</p>
                <h4 className="heading-margin main-heading">Mint Australasian Equity Fund</h4>
              </Col>
              <Col md={4}>
                <div className="selling-btn invest-btn text-right">
                  <Link className="btn btn-sm greensa-btn darkgreensa-btn" to="/MakeTransaction">Add Funds</Link>
          
                  <Link className="btn btn-sm greensa-btn transparent-btn" to="/">Sell Funds</Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h6 className="heading-margin pl-1 sub-heading heading-below-main">Investment Overview</h6>
              </Col>
              <Col md={12}>
                <div className="white-background">
                <ul className="investment-chart-options">
                  <li>
                    <span>CONTRIBUTIONS</span>
                    <span>$501.00</span>
                  </li>

                  <li>
                    <span>CURRENT VALUE</span>
                    <span>$501.00</span>
                  </li>

                  <li>
                    <span>PERFORMANCE</span>
                    <span> 5.98%</span>
                  </li>
                </ul>
                <InvestmentChart />
                </div>
              </Col>
            </Row>
            <Row className="investment-details-block">
              <Col md={12} className="mt-3">
                <h6 className="heading-margin sub-heading">Investment Details</h6>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                  <h6>UNIT PRICE</h6>
                  <div className="inner-box">
                    <h5>$4.0037</h5>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                  <h6>UNITS</h6>
                  <div className="inner-box">
                    <h5>1,499.27</h5>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                    <h6 className="pulse-main">DISTRIBUTION METHOD  
                      {/* <div className="popover__wrapper">
                  
                          <h2 className="popover__title">
                            <div className="center pulse-wrap">
                              <div className="pulse"></div>
                            </div>
                          </h2>
                        
                        <div className="popover__content popover__content-right">
                          <p>The Diversified Income Fund makes distributions each quarter following the last Business Day of March, June, September and December. Distributions are made from the net income generated by the Fund and consequently the amount distributed can fluctuate. By ticking the appropriate box in the application form, investors have the option of either having this income paid to their bank account or reinvested to purchase additional units.</p>
                        </div>
                      </div> */}

                    </h6>
                  <div className="inner-box">
                    <h5>INVESTED</h5>
                  </div>
                </div>
              </Col>

             
              <Col lg={3} sm={6}>
                <div className="outer-box">
           
                  <h6 className="pulse-main tax-owed">TAX OWED
                    <div className="popover__wrapper">
                
                        <h2 className="popover__title">
                          <div className="center pulse-wrap">
                            <div className="pulse"></div>
                          </div>
                        </h2>
                      
                      <div className="popover__content popover__content-right">
                        <p>Each Fund is a Portfolio Investment Entity. The amount of tax you pay is based on your prescribed investor rate (PIR). To determine your PIR, go to <a href=" https://www.ird.govt.nz/income-tax/income-tax-for-individuals/types-of-individual-income" target="_blank"> www.ird.govt.nz/toii/pir/.</a> If you are unsure of your PIR, we recommend you seek professional advice or contact the Inland Revenue Department. It is your responsibility to tell us your PIR when you invest or if your PIR changes. If you do not tell us, a default rate may be applied. If the advised PIR is lower than the correct PIR, you will need to complete a personal tax return and pay any tax shortfall, interest, and penalties. If the default rate or the advised PIR is higher than the correct PIR, you will not get a refund of any overpaid tax.</p>
                      </div>
                    </div>

                  </h6>
                  <div className="inner-box">
                    <h5>$0.00</h5>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Riskindicator />
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mt-3 investment-overview">
                <Row>
                  <Col md={12} className="wrapper">
                    <h6 className="heading-margin sub-heading">July in review</h6>
                     <a href="#" className="download-btn">Download Full Update</a> 
                  </Col>
                  <Col md={12}>
                    <div className="white-background investment-overview">
                      <h6>Our portfolio returned 6.87% for the month.</h6>
                      <br />
                      <p>The main positive contributions came from the a2 Milk Company, Auckland Airport and Meridian Energy. The only real negative contributor was F&P Healthcare – giving back some of the very strong performance from March. An interesting feature of the NZ share market in April was the lack of capital raising activity, with NZ boards apparently preferring to ride out the lockdown period. In contrast, there has been over A$16 billion of fresh equity raised in the Australian market across more than 30 companies. The NZ market was lead higher by the stocks that underperformed the most in March, in a classic oversold bounce. During the month, we participated in the Auckland Airport, Kathmandu, and Lendlease share issues. We added Z Energy back into the portfolio and increased Chorus and Fletcher Building. We decreased Goodman Property Trust and trimmed a2 Milk and CSL.</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row>
                  <Col md={12}>
                    <h6 className="heading-margin sub-heading">Asset Allocation</h6>
                  </Col>
                  <Col md={12}>
                    <div className="white-background">
                       <PiechartTwo />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-3">
                <h6 className="heading-margin sub-heading">Fund Description</h6>
              </Col>
              <Col md={12}>
                <div className="white-background">
                  <p>This is a single asset class Fund, which typically invests in New Zealand and Australian listed equities. Investors should expect returns and risk commensurate with the New Zealand and Australian share markets. The Fund has an investment objective of outperforming the S&P/NZX50 Gross Index by 3% per annum, before fees, over the medium to long-term.</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mt-3">
                <h6 className="heading-margin sub-heading">Top 10 Assets</h6>
              </Col>
              <Col md={12}>
                <div className="white-background blue-details-block">
                  <Row>
                    <Col md={6}>
                      <div className="blue-strip">
                        <span>TPWNZ</span>
                        <span>3.15%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>Spark New Zealand Ltd</span>
                        <span>2.22%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>PFINZ</span>
                        <span>3.03%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>Amazon.Com Inc
</span>
                        <span>1.89%</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="blue-strip">
                        <span>CNUNZ
</span>
                        <span>2.95%</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="blue-strip">
                        <span>Microsoft Corporation
</span>
                        <span>1.89%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>University of C`bury
</span>
                        <span>2.82%</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="blue-strip">
                        <span>PayPal Holdings Inc
</span>
                        <span>1.85%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>VCTNZ
</span>
                        <span>2.33%</span>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="blue-strip">
                        <span>Comcast Corp ? Class A
</span>
                        <span>1.84%</span>
                      </div>
                    </Col>

                   
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Showmemore;