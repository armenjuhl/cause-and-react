import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import * as moment from 'moment';


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
  console.log('\nRenderComments', comments);
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

const DishDetail = (props) => {
  console.log('\nDish detail props.dish', props.dish, props);
  if (props.dish != null) {
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
              <RenderComments comments={props.comments}/>
            </div>
          </div>
        </div>
    );
  } else {
    return (<div></div>)
  }
};


export default DishDetail;
