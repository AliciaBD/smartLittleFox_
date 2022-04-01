import React from "react";
import { Link } from "react-router-dom";

const CatalogCard = ({ lesson, image, title }) => {
  return (
    <Link to={lesson} className="lessons-catalog--card">
      <div className="card-border">
        <div className="card-bg">{image}</div>
      </div>
      <div className="card-title">{title}</div>
    </Link>
  );
};

export default CatalogCard;
