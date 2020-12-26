import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class UpdateAddress extends React.Component{

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
                    <Modal.Title>New address details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="col-md-12">
                        <Form.Group className="row" controlId="upadte-country">
                            <Form.Label className="col-sm-6">Country of residence</Form.Label>
                            <Form.Control className="col-sm-6" as="select">
                            <option>New Zealand</option>
                            <option>Albania</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="existing-ps" className="row">
                            <Form.Label className="col-sm-6">New address</Form.Label>
                            <Form.Control className="col-sm-6" type="text" placeholder="Enter new address" />
                        </Form.Group>

                        <div className="file-upload-label mt-4">
                            <Form.File id="formcheck-api-regular">
                            <Form.File.Label></Form.File.Label>
                            <Form.File.Input />
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

export default UpdateAddress;