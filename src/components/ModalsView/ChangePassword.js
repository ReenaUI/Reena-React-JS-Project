import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class ChangePassword extends React.Component{

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
                <Button variant="primary" className="change-ps-btn" onClick={() => this.handleModalShowHide()}>
                    Change Password
                </Button>

                <Modal className="Custom__modal" centered show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="col-md-12">
                        <Form.Group controlId="existing-ps" className="row">
                            <Form.Label className="col-sm-6">Enter Existing Password</Form.Label>
                            <Form.Control className="col-sm-6" type="password" />
                        </Form.Group>

                        <Form.Group controlId="new-ps" className="row">
                            <Form.Label className="col-sm-6">Enter New Password</Form.Label>
                            <Form.Control className="col-sm-6" type="password" />
                        </Form.Group>

                        <Form.Group controlId="re-enter-ps" className="row">
                            <Form.Label className="col-sm-6">Re-enter New Password</Form.Label>
                            <Form.Control className="col-sm-6" type="password"/>
                        </Form.Group>

                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="form-btn" onClick={() => this.handleModalShowHide()}>
                        Submit
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

export default ChangePassword;