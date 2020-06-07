import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";
import React, {Component} from "react";
import * as moment from 'moment';


export class DishDetailComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const myStyle = {
      fontSize: "14px"
    };

    const comments = this.props.dish.comments.map((comments) => {
      console.log('date is ' + comments.date);
      const str = comments.date;
      const date = moment(str);
      const dateComponent = date.utc().format('MMM, DD, YYYY');
      console.log('final date is ' + dateComponent);
      return (

          <div key={comments.comment.id}>
            <p style={myStyle}>{comments.comment}</p>
            <p style={myStyle}>-- {comments.author}, {dateComponent}</p>
          </div>
      );
    });

    return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>

          <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            {comments}
          </div>
        </div>
    )
  }
}

