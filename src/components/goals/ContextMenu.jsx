export const ContextMenu = ({ visible, x, y, goalId, onClose }) => {
  if (!visible) return null;

  const handleDelete = () => {
    // Delete goal logic here
    onClose();
  };

  const handleShare = () => {
    // Share goal logic here
    onClose();
  };

  return (
    <div
      className="context-menu"
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      <span id="habitTitle"></span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShare}>Share on Twitter</button>
    </div>
  );
};
