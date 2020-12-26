import React from 'react'
import { Button,Modal,Form } from 'react-bootstrap'

class AddFundConfirmation extends React.Component{

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
            
                <Button className="invst-btn" onClick={() => this.handleModalShowHide()}>Confirm Investment</Button>
           
                <Modal className="Custom__modal confirmation-modal" centered show={this.state.showHide}>
                    <Modal.Body>
                        <h2>Are you sure you wish to invest $6,666.00 through a Direct Debit?</h2>
                    </Modal.Body>
                    <Modal.Footer>
                   <Button className="form-btn step-5-yes yes" onClick={() => this.handleModalShowHide()}>
                        Yes
                    </Button>
                    <Button className="form-btn no" onClick={() => this.handleModalShowHide()}>
                        No
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default AddFundConfirmation;