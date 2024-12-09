"use client"
import React, { useState } from "react";

const CourseSidebarLan = () => {
  const [showAll, setShowAll] = useState(false);

  const country = [
    "United States",
    "India",
    "Switzerland",
    "Singapore",
    "Russia",
    "United Kingdom",
  ]


  const visibleCountries = showAll ? country : country.slice(0, 2);
  return (
    <div className="course__sidebar-widget grey-bg">
      <div className="course__sidebar-info">
        <h3 className="course__sidebar-title">Contries</h3>

        <ul>
          {visibleCountries.map((country, index) => (
            <li key={index}>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input className="m-check-input" type="checkbox" id={`m-country-${index}`} />
                <label className="m-check-label" htmlFor={`m-country-${index}`}>
                  {country}
                </label>
              </div>
            </li>
          ))}
          <li >

            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <label className="m-check-label" onClick={() => setShowAll(!showAll)} style={{ cursor: 'pointer' }}>
                {showAll ? 'Show less' : 'Show more'}
              </label>
            </div>
          </li>
        </ul>


      </div>
    </div>
  );
};

export default CourseSidebarLan;
