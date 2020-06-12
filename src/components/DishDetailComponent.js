import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import React from "react";
import * as moment from 'moment';


function RenderDish({dish}) {
  return (
      <div className="col-xs-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
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
  console.log('\nDish detail props.dish', props.dish);
  if (props.dish != null) {
    return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish}/>
            <div className="col-xs-12 col-md-5 m-1">
              <h3>Comments</h3>
              <RenderComments comments={props.dish.comments}/>
            </div>
          </div>
        </div>
    );
  } else {
    return (<div></div>)
  }
};


export default DishDetail;
