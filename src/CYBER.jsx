import React from "react";

import Bottom from "./Bottom";
import Card from "./Card";

const CYBER = ({ course }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <img
              style={{ width: "100%" }}
              className="responsive-image"
              height={300}
              src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
              alt=""
            />
          </div>
          <Bottom />
          {course.map((item, index) => {
            if (item.id === "Cyber security")
              return <Card key={index} item={item} />;
            return null;  
          })}
        </div>
      </div>
    </>
  );
};

export default CYBER;
