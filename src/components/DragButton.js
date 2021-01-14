import React from "react";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const DragButton = ( { type, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes[type] },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="side-nav-button selectable flex center"
      style={{
        opacity: isDragging ? 1 : 1,
        cursor: "pointer",
      }}
    >
      {text}
    </div>
  );
}

export default DragButton;
