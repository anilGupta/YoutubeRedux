import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from '../component/Index';
import { Home, About} from './Index';

class App extends Component{
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