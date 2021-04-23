import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AboutUs from './pages/Aboutus';
import OurJourney from './pages/OurJourney';
import Home from './pages/Home';
import Footer from './components/Homepage/FooterPage';

class App extends React.Component {

    
// renders page, and fetches data from Posts.js
    render() {
        // document.title = 'Tank Mania'
        return (
            <div className="App">
                   
                   <Router>
                       <Navigation/>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        
                        <Route path="/" exact component = {Home}>
                                <Home/>
                        </Route>

                        <Route path="/Home" component = {Home}>
                             <Home/>
                        </Route>

                        <Route path="/DevBlog" component = {OurJourney}>
                             <OurJourney />
                        </Route>

                        <Route path="/Aboutus" component = {AboutUs}>
                            <AboutUs/>
                        </Route>

                        

                         {/* <Route path="/Timeline" component = {MyTimeline}>
                            <MyTimeline/>
                        </Route> */}
                       
                    </Switch>
                    </Router>
                    <Footer/>
            </div>
        );
    }
    

}

export default App;
