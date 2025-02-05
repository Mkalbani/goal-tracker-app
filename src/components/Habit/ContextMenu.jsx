import React, { useEffect } from "react";

const ContextMenu = ({
  x,
  y,
  habitId,
  habitTitle,
  isCompleted,
  onDelete,
  onClose,
}) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".context-menu")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  const handleShare = () => {
    if (!isCompleted) {
      // You might want to add a notification here
      return;
    }
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=Just completed my habit: ${habitTitle}`;
    window.open(twitterShareUrl, "_blank");
    onClose();
  };

  return (
    <div className="context-menu active" style={{ top: y, left: x }}>
      <span id="habitTitle">{habitTitle}</span>
      <button
        id="delete"
        onClick={() => {
          onDelete(habitId);
          onClose();
        }}
      >
        Delete
      </button>
      <button id="shareOnTwitter" onClick={handleShare} disabled={!isCompleted}>
        Share on Twitter
      </button>
    </div>
  );
};

export default ContextMenu;
