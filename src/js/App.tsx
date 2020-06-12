import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/app.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </header>
        </div>
    )
}

export default App;
