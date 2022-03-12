import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ProductItem from "./components/ProductItem";

function CustomRouter() {
  return (

    <Router>
      <Routes>
      <Route exact path='/' element={<div><Header/> <Product /></div>} />
      <Route exact path='/checkout' element={<div><Header/> <Checkout /></div>} />
        <Route exact path='/Home' element={<div>Home page</div>} />
        <Route exact path='/About' element={<div>Navbar</div> } />
        <Route exact path='/Product' element={<div><Header/><Product /></div> } />
        <Route exact path='/ProductItem/:id' element={<div><Header/><ProductItem /></div> } />
        <Route  path='/pageNoteFound' element={<div> <Header/> <PageNotFound/></div>} />
        <Route  path='*' element={<div> <Header/><PageNotFound/></div>} />

      </Routes>
    </Router>
  );
}

export default CustomRouter;
