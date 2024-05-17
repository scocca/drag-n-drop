import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const DraggableItem = ({ item }) => {
  const nodeRef = useRef(null);

  const handleDragStart = (event) => {
    event.dataTransfer.setData('item', item);
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="draggable-item" draggable onDragStart={handleDragStart}>
        {item}
      </div>
    </Draggable>
  );
};

export default DraggableItem;