// Garima
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

class LogoutModal extends Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }

  close = () => {
     this.setState({ showModal: false });
   }

   open = () => {
     this.setState({ showModal: true });
   }

   logout = () => {
     console.log('logout!!');
     window.location.href = '/auth/logout';
   }

  render(){
    return (
      <div>
        <Button  id= "logout" bsStyle="default" bsSize="xsmall" onClick={this.open}><span className="glyphicon glyphicon-off"></span>  Logout
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title> Are you sure ? </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6"><Button onClick={this.close} bsStyle="default" id="cancel"><span className="glyphicon glyphicon-remove"></span>  Cancel</Button></div>
              <div className="col-md-6"><Button onClick={this.logout} bsStyle="danger"><span className="glyphicon glyphicon-off"></span>  Logout</Button></div>
            </div>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default LogoutModal;
