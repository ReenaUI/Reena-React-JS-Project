import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Riskindicator from './Riskindicator';
import ChartsTwo from './ChartsTwo';
import PiechartTwo from './PiechartTwo';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Portfoliochart from './Portfoliochart';
import PiechartThree from './PiechartThree';
import ColumnChart from './ColumnChart';
import Image from 'react-bootstrap/Image';
import userprofile from './Images/user-profile.jpeg';
import Make_Investment from "./Transactions/Make_Investment";
import { Link } from "react-router-dom";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="content-body porfolio-page">
        <div className="content-box">
          <p>Home /  INVESTMENT FUND</p>

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
              <div className="card make-investment-steps">
                <div className="wrapper">
                  <Link className="mint-box">Mint Australasian Equity Fund</Link>
                    <Link className="red-box">Mint Australasian Property Fund</Link>
                    <Link className="blue-box">Mint Diversified Income Fund </Link>
                    <Link className="brown-box">Mint Diversified Growth Fund </Link>
                  </div>
 
                <Link className="investment-btn" to="/Make_Investment"><span>Make Investment</span> </Link>
              </div>
            </Col>
          </Row>

            <Row>
              <Col md={12}>
                <h6 className="heading-margin pl-1 heading-below-main">Mint Australasian Equity Fund</h6>
                <div className="unitprice-wrapper mb-5">
                      <div className="list">
                        <h3>Unit Price</h3>
                        <span>	&#36;2.2479 </span>
                      </div>

                      <div className="list">
                        <h3>Unit Price</h3>
                        <span>	&#36;2.2479 </span>
                      </div>

                      <div className="list">
                        <h3>Unit Price</h3>
                        <span>	&#36;2.2479 </span>
                      </div>
                </div>
                <h5 className="sub-heading">Performance Since Inception</h5>
              </Col>
              <Col md={12}>
                <div className="white-background">
                 
                  <h5 className="pulse-main left highlight-text">278.92%
                    <div className="popover__wrapper">
                
                        <h2 className="popover__title">
                          <div className="center pulse-wrap">
                            <div className="pulse"></div>
                          </div>
                        </h2>
                      
                      <div className="popover__content popover__content-left">
                        <p>This is an annualised return since you have been invested to the latest valuation date</p>
                      </div>
                    </div>

                  </h5>
                  
                  <div className="portfolio-chart">
                     <Portfoliochart />
                  </div>

                </div>
              </Col>
            </Row>
            <Row className="investment-details-block">
              <Col md={12} className="mt-3">
                <h6 className="heading-margin sub-heading">Fund Performance</h6>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                  <h6>1 MONTH</h6>
                  <div className="inner-box">
                    <h5>5.25%</h5>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                  <h6>3 MONTHS</h6>
                  <div className="inner-box">
                    <h5>5.21%</h5>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                    <h6 className="pulse-main">1 YEAR  
                    </h6>
                  <div className="inner-box">
                    <h5>26.92%</h5>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="outer-box">
                    <h6 className="pulse-main">5 YEARS
                    </h6>
                  <div className="inner-box">
                    <h5>15.00%</h5>
                  </div>
                </div>
              </Col>

              </Row>
              <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <h6 className="heading-margin sub-heading">Fund Overview</h6>
                  </Col>
                  <Col md={12} className="mb-2">
                    <div className="white-background">
                       <p className="mb-0">This is a single asset class Fund, which typically invests in New Zealand and Australian listed equities. Investors should expect returns and risk commensurate with the New Zealand and Australian share markets. The Fund has an investment objective of outperforming the S&P/NZX50 Gross Index by 3% per annum, before fees, over the medium to long-term.</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Riskindicator />
              </Col>
            </Row>
      

            <Row className="tabspage mt-0">
            <Col md={4}>
             <h2 className="sub-heading">Target Investment Mix</h2>
              <div className="element-wrapper">
              <div className="element-box max-box pref">
     
                    <div className="chart-wrap">
                        <PiechartTwo />
                    </div>
                  </div>
              </div>
            </Col>

  
            <Col md={4}>
            <h2 className="sub-heading">Sector Allocation</h2>
            <div className="element-wrapper">
              <div className="element-box max-box pref">
       
                  <div className="chart-wrap">
                    <PiechartThree />
                    </div>

                </div>
              </div>
            </Col>

            <Col md={4}>
            <h2 className="pulse-main sub-heading media-left-popover-control">Performance
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

              </h2>
       
            <div className="element-wrapper">
              <div className="element-box max-box pref pt-0">
 
                <Tabs id="uncontrolled-tab-example" className="tabs-wrapper">
                  <Tab eventKey="home" title="1 Year ago">
                      <div className="chart-wrap column-chart-wrap">
                      
                      <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="3 Years ago">
                  <div className="chart-wrap column-chart-wrap">
                  <figure className="highcharts-figure">
                         <ColumnChart />
                      </figure>
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="5 Years ago">
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
            </Row>

            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <h6 className="heading-margin sub-heading">Previous Month in Review</h6>
                  </Col>
                  <Col md={12} className="mb-2">
                        <div className="white-background">
                          <div className="down-btn-wrap">
                              <h2 className="sub-heading-two">Our portfolio returned 6.87% for the month.</h2>
                              <a href="#" className="theme_btn">Download Full Update</a>
                          </div>
                  
                      
                            <p className="mb-0">The main positive contributions came from the a2 Milk Company, Auckland Airport and Meridian Energy. The only real negative contributor was F&P Healthcare – giving back some of the very strong performance from March. An interesting feature of the NZ share market in April was the lack of capital raising activity, with NZ boards apparently preferring to ride out the lockdown period. In contrast, there has been over A$16 billion of fresh equity raised in the Australian market across more than 30 companies. The NZ market was lead higher by the stocks that underperformed the most in March, in a classic oversold bounce. During the month, we participated in the Auckland Airport, Kathmandu, and Lendlease share issues. We added Z Energy back into the portfolio and increased Chorus and Fletcher Building. We decreased Goodman Property Trust and trimmed a2 Milk and CSL.</p>
                          </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="feature-funds-block">
              <Col md={12}>
                  <h6 className="heading-margin sub-heading">Features of the Fund</h6>
                </Col>
                <Col md={12}>
                   <div className="white-background">
                   <Row>
                      <Col md={6}>
                      <div className="media bdr-bottom fund-border-right">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>Single asset class Fund, which typically invests in New Zealand and Australian listed property securities</p>
                        </div>
                      </div>
                      </Col>

                      <Col md={6}>
                      <div className="media bdr-bottom">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>Targeting returns in excess of the S&P/NZX All Real Estate Gross Index + 1.0% per annum, before fees, over the medium to long term</p>
                        </div>
                      </div>
                      </Col>


                      <Col md={6}>
                      <div className="media bdr-bottom fund-border-right">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>Aims to provide investors with long-term capital growth</p>
                        </div>
                      </div>
                      </Col>

                      <Col md={6}>
                      <div className="media bdr-bottom">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>Suitable for investors with a minimum 5 year investment horizon</p>
                        </div>
                      </div>
                      </Col>

                      <Col md={6}>
                      <div className="media bdr-bottom fund-border-right">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>Investors should expect risk commensurate with the New Zealand and Australian property share markets</p>
                        </div>
                      </div>
                      </Col>

                      <Col md={6}>
                      <div className="media bdr-bottom">
                        <span className="align-self-center mr-3"></span>
                        <div className="media-body">
                          <p>0.86% management fee (GST inclusive, no performance fee )</p>
                        </div>
                      </div>
                      </Col>
                   </Row>
                   
                   </div>
                 
                </Col>
            </Row>


            <Row className="profile-manager-block">
              <Col md={12}>
                  <h6 className="heading-margin sub-heading">Portfolio Manager</h6>
                </Col>

                <Col md={12}>
                <div className="white-background user-image-block">
                  <Image src={userprofile} />
                  <span>Anthony Halls</span>
                </div>
                <div className="mint-bg">
                   <p>Anthony has over 30 years’ experience in the financial sector. Before joining Mint, Anthony was the manager of the Investment Analysis team at the New Zealand Superannuation Fund. During his five years at the New Zealand Superannuation Fund, Anthony was involved in the development and execution of a range of investments, and developed the strategy to manage the in-house New Zealand equities portfolio. Prior to this Anthony was Portfolio Manager (New Zealand Equities) at BT Funds Management Ltd and a member of the Investment Committee. Anthony holds an MBA from the University of Otago. At Mint, Anthony is responsible the Investment Team and investment process, manages the Australasian Equity funds, and provides research across some sectors. z</p>
                </div>
                
                </Col>
            </Row>

            <Row className="Resources-block">
              <Col md={12}>
                  <h6 className="heading-margin sub-heading">Resources</h6>
              </Col>
              
              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint Product Disclosure Statement 2019</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint Statement of Investment Policy Objectives 2020</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint Asset Management Funds Financial Statements FY20</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>UNPRI Report 2019</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint SRI Policy 2020</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

            </Row>


            <Row className="Resources-block">
              <Col md={12}>
                  <h6 className="heading-margin sub-heading">Quarterly Fund Updates</h6>
              </Col>
              
              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint Australasian Property Fund - March 2020</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Mint Australasian Property Fund  - December 2019 </h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Equity Q3 2019 - September 2019</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Equity Q2 2019 - June 2019</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Equity Q1 2019 - March 2019</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Equity Q4 2018 - December 2018</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>

              <Col md={12}>
                <div className="white-card-box">
                    <h2>Equity Q3 2018 - September 2018</h2>
                    <a href="#" className="download-ico"></a>
                </div>
              </Col>
              
            </Row>

        
          </Container>
        </div>
      </div>
    );
  }
}
export default Portfolio;