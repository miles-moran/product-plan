export default ({ handleSubmit, modal }) => {
  return (
    <div className="modal shadow flex center">
      <div>
        <div className="sample-drag-zone"></div>
        <div className="modal-header">{modal.header}</div>
        <div className="modal-description">
        {modal.description}
        </div>
        <span className="modal-submit selectable" onClick={handleSubmit}>{modal.submit}</span>
      </div>
    </div>
  );
};
