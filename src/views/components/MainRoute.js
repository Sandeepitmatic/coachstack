import React from 'react'
import {Route} from 'react-router-dom';
import MainHeader from "./Header/MainHeader";
import Footer from "./footer/Footer";
import Home from "../main/home/Home";

const MainRoute = ({component: Component}) => {
    return (
        <Route
            render={props => (
                <div className="content-container">

                    {/* Header */}
                    <MainHeader/>

                    {/* Body Content */}
                    <div>
                        <Route exact path="/" component={Home}/>
                    </div>

                    {/* Footer */}
                    <Footer/>
                </div>
            )}
        />
    )
};

export default MainRoute;
