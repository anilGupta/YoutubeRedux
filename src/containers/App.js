import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initializeClient } from '../actions/authActions'
import { Header, Footer } from '../component/Index';
import { Home, About} from './Index';

@connect(
  state =>{ return {auth: state.auth}},
  dispatch => ( bindActionCreators({
    initializeClient
  },dispatch)))
class App extends Component{

    componentWillMount(){
       this.props.initializeClient();
    }

    render() {
        return (
          <div className="page" id="top">
              <Header/>
               <div className="container">
                 <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/about" component={About} />
                 </Switch>
               </div>
               {/*<Footer/>*/}
          </div>
        );
    }
}

export default App;