import React from "react";
import {FaGithub} from "react-icons/fa"  
import './footer.css'

function Footer() {
  return (
    <div>
        <footer>
          {/* GitHub */}
            <div className="gitHubLinks">
              <a
                className="btn btn-floating btn-lg m-1"
                href="https://github.com/Bh00fie"
                role="button">
                <FaGithub/>
                Abhinandan Thour
              </a>

              <a
                className="btn btn-floating btn-lg m-1"
                href="https://github.com/DrGoshD"
                role="button">
                <FaGithub/>
                Dragos Purcaru
              </a>

              <a
                className="btn btn-floating btn-lg m-1"
                href="https://github.com/rzepa000"
                role="button">
                <FaGithub/>
                Jakub Rzepinski
              </a>

              <a
                className="btn btn-floating btn-lg m-1"
                href="https://github.com/Allen-EC"
                role="button">
                <FaGithub/>
                Allen Cummins
              </a>
            </div>
              
          {/* Copyright */}
          <div className="copyright text-light">Weight Tracker - All Right Reserved 2023</div>
        </footer>
      </div>
  );
}

export default Footer;
