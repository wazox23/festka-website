import React from "react";
import "../../Styles/HomePage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div className="row py-5">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide pt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://festka.com/cdn/shop/files/Glorious_HP_1400x.jpg?v=1649788710"
              className="d-block w-100 img-fluid my-bg"
              alt="festka"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="lead fs-4 text-light">Limited edition</h3>
              <h2 class="display-4 header-title-font">FESTKA & GLÖRIOUS</h2>
              <Link className="nav-link" to="/limited">
                <button type="button" class="btn btn-outline-light">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.gravelcyclist.com/wp-content/uploads/2022/12/FestkaFranzKafkaPR2022-9.jpg"
              className="d-block w-100 img-fluid my-bg"
              alt="festka"
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4 header-title-font">MODELS</h2>
              <Link className="nav-link" to="/models">
                <button type="button" class="btn btn-outline-light">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://richardcycle.com/wp-content/uploads/FESTKA-ROVER.jpg"
              className="d-block w-100 img-fluid my-bg"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4 header-title-font">FESTKA</h2>
              <Link className="nav-link" to="/store">
                <button type="button" class="btn btn-outline-light">
                  STORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-3" />
    </div>
  );
}

export default HomePage;
