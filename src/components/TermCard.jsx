import React from "react";

const TermCard = ({ term, description }) => {
  return (
    <div className="term-card">
      <div className="term-title">{term}</div>
      <div className="term-desc">{description}</div>
    </div>
  );
};

export default TermCard;
