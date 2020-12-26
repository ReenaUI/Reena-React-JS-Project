import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class PDSCancelled extends React.Component{

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

                <Button className="payment-btn pdsNo-btn PDS-btn" onClick={() => this.handleModalShowHide()}>No</Button>
           
      

                <Modal className="Custom__modal confirmation-modal cancelled-modal" centered show={this.state.showHide}>
                    <Modal.Body>
                        <h2 className="title">Cancelled</h2>
                        <h2>To proceed with this investment you are required to agree to the Product Disclosure Statement.</h2>
                    </Modal.Body>
                    <Modal.Footer>
                   <Button className="form-btn step-5-yes yes" onClick={() => this.handleModalShowHide()}>
                        OK
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default PDSCancelled;