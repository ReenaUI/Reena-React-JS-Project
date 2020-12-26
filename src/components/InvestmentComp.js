import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
class InvestmentComp extends React.Component {
    constructor() {
            super();
            this.state = {
                Funds: [
                    { Title: 'Mint Australasian Equity Fund', Peragraph: 'This is a single asset class Fund, which typically invests in New Zealand and Australian listed equities.'},
                    { Title: 'Mint Australasian Property Fund', Peragraph: 'This is a single asset class Fund, which typically invests in New Zealand and Australian listed property securities.'},
                    { Title: 'Mint Diversified Income Fund', Peragraph: 'This is a multi-asset class Fund that offers diversification by investing across a number of asset classes both in New Zealand and internationally. These include cash, fixed interest, listed property and equites. Investors have the option to have dividends distributed or reinvested.'},
                    { Title: 'Mint Diversified Growth Fund', Peragraph: 'This is a multi-asset class Fund that offers diversification by investing across a number of asset classes both in New Zealand and internationally. The Fund invests primarily in New Zealand and international equities, but will also hold cash and fixed interest securities.'}
                ]
            }
        }
    render() {
        return (
            <Accordion defaultActiveKey="" className="accordians-style">
               {
                this.state.Funds.map((FundName) =>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {FundName.Title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{FundName.Peragraph}
                            <br />
                            <div className="invest-btn">
                                <Link className="btn btn-primary btn-sm greensa-btn" to="/Support">Show Me More</Link>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                )
            }
            </Accordion>
        );
    }
}

export default InvestmentComp;