import React, { Fragment } from "react";
import reactDom from "react-dom";
// components

import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Content from "./components/main_content/content";
import Item from "./components/contentList/items";

const App = () => {
  return (
    
    <Fragment>
      {" "}
      <Header />
      <Content />
        <Item/>
        <Item/>
        <Item/>
      <Footer />
    </Fragment>
  );
};

reactDom.render(<App />, document.getElementById("root"));
