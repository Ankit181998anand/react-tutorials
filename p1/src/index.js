import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

const Booklist = () => {
  return (
    <section className="BookList">
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg"
        alt="img"
      />
      <h1>Rich Dad Poor Dad</h1>
      <h4>Robert T. Kiyosaki</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
