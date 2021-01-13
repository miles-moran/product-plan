import React from "react";

export default () => {
  return (
    <div className="modal shadow flex center">
      <div>
        <div className="sample-drag-zone"></div>
        <div className="modal-header">We'll start with a lane</div>
        <div className="modal-description">
          Lanes represent high level categories, such as teams, product lines,
          or strategic initiatives. Add a color and description to your lane to
          communicate valuable details to stakeholders. Drag and drop to get
          started
        </div>
        <span className="modal-submit selectable">Got it</span>
      </div>
    </div>
  );
};
