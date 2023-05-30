import { IconButton, Menu, MenuItem } from "@mui/material";
import { Share as ShareIcon } from "@mui/icons-material";
import { useState } from "react";

const ShareButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="Share"
        onClick={handleShareClick}
        color="primary"
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
      >
        <ShareIcon sx={{ fontSize: 28 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        elevation={1}
      >
        <MenuItem onClick={handleClose}>Share on Facebook</MenuItem>
        <MenuItem onClick={handleClose}>Share on Twitter</MenuItem>
        <MenuItem onClick={handleClose}>Share on LinkedIn</MenuItem>
      </Menu>
    </div>
  );
};

export default ShareButtons;
