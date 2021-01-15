import React from "react";
import { ItemTypes } from "../constants";
import { useDrop, useDrag } from "react-dnd";

function DropZone({ children, type, add, index }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes[type],
    drop: () => add(index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={isOver ? "isOver barzone": 'barzone'}>
      {children}
    </div>
  );
}

export default DropZone;
