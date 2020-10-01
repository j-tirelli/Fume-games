import React from "react";
import RecentReview from "./RecentReview.jsx";

var RecentReviews = (props) => {
  return (
    <div className="recent">
      <p>Recent Reviews</p>
      <RecentReview />
    </div>
  );
}
export default RecentReviews;