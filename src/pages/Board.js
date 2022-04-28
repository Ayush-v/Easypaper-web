import React from "react";
import { Helmet } from "react-helmet-async";

const Board = () => {
  return (
    <div>
      <Helmet>
        <title>Board | Easypaper</title>
      </Helmet>
      <section className="my-16 px-8 py-8">
        <div>
          <h1>Board page</h1>
        </div>
      </section>
    </div>
  );
};

export default Board;
