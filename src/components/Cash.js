
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import axios from "axios";
const Cash = () => {
  const [transactions, setTransactions] = useState({
    investmentTransactions:[]});

  useEffect(() => {
    loadtransactions();
  }, []);
  const loadtransactions = async () => {
    const result = await axios.get("https://ec3ll8cxti.execute-api.ap-southeast-2.amazonaws.com/prod/transactions?userId=184");
    setTransactions(result.data);
    console.log(result)
  };
  return (


    <div className="content-body">
      <div className="content-box">
        <p>Home / Cash & Transections</p>
      </div>
      <div className="content-body-section cash-transaction-wrapper">
        <Container>
          <Row className="cash-wrapper">
            <Col md={12}>
              <h4 className="heading-margin sub-heading heading-below-main">Cash & Transactions</h4>
            </Col>
            <Col md={4}>
              <div className="outer-box">
                <h6>PENDING INVESTMENT AMOUNT</h6>
                <div className="inner-box">
                  <h5>$5,935</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="outer-box">
                <h6>PENDING WITHDRAWAL AMOUNT</h6>
                <div className="inner-box">
                  <h5>$155</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="outer-box">
                <h6>LAST TRANSACTION</h6>
                <div className="inner-box">
                  <h5>$1</h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mt-3">
              <h4 className="heading-margin heading-margin sub-heading heading-below-main">Completed Transactions</h4>
            </Col>
            <Col md={12}>
              <div className="white-background">
              <div>
                <span>Show </span>
              </div>
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Effective Date</th>
                      <th>Portfolio Name</th>
                      <th>Type</th>
                      <th>Units</th>
                      <th>Price</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.investmentTransactions.map((comptransaction, index) => (
                      <tr>
                        <td>{comptransaction.EffectiveDate}</td>
                        <td>{comptransaction.PortfolioName}</td>
                        <td>{comptransaction.Type}</td>
                        <td>{comptransaction.Units}</td>
                        <td>{comptransaction.Price}</td>
                        <td>{comptransaction.Value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mt-3">
              <h4 className="heading-margin sub-heading heading-below-main">Pending Transactions</h4>
            </Col>
            <Col md={12}>
              <div className="white-background">
              <div className="table-responsive">
              <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Investment Code</th>
                      <th>Type</th>
                      <th>Portfolio Name</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.investmentTransactions.map((pendtransaction, index) => (
                      <tr>
                        <td>{pendtransaction.EffectiveDate}</td>
                        <td>{pendtransaction.InvestmentCode}</td>
                        <td>{pendtransaction.Type}</td>
                        <td>{pendtransaction.PortfolioName}</td>
                        <td>{pendtransaction.Price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );

}
export default Cash;