import React from "react";

function Footer() {
  return (
    <div>
        <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
          {/* Grid container */}
          <div className="container pt-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="bi bi-facebook-f"></i>
              </a>

              {/* Twitter */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="fab fa-twitter"></i>
              </a>

              {/* Google */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="fab fa-google"></i>
              </a>

              {/* Instagram */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="fab fa-instagram"></i>
              </a>

              {/* Linkedin */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="fab fa-linkedin"></i>
              </a>

              {/* Github */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          {/* Copyright */}
          <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>Weight Tracker - All Right Reserved 2023</div>
          {/* Copyright */}
        </footer>
      </div>
  );
}

export default Footer;
