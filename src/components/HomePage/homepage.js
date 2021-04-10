import React from 'react';
import Navbar from '../NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../../pages/About';
import Albums from '../../pages/Albums';
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import TopBar from '../TopBar';
import './homepage_styles.css';
const HomePage = ({handleLogout,user}) => {
    // console.log({user});

    return(

        <>
        <Router>
            
            <Navbar user={user} handleLogout={handleLogout}/>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/albums' component={Albums} />
            <Route path='/profile' component={Profile} />
            </Switch>
        </Router>
        </>

        
    )
}

export default HomePage;






