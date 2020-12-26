import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class UpdateBankDetail extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <div className="text-right updateAddress-btn">
                  <Button className="edit-btn" onClick={() => this.handleModalShowHide()}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                </div>
      

                <Modal className="Custom__modal" centered show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Bank Account Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="col-md-12">
                        <Form.Group className="row" controlId="upadte-country">
                            <Form.Label className="col-sm-6">Bank name</Form.Label>
                            <Form.Control className="col-sm-6" as="select">
                            <option>SBI</option>
                            <option>ASB</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="existing-ps" className="row">
                            <Form.Label className="col-sm-6">Account name</Form.Label>
                            <Form.Control className="col-sm-6" type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="existing-ps" className="row">
                            <Form.Label className="col-sm-6">Account number</Form.Label>
                            <Form.Control className="col-sm-6" type="text" placeholder="XX-XXXX-XXXXXX-XXX" />
                        </Form.Group>

                        <div className="file-upload-label mt-4">
                            <Form.File id="formcheck-api-regular" className="pulse-main">
                            <Form.File.Label></Form.File.Label>
                            <Form.File.Input />
                         
                                <div className="popover__wrapper">
                            
                                    <h2 className="popover__title">
                                    <div className="center pulse-wrap">
                                        <div className="pulse"></div>
                                    </div>
                                    </h2>
                                
                                <div className="popover__content popover__content-right">
                                    <p>To confirm your account details, attach one of the following (must show account number and name and be less than 3 months old): Copy of bank or credit card statement, copy of electronic statement, screenshot from online banking.</p>
                                </div>
                            </div>

                         
                            </Form.File>
                          
                        </div>

                     </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button type="submit" className="form-btn">
                        Submit
                    </Button>
                    <Button className="form-btn" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default UpdateBankDetail;