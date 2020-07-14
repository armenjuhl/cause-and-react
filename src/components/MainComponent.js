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
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
  // console.log('\n\n\nADD COMMENT IN MAIN' + JSON.stringify(addComment));
    console.log("\n HOME PAGE ADD COMMENT: " + this.props.addComment);
    const HomePage = () => {
      return(
          <Home
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    };

    const DishWithId = ({match}) => {
      // const addComment=this.props.addComment;
      console.log("\n\n\n\n***ATTENTION***\n\n\n ADD COMMENT MAIN COMPONENT: " + this.props.addComment);
      // console.log("\n\n\n\n***ATTENTION***\n\n\n PROPS MAIN COMPONENT" + JSON.stringify(this.props));
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                      addComment={this.props.addComment}
                      isLoading={this.props.dishes.isLoading}
                      errMess={this.props.dishes.errMess}
                      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
