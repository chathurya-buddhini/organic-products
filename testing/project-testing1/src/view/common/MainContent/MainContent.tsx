import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Product from "../../pages/Product/Product";
export class MainContent extends Component {
    render() {
        return (
            <div className="md:px-12
                 max-2x1  mx-auto">
                {/*<h1 className="text-tertiary*/}
                {/*              text-center">*/}
                {/*    This is Main Content*/}
                {/*</h1>*/}
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/Product" Component={Product}></Route>
                </Routes>
            </div>
        );
    }
}