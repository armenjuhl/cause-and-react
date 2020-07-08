import React, {Component} from 'react';
import { Button, Label, Col, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: props.isModalOpen
    }
  }

  handleSubmit(event) {
    alert(JSON.stringify(event));
  };

  toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
      console.log('set state to ' + JSON.stringify(this.state));
  }

  render() {
    console.log('\n\nCOMMENT FORM STATE: ' + JSON.stringify(this.state));
    console.log('\n\nCOMMENT FORM PROPS: ' + JSON.stringify(this.props));
    return (
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={12}>Rating</Label>
                  <Col md={12}>
                    <Control.select model=".rating" name="rating" className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="name" md={12}>Your Name</Label>
                  <Col md={12}>
                      <Control.text className="form-control" model=".formName" id="formName"
                                    name="formName"
                                    placeholder="Your Name"
                                    validators={{
                                      minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                      />
                    <Errors
                        className="text-danger"
                        model=".formName"
                        show="touched"
                        messages={{
                          minLength: 'Must be greater than 2 characters',
                          maxLength: 'Must be 15 characters or less'
                        }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={12}>Comment</Label>
                  <Col md={12}>
                    <Control.textarea model=".comment" className="form-control"
                                      id="comment" name="comment" rows="6"/>
                  </Col>
                </Row>
                <Button type="submit" value="submit" color="primary" className="mt-2">Submit</Button>
              </LocalForm>
            </ModalBody>
          </Modal>
    );
  }
}

export default CommentForm;
