import React from "react";
import "./Home.css";

import Button from '../components/Button';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h1 className="heroTitle">Home Page</h1>
          <Button />
        </div>
        <section className="infoSection">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto aspernatur
            nemo unde? Error saepe voluptates perferendis culpa ipsa reiciendis officiis accusamus
            beatae enim ratione?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores minus?
            Minus corporis cumque voluptas eligendi ex animi laudantium, at sapiente totam inventore
            iure excepturi nam vel placeat similique in natus doloribus, sit beatae nemo incidunt.
            Facilis tempora voluptatum quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur eveniet
            magnam necessitatibus ducimus tempora pariatur fugiat minus dolorum iusto soluta dolor
            architecto tenetur qui molestias inventore ipsum, laboriosam eaque!
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
