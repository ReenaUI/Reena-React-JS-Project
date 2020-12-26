import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class PirUpdate extends React.Component{

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

                <Modal className="Custom__modal" centered show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>New PIR Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="col-md-12">
                        <Form.Group className="row" controlId="pir">
                            <Form.Label className="col-sm-6">PIR Rate</Form.Label>
                            <Form.Control className="col-sm-6" as="select">
                            <option>28%</option>
                            <option>17.5%</option>
                            <option>10.5</option>
                            </Form.Control>
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

export default PirUpdate;