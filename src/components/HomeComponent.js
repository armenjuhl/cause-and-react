import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {
  if (isLoading) {
    return (
        <Loading />
    );
  } else if (errMess) {
    return (
        <h4>{errMess}</h4>
    );
  } else {
    console.log('ITEM: ' + JSON.stringify(item));
    return (
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
    );
  }
}

function Home(props) {
  if (props.dish !== null) {
    console.log('\n\nDISH: ' + JSON.stringify((props.dish)));
    return (
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md m-1">
              <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishErrMess} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard item={props.leader}/>
            </div>
          </div>
        </div>
    );
  } else {
    return (<div></div>
    );
  }
}

export default Home;
