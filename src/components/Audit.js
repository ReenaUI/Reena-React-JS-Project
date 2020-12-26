import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class Audit extends React.Component {
  constructor() {
    super();
    this.state = {
      auditHistory: null,

    }
  }
  componentDidMount() {
    fetch('https://ec3ll8cxti.execute-api.ap-southeast-2.amazonaws.com/prod//beneficiary-details/audit-history?benId=32721').then((resp) => {
      resp.json().then((result) => {
        this.setState({ auditHistory: result.auditHistory })

        console.log(result);
      })
    })

  }

  render() {

    return (
      <div className="content-body">
        <div className="content-box">
          <p>Home / Audit</p>
        </div>
        <div className="content-body-section">
          
          <Container>
             <Row>
              <Col md={12}>
                <div>
                  <h4 className="heading-margin">Data API</h4>
                  <div className="white-background">
                
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                        <th>Date</th>
                          <th>ID</th>
                          <th>User ID</th>
                          <th>Table ID</th>
                          <th>Table Name</th>
                          <th>Name</th>
                          <th>Old Data</th>
                          <th>New Data</th>
                          <th>User Name</th>
                          <th>Created By</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        this.state.auditHistory ?
                          this.state.auditHistory.map((item, i) =>
                           
                              <tr>
                                <td>{item.createdTs}</td>
                                <td>{item.id} </td>
                                <td>{item.userId}</td>
                                <td>{item.tableId}</td>
                                <td>{item.tableName}</td>
                                <td>{item.Name} </td>
                                <td>{item.oldData}</td>
                                <td>{item.newData}</td>
                                <td>{item.username}</td>
                                <td>{item.createdBy}</td>
                                <td>{item.description}</td>
                              </tr>
                            
                          )
                          :
                          null
                      }
                      </tbody>
                      {
                        this.state.bankAccountDetails ?
                          this.state.bankAccountDetails.map((item, i) =>
                            <tr>


                              <td>sfdsfdfs{item.Account}</td>
                            </tr>

                          )
                          :
                          null
                      }
                    </Table>

                  </div>


                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )

  }
}

export default Audit;
