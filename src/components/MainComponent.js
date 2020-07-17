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
import { actions } from 'react-redux-form';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      console.log('\n\n***ATTENTION\nCOMMENTS : ' + JSON.stringify(this.props.comments));

      return(
          <Home
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    };

    const DishWithId = ({match}) => {
      console.log("LISTEN HERE\n\n\n" + JSON.stringify(this.props.comments));
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                      isLoading={this.props.dishes.isLoading}
                      errMess={this.props.dishes.errMess}
                      comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                      commentsErrMess={this.props.comments.errMess}
                      addComment={this.props.addComment}
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
            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Redirect to="/home"/>
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
