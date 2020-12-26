import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Diamonds from './Images/dash.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import ChartsTwo from './ChartsTwo';
import Piechart from './Piechart';
import PiechartTwo from './PiechartTwo';
import PiechartThree from './PiechartThree';
import InvestmentChart from './InvestmentChart';
import ColumnChart from './ColumnChart';
import FundsBlock from './Assets/FundsBlock';
import { Link } from "react-router-dom";


class Dashboard extends React.Component {
  render() {
    return (
      <div className="content-body dashboard">
        <div className="content-box">
          <p>Home / Dashboard  
          </p>
            
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
              <Col md={12}>
                <p className="welcome-note pl-0">Kia ora, here’s an overview of your investment with us:</p>
                <h4 className="heading-margin sub-heading pl-0 heading-below-main">Investment Overview</h4>
              </Col>
              <Col md={12}>
                <div className="chartmy">
                  <div className="heading">
                  <h4 className="hist">Historical Performance</h4></div>
                  <Row>
                  <Col sm={6}>
                    <div className="inside-withdrawals">
                      <h5 className="pulse-main media-right-popover-control">Contributions / Withdrawals      
                        <div className="popover__wrapper">
                    
                            <h2 className="popover__title">
                              <div className="center pulse-wrap">
                                <div className="pulse"></div>
                              </div>
                            </h2>
                         
                          <div className="popover__content popover__content-center">
                          
                            <ul className="investment-points">
                                <li>
                                    <span>Contributions</span>
                                    <span className="currentBalance">$21,303.53</span>
                                </li>
                                <li>
                                    <span>Reinvested Distns</span>
                                    <span>$0.00</span>
                                </li>
                                <li>
                                    <span>Distns</span>
                                    <span>$0.00</span>
                                </li>
                                <li>
                                    <span>Withdrawals</span>
                                    <span className="withdrawal">-$16,265.74</span>
                                </li>
                                <li>
                                    <span>Fees Paid/Rebates</span>
                                    <span>-$0.00</span>
                                </li>
                                <li>
                                    <span>Tax Owed/Rebates</span>
                                    <span className="taxOwed">$161.93</span>
                                </li>
                                <li>
                                    <span>Gain/Losses</span>
                                    <span>$0.00</span>
                                </li>
                                <li>
                                    <span>Total</span>
                                    <span className="totalBalance">$5,037.79</span>
                                </li>
                                <li>
                                    <span className="note_text"><b>Note:</b> Numbers here are subject to change based on the time period selected.</span>
                                </li>
                            </ul>

                          </div>
                        </div>

                      </h5>
                      <div className="value">$14,216.99 / 0.00%</div>

                
                      </div>
                    </Col>
                    <Col sm={6} className="text-right">
                    <div className="inside-withdrawals">
               
                      <h5 className="pulse-main current-val">CURRENT VALUE / RETURN   
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

                      </h5>
                      <div className="value">$19,124.46  / 10.00%</div>
                      </div>
                    </Col>
                  </Row>
                  <div className="chartsection">
                    {/* <img src={Diamonds} /> */}
                    {/* <Charts data={[10, 20, 20, 20, 10, 50, 20]}/> */}
                    <InvestmentChart />
                  </div>

                 </div>
              </Col>
             </Row>
          </Container>

        <div className="tabspage">
          <Container>
            <Row>
            <Col md={4}>
              <div className="element-wrapper">
              <div className="element-box max-box pref">
                <div className="heading-wrap">
                <h4 className="investment">Investment Breakdown</h4>
                </div>
                    <div className="chart-wrap">
                        <PiechartTwo />
                    </div>
                  </div>
              </div>
            </Col>

            <Col md={4}>
            <div className="element-wrapper">
              <div className="element-box max-box pref">
              <div className="heading-wrap">
     
                <h4 className="pulse-main investment performance-dash">Performance
                        <div className="popover__wrapper">
                    
                            <h2 className="popover__title">
                              <div className="center pulse-wrap">
                                <div className="pulse"></div>
                              </div>
                            </h2>
                         
                          <div className="popover__content popover__content-center">
                            <p>Performance details are annualised returns and will be shown once you have been invested for over 12 months.</p>
                          </div>
                        </div>

                      </h4>
                </div>
                <Tabs id="uncontrolled-tab-example" className="tabs-wrapper">
                  <Tab eventKey="home" title="Last Year">
                      <div className="chart-wrap column-chart-wrap">
                      
                      <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="2 Years">
                  <div className="chart-wrap column-chart-wrap">
                  <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="3 Years">
                  <div className="chart-wrap column-chart-wrap">
                  <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                    </div>
                  </Tab>
                  <Tab eventKey="average" title="Average Return">
                  <div className="chart-wrap column-chart-wrap">
                  <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                  </div>
                </Tab>
                </Tabs>

               
                </div>
              </div>
            
            </Col>

            <Col md={4}>
            <div className="element-wrapper">
              <div className="element-box max-box pref">
              <div className="heading-wrap">
                <h4 className="investment">Asset Allocation</h4>
                  </div>
                  <div className="chart-wrap">
                    <PiechartThree />
                    </div>

                </div>
              </div>
            </Col>

            </Row>
          </Container>

          </div>

          <FundsBlock />
        </div>
      </div>
    );
  }
}

export default Dashboard;