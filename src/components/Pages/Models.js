import React from "react";
import "../../Styles/Models.css";
import Footer from "../Footer";

function Models() {
  return (
    <div className="container vh-100 pt-5">
      <div className="row pt-5">
        <div className="col-12 d-flex">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active bg-secondary"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className="bg-secondary"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <h2 className="text-center text-uppercase my-5">road</h2>
                <div className="card-deck d-flex flex-column flex-md-row">
                  <div className="card">
                    <img
                      src="https://festka.com/cdn/shop/files/ONE_754da8db-a8a4-408f-aa47-56f1c063140d_1024x.png?v=1670412239"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title">ONE</h3>
                      <p className="card-text">
                        The high end starts here; <br /> ONE is a versatile
                        all-rounder that delivers on many levels.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="https://festka.com/cdn/shop/files/SPE_1024x.png?v=1670412310"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title">SPECTRE</h3>
                      <p className="card-text">
                        Brand-new, bold and restless; <br /> SPECTRE blends
                        diverse qualities into a perfect whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h2 className="text-center text-uppercase my-5">gravel</h2>
                <div className="card-deck d-flex">
                  <div className="card text-center">
                    <img
                      src="https://festka.com/cdn/shop/files/ROV_9e6449ea-5399-4600-9e4c-02893a253b81_1024x.png?v=1670412447"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title">ROVER</h3>
                      <p className="card-text">
                        Blurring the boundaries between road and gravel bikes;
                        <br />
                        ROVER can be your all-purpose only bike.
                      </p>
                    </div>
                  </div>
                  <div className="card text-center">
                    <img
                      src="https://festka.com/cdn/shop/files/SCO_e42fdd30-f76c-475a-8cd6-40d4d20430e1_1024x.png?v=1670413487"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title">SCOUT</h3>
                      <p className="card-text">
                        A no compromise gravel bike; <br />
                        SCOUT will take you farther and deeper into new
                        territories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Models;
