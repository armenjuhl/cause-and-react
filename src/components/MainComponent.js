import React, {Component} from 'react';
import '../App.css';
import Menu from '../components/MenuComponent';
import {DISHES} from '../shared/dishes';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import DishDetail from '../components/DishDetailComponent';
import Contact from '../components/ContactComponent';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Redirect, Route, Switch} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {

    const HomePage = () => {
      return (
          <Home
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    };

    const DishWithId = ({match}) => {
      return (
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id ===
              parseInt(match.params.dishId, 10))[0]}
                      comments={this.state.comments.filter((comment) => comment.dishId ===
                          parseInt(match.params.dishId, 10))}/>
      );
    };

    return (
        <div>
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            {/* If I need to pass a component props use Route format below */}
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={Contact}/>
            <Redirect to="/home"/>
          </Switch>
          <Footer/>
        </div>
    );
  }
}


export default Main;
