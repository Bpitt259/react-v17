import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header, { Header2 } from "./components/Header.jsx";

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText("Set the text state");
  }, []);

  const renderHeader = () => {
    return (
      <Fragment>
        <Header text={text} />
        <Header2 />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {renderHeader()}
      <p>Test P</p>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();
