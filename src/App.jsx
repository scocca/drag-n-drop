import React, { useState } from 'react';
import DraggableItem from './Draggable';
import DropZone from './Dropzone';
import './App.css';

function App() {
  const initialItems = ['Item 1', 'Item 2', 'Item 3'];
  const [items, setItems] = useState(initialItems);
  const [droppedItem, setDroppedItem] = useState(null);

  const handleDrop = (item) => {
    setDroppedItem(item);
    restoreItems()
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const restoreItems = () => {
    setItems(initialItems);
  };

  return (
    <div className="App">
      <div className="items-list">
        {items.map((item) => (
          <DraggableItem key={item} item={item} />
        ))}
      </div>
      <div className="dropzones">
        <DropZone droppedItem={droppedItem} onDrop={handleDrop} />
      </div>
      <button onClick={restoreItems}>Restore Items</button>
    </div>
  );
}

export default App;