"use client"
import React, { useState } from 'react'

const SidebarBoard = () => {
    const [showAll, setShowAll] = useState(false);
    const boards = [
        "CBSCE",
        "ICSE",
        "IB",
        "IGCSE",
        "GCSE",
    ];
    const visibleBoards = showAll ? boards : boards.slice(0, 2);

    return (
        <div className="course__sidebar-widget grey-bg">
            <div className="course__sidebar-info">
                <h3 className="course__sidebar-title">Countries</h3>

                <ul>
                    {visibleBoards.map((board, index) => (
                        <li key={index}>
                            <div className="course__sidebar-check mb-10 d-flex align-items-center">
                                <input className="m-check-input" type="checkbox" id={`m-board-${index}`} />
                                <label className="m-check-label" htmlFor={`m-board-${index}`}>
                                    {board}
                                </label>
                            </div>
                        </li>
                    ))}
                    <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <label className="m-check-label" onClick={() => setShowAll(!showAll)} style={{ cursor: 'pointer' }}>
                                {showAll ? 'Show less' : 'Show more'}
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarBoard