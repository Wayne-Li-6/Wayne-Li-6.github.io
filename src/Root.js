import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './style/App.css';

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter basename='/'>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
             </HashRouter>
    );
  }
}

export default Root;
