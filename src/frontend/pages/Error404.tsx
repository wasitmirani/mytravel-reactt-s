import React from "react";
import { Link } from "react-router-dom";

const Error404: React.FC = ()=>{
    return (
        <div>
         <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-6">
            <img src="img/general/404.svg" alt="image"/>
          </div>

          <div className="col-lg-5">
            <div className="no-page">
              <div className="no-page__title">40<span className="text-blue-1">4</span></div>

              <h2 className="text-30 fw-600">Oops! It looks like you're lost.</h2>

              <div className="pr-30 mt-5">The page you're looking for isn't available. Try to search again or use the go to.</div>

              <div className="d-inline-block mt-40 md:mt-20">
                <Link to="/" className="button -md -dark-1 bg-blue-1 text-white">Go back to homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        </div>
    );
}

export default Error404;