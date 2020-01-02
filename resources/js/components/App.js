import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import history from "./History";
import axios from "axios";
import TaskDescription from "./utils/TaskDescription/TaskDescription";
import Header from "./utils/Header/Header";
import AllPosts from "./utils/Posts/AllPosts";

require("@babel/polyfill");

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePath: "/"
        }
        
        this.history = history;
        console.log(this.history)
        this.routes = [
            {
                path: "/",
                name: "Task Description",
                Component: TaskDescription
            },
            {
                path: "/posts",
                name: "Posts",
                Component: AllPosts
            },
            
        ];
    }
    handleMenu = () => {
       if(this.history.location.pathname !== this.state.activePath) {
           this.setState({
               activePath: this.history.location.pathname
           })
       }

    }  
    render() {
        const { activePath } = this.state;
        return (
            <>
                <Router history={history}>
                    <Header activePath={activePath} routes={this.routes} handleMenu={this.handleMenu} />
                    <Switch>
                        {this.routes.map(({ path, name, Component }) => {
                            return (
                                <Route key={path} path={path} exact>
                                    <Component />
                                </Route>
                            );
                        })}
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;

