import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import $ from "jquery";
class FaqTabs extends React.Component {
  componentDidMount() {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })
}
  render() {
    return (
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col md={4} className="tab-area">
      
                      <h2>FAQ's</h2>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <a href="#Investment">My Investment</a>
                        </Nav.Item>
                        <Nav.Item>
                        <a href="#Account">My Account</a>
                        </Nav.Item>
                        <Nav.Item>
                        <a href="#Regulation">Regulation</a>
                        </Nav.Item>
                        <Nav.Item>
                        <a href="#General">General</a>
                        </Nav.Item>
                      </Nav>
                  </Col>
                  <Col md={8}>
                   <div className="content-area">
                      <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div id="Investment" className="content-card">
                              <h2>How do I check the valuation of my investment?12</h2>
                              <p>Valuations are updated on a daily basis, with the previous day’s valuation being the latest showing. You can find valuations at the Investment Overview area of the User Dashboard. chck</p>
                              <h2>How do I top up my investment?</h2>
                              <p>Additional investments can be made within each fund page in the User Dashboard area using the Add Funds button. </p>
                              <h2>How do I redeem all or part of my investment?</h2>
                              <p>Redemptions can be made within each fund page in the User Dashboard area using the Sell Funds button. Please refer to the terms and conditiocsns before completing a redemption. </p>
                              <h2>Can I switch between Mint funds?</h2>
                              <p>Yes, you can switch your investments between Mint funds at no cost. Please refer to the Investment Options area where you can add to different funds at your discretion.</p>
                              <h2>Will I receive dividends or distributions?</h2>
                              <p>The Mint Diversified Income Fund intends paying a quarterly distribution to investors. If investors in this fund do not wish to receive distributions, they can have these reinvested. All other Mint Funds do not intend to pay distributions. If you are invested in these funds and wish to receive an income stream from your investment, please contact us</p>
                              <h2>How are fees paid?</h2>
                              <p>The funds are subject to the costs associated with running them which include an annual management, administration, custody, trustee and audit fees. These are deducted directly from the fund and the unit price posted on the platform at each month end incorporates these.</p>
                            </div>

                            <div id="Account" className="content-card">
                            <h2>How do I enable 2FA?</h2>
                            <p>2FA can be enabled at the Profile Details area of the platform.</p>
                            <h2>How do I change my personal details? </h2>
                            <p>Personal details including email address, postal address and phone number can be changed in the Profile Details area. </p>
                            <h2>How do I change my bank details for additions, withdrawals and income payments?</h2>
                            <p>Bank details can be updated in the Profile Details area. Bank account verification is required with every new or additional bank account.</p>
                            <h2>How do I enable 2FA?</h2>
                            <p>2FA can be enabled at the Profile Details area of the platform.</p>
                            </div>

                            <div id="Regulation" className="content-card">
                             <h2>What is the PIE regime?4</h2>
                             <p>The Portfolio Investment Entity (PIE) regime is a regime for the taxation of PIE managed funds. The PIE's income is attributed to its investors, based on their shares of the PIE, and is taxed at each investor's Prescribed Investor Rate (PIR). The PIE regime creates tax advantages for some investors, mainly because the maximum PIR is 28%. The regime therefore provides tax benefits to investors who are on a 30% or 33% marginal tax rate and invest in a PIE.</p>
                             <h2>What is a Prescribed Investor Rate (PIR)?</h2>
                             <p>A PIR is the tax rate used to calculate tax on taxable income. Each investor, whether an individual, company, trustee, registered charity or superannuation fund, has a PIR which you must supply at the time of investment. In order to work out which rate applies to you please contact the IRD   <ListGroup.Item><a href="#" class="color-mint" target="_blank">www.ird.govt.nz</a></ListGroup.Item>PIR rates can be changed in the Profile Details area of the platform.</p>
                             <h2>How do I get a tax certificate?</h2>
                             <p>A tax statement will be sent to all investors following the financial year end at 31 March. If you are due a rebate, we will liaise with the IRD on your behalf and will purchase additional units in the fund with the proceeds. If you owe money to the IRD we will deduct units from your holding to pay the IRD.</p>
                             <h2>How do I make a complaint?</h2>
                             <p>Any complaint should be directed in writing to Mint Asset Management Limited, PO Box 91649 Auckland Mail Centre, and attention: Compliance Manager. You may also contact the Trustee in writing at Public Trust, PO Box 1598 Shortland Street, Auckland 1140, and attention: Manager Client Services. Mint is a member of a dispute resolution scheme with the Insurance and Savings Ombudsmen (ISO). The ISO may be contacted at PO Box 10-845, Wellington 6143 or phone 0800 888 202.</p>
                            </div>

                            <div id="General" className="content-card">
                            <h2>How do I get product information such as PDS, SIPO, Fact Sheets and Fund Updates?</h2>
                            <p>You may obtain information including a PDS, Statement of Investment Policy and Objectives (SIPO) and product information from either your financial adviser, downloading the offer documents from our website, or by emailing 
                            <ListGroup.Item> <a href="mailto:info@mintasset.co.nz" target="_blank" className="color-mint">info@mintasset.co.nz</a></ListGroup.Item> and we will forward documents to you. This information can also be found at.
                            <ListGroup.Item> <a href="#" class="color-mint" target="_blank">www.business.govt.nz/disclose</a></ListGroup.Item></p>
                            <h2>How do I contact Mint?</h2>
                            <p>We're always happy to help with any and all queries you may have. Give us a call on <ListGroup.Item><a href="tel:0800 646 833" className="color-mint" target="_blank">0800 646 833</a></ListGroup.Item> or email  <ListGroup.Item><a href="mailto:info@mintasset.co.nz" target="_blank" className="color-mint">info@mintasset.co.nz</a></ListGroup.Item>
                            .</p>
                            </div>
                          </Tab.Pane>

                        </Tab.Content>
                      </div>
                  
                  </Col>
                </Row>
              </Tab.Container>
       
  
    );
  }
}
ReactDOM.render(<FaqTabs />, document.getElementById('root'));
export default FaqTabs;
