import React from "react";
import { ItemTypes } from "../constants";
import { useDrop, useDrag } from "react-dnd";

function DropZone({children, type, add, index}) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes[type],
    drop: () => add(index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="dropzone">
      {isOver && (
        <div
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
            backgroundColor: "white",
            border: "2px dashed #e4e6e8",
            borderRadius: "5px"
          }}
        />
      )}
    </div>
  );
}

export default DropZone;
