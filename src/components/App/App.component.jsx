import React from "react";
import { Review } from "../Review/Review.component";

export const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our review</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};
