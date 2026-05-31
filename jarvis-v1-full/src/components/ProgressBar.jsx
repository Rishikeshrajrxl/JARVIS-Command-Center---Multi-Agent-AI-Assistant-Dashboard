import React from "react";

export default function ProgressBar({ value }) {
  return (
    <div className="progress-container">

      <div
        className="progress-fill"
        style={{ width: `${value}%` }}
      ></div>

      <span>{value}%</span>

    </div>
  );
}