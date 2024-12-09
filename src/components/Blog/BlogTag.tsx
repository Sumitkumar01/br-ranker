import Link from "next/link";
import React from "react";

const BlogTag = () => {
  return (
    <div className="sidebar__widget mb-55">
      <div className="sidebar__widget-head mb-35">
        <h3 className="sidebar__widget-title">Popular Regions</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__tag">
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>India</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Singapore</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Oman</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Quatar</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Dubai</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Canada</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Japan</Link>
          <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Australia</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogTag;
