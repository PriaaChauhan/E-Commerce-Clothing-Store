import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae
          incidunt ipsa aspernatur soluta, aperiam sit assumenda tempora. Quasi
          ipsa nemo, omnis ad, modi odit eaque quam, sint quaerat voluptas
          obcaecati debitis autem architecto ratione voluptatibus? Error iure
          quam ipsum. Odit facere molestias expedita soluta impedit libero
          quibusdam eius distinctio.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis at corrupti molestias qui, optio quaerat exercitationem totam incidunt, neque, necessitatibus dignissimos. Deleniti, dolorum eveniet. Corrupti consectetur ullam dignissimos ducimus.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
