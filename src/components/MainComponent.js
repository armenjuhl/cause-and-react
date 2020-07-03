import React, {Component} from 'react';
import '../App.css';
import Menu from '../components/MenuComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import DishDetail from '../components/DishDetailComponent';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const HomePage = () => {
      return (
          <Home
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    };

    const DishWithId = ({match}) => {
      return (
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id ===
              parseInt(match.params.dishId, 10))[0]}
                      comments={this.props.comments.filter((comment) => comment.dishId ===
                          parseInt(match.params.dishId, 10))}/>
      );
    };

    return (
        <div>
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            {/* If I need to pass a component props use Route format below */}
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={Contact}/>
            <Redirect to="/home"/>
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
