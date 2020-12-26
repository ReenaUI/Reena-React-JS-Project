import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class MobileNumber extends React.Component{

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
          
                <Button onClick={() => this.handleModalShowHide()} className="edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>

                <Modal className="Custom__modal mobile-change-modal" centered show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>OTP Verification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                        <Form className="col-md-12">
                            <Form.Group controlId="MobileNumber" className="row">        
                                <Form.Label className="mb-1">Enter Mobile SMS Code</Form.Label>
                                <Form.Control type="number" className="mb-2" max="4" placeholder="Enter new one time pin"/>
                                <Form.Label className="msg-note mb-3">Check your mobile messages. If your OTP has not arrived or is invalid, then you will receive another one if you <a href="#" className="highlight-mint-color">Click here</a></Form.Label>
                                <Button type="submit" variant="secondary" className="sm-btn form-btn">
                                    Verify OTP
                                </Button>
                            </Form.Group>
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

export default MobileNumber;