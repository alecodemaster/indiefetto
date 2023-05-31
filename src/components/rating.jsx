import { useState } from "react";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function RatingControlledExample() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div>
      <Rating
        name="rating-control"
        value={ratingValue}
        max={5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        icon={<StarIcon fontSize="inherit" />}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
      />
    </div>
  );
}

export default RatingControlledExample;
