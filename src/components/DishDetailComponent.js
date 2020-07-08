import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Breadcrumb, BreadcrumbItem, Button, Modal} from "reactstrap";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as moment from 'moment';
import CommentForm from "./CommentForm";


function RenderDish({dish}) {
  return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
  );
}

function RenderComments({comments}) {
  if (comments == null) {
    return (<div></div>)
  } else {
    return (
        comments.map((comment) => {
          const str = comment.date;
          const date = moment(str);
          const dateComponent = date.utc().format('MMM, DD, YYYY');
          return (
              <ul key={comment.id} className="list-unstyled">
                <li>
                  {comment.comment}
                </li>
                <li>
                  -- {comment.author}, {dateComponent}
                </li>
              </ul>
          );
        })
    );
  }
}

const commentStyle = {
  color: "gray"
};


class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.handleComment = this.handleComment.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false
    };

  }


  toggleModal() {
    // console.log('toggle modal called');
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleComment(event) {
    this.toggleModal();
    // console.log('toggleModal returns ' + JSON.stringify(this.state.isModalOpen));
    event.preventDefault();
  }

  render() {
    if (this.props.dish != null) {
      return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{this.props.dish.name}</h3>
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={this.props.dish}/>
              </div>
              <div className="col-12 col-md-5 m-1">
                <RenderComments comments={this.props.comments}/>
                <Button type="submit" value="submit"
                        onClick={this.handleComment}
                        className="bg-white" style={commentStyle}>
                  <span className="fa fa-pencil" style={{commentStyle}}></span>
                  Submit Comment</Button>
                {/*<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>*/}
                  <CommentForm isModalOpen={this.state.isModalOpen}/>
                {/*</Modal>*/}
              </div>
            </div>
          </div>
      );
    } else {
      return (<div></div>)
    }
  };
}


export default DishDetail;
