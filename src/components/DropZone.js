import React from "react";
import { ItemTypes } from "../constants";
import { useDrop, useDrag } from "react-dnd";

function DropZone({ type, add, index }) {
  const [{ isDragging }, drop] = useDrop({
    accept: ItemTypes[type],
    drop: () => add(index),
    collect: (monitor) => ({
      isDragging: !!monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop} className="dropzone">
      { isDragging && (
        <div
        className='flex center'
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
            backgroundColor: "white",
            border: "2px dashed #e4e6e8",
            borderRadius: "5px",
          }}
        >
          <div>{"Drop Here"}</div>
        </div>
      )}
    </div>
  );
}

export default DropZone;
