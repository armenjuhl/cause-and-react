import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import React, {Component} from "react";
import * as moment from 'moment';


export class DishDetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: this.props.dish
    };
  }

  renderDish(dish) {
    return (
        <div className="row">
          <div className="col-xs-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-xs-12 col-md-5 m-1">
            <h3>Comments</h3>
            {this.renderComments(dish.comments)}
          </div>
        </div>
    );
  }

  renderComments(comments) {

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

  render() {
    if (this.props.dish == null) {
      return (<div></div>)
    } else {
      return (
          this.renderDish(this.props.dish)
      );
    }
  }
}

