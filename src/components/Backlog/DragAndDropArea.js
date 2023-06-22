import React from 'react';
import { useDrop } from 'react-dnd';

const DragAndDropArea = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: () => ({ name: 'Drop Area' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} style={{ padding: '10px', marginTop: '10px',border:'dashed gray' }}>
      {isActive ? 'Release to drop' : 'Drag item here'}
    </div>
  );
};

export default DragAndDropArea;
