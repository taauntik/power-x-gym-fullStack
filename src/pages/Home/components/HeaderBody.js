import React from "react";
import "./HeaderBody.css";
import BgImage from "../../../Image & Icon/home_header_bg.jpg";

function HeaderBody() {
  return (
    <div className="headerBody" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="headerBody__info-container row">
        <div className="col-md-5 headerBody__info">
          <h1>
            THE BEST FITNESS <br /> STUDIO IN TOWN
          </h1>
          <p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis blanditiis accusantium explicabo quod nihil et dicta
              similique consequatur praesentium ad. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deserunt ea earum voluptatem veniam
              laboriosam itaque at molestias vitae, iste architecto?
            </small>
          </p>
          <button className="my-btn">JOIN US</button>
        </div>
        <div className="col-md-5"></div>
      </div>
      <div id="overlay"></div>
    </div>
  );
}

export default HeaderBody;
