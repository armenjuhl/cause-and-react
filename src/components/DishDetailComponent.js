import React, {Component} from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label
} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import * as moment from 'moment';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform, Stagger} from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    return (
        <React.Fragment>
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <div className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating" name="rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </div>
                <div className="form-group">
                  <Label htmlFor="formName">Your Name</Label>
                  <Control.text model=".author"
                                name="author"
                                id="author"
                                className="form-control"
                                placeholder="Your Name"
                                validators={{
                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                  />
                  <Errors
                      className="text-danger"
                      model=".formName"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                      }}
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea model=".comment" name="comment" id="comment" className="form-control" row="5"
                                    validators={{required}}/>
                  <Errors
                      className="text-danger"
                      model=".comment"
                      show="touched"
                      messages={{required: 'Required'}}
                  />
                </div>
                <div className="form-group">
                  <Button type="submit" color="primary">Submit</Button>
                </div>
              </LocalForm>
            </ModalBody>
          </Modal>
        </React.Fragment>
    );
  }
}

function RenderDish({dish}) {
  if (dish !== null) {
    return (
        <FadeTransform in
                       transformProps={{
                         exitTransform: 'scale(0.5) translateY(-50%)'
                       }}>
          <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
    );
  } else
    return (
        <div></div>
    );
}

function RenderComments({comments, postComment, dishId}) {
  console.log('\n\n\nATTENTION.\nCOMMENTS: ' + JSON.stringify(comments));
  if (comments == null) {
    return (<div></div>)
  } else {
    const mappedComments = comments.map((comment) => {
          const str = comment.date;
          const date = moment(str);
          const dateComponent = date.utc().format('MMM, DD, YYYY');
          return (
              <div>
                <ul key={comment.id} className="list-unstyled">
                  <Stagger in>
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author}- {dateComponent}</p>
                    </li>
                  </Stagger>
                </ul>
              </div>
          )
        }
    );
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {mappedComments}
            </div>
            <div className="col-md-12">
              <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
          </div>
        </div>);
  }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
        <div className="container">
          <div className="row">
            <Loading/>
          </div>
        </div>
    );
  } else if (props.errMess) {
    return (
        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
    );
  } else if (props.dish != null) {
    return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments}
                              postComment={props.postComment}
                              dishId={props.dish.id}
              />
            </div>
          </div>
        </div>
    );
  } else {
    return (<div></div>)
  }
};

export default DishDetail;
