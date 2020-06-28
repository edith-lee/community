import React, {Component} from 'react';
import 'es6-shim'
import './assets/css/public.css'
import {Switch,HashRouter as Router,Route} from 'react-router-dom'
import Login from './view/login/login'
import NavHeader from './component/nav/nav'
import Overview from './view/overview/overview'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/overview" component={Overview}/>
                        <Route path="/main" component={NavHeader}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
