import React from "react";
import "../../Styles/Limited.css";
import Footer from "../Footer";

function Limited() {
  return (
    <div className="container ">
      <div className="row pt-5">
        <h2 className="text-center fw-bold display-4 pt-5">LIMITED EDITIONS</h2>
        <p className="lead text-center">
          Limited editions are exceptional design schemes made available for a
          limited period of time or in a predetermined number of pieces.
          Typically they are projects set into motion by a special occasion such
          as an event or a collab with an artist or graphic designer. They
          present a great opportunity to acquire a Festka with an exceptional
          design scheme reproduced only a handful of times.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 g-3 pt-5 d-flex flex-column justify-content-start align-items-start bg-img">
              <h3 className="lead fs-4 text-light">LIMITED TO 9 PIECES</h3>
              <h2 className="display-4 header-title-font ">
                FESTKA & GLÖRIOUS
              </h2>
              <button type="button" class="btn btn-outline-light">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-12 g-3  d-flex  pt-5 flex-column justify-content-start align-items-end bg-img-1">
          <h3 className="fs-4 title-font-1 ">
            SUBJECT TO THE ARTISTS'AVAILABILITY
          </h3>
          <h2 className="display-4 title-font text-pink">
            FESTKA BY ONDRASH & KASPAREK
          </h2>
          <button type="button" class="btn btn-outline-dark">
            LEARN MORE
          </button>
        </div>
        <div className="col-lg-12 g-3 d-flex  pt-5 flex-column justify-content-start align-items-start bg-img-2">
          <h3 className="lead fs-4 text-light">LIMITED TO 6 PIECES</h3>
          <h2 className="display-4 header-title-font ">
            FESTKA SPECTRE ROULEUR
          </h2>
          <button type="button" class="btn btn-outline-light">
            LEARN MORE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Limited;
