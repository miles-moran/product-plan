import React from "react";
import { ItemTypes } from "../constants";
import { useDrop, useDrag } from "react-dnd";

function DropZone({ addLane, index }) {
  const [{ isDragging }, drop] = useDrop({
    accept: ItemTypes.LANE,
    drop: () => addLane(index),
    collect: (monitor) => ({
      isDragging: !!monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop} className="dropzone">
      {isDragging && (
        <div
          className="flex center lane-drop">
          <div>Drop Here</div>
        </div>
      )}
    </div>
  );
}

export default DropZone;
