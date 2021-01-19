import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragButton from "./components/DragButton";
import DropZone from "./components/DropZone";
import Lane from "./components/Lane";
import { modals } from "./data/modals";
const App = () => {
  const [modalHistory, setModalHistory] = useState([]);
  const [modalId, setModalId] = useState(null);
  const [lanes, setLanes] = useState([]);

  //Initialize first modal
  useEffect(() => {
    setTimeout(() => revealModal(1), 1500);
  }, []);

  const generateNewLane = (laneId) => ({
    id: laneId,
    bars: [Array(12).fill(undefined), Array(12).fill(undefined)],
  });

  const addLane = () => {
    setLanes([...lanes, generateNewLane(lanes.length)]);
    //Initialize second modal
    revealModal(2);
  };

  const addBar = (laneId, rowId, barId) => {
    const l = [...lanes];
    l[laneId].bars[rowId][barId] = {
      title: "Roadmap item " + (l[laneId].bars.length + 1),
    };
    setLanes(l);
    //initialize third modal
    revealModal(3);
  };

  const revealModal = (id) => {
    if (!modalHistory.includes(id)) {
      setModalHistory([...modalHistory, id]);
      setModalId(id);
    }
  };

  const handleModalSubmit = () => {
    setModalId(null);
  };

  return (
    <div>
      {modalId && (
        <div className="modal-container flex center">
          <Modal
            handleSubmit={handleModalSubmit}
            modal={modals.find((modal) => modal.id === modalId)}
          />
        </div>
      )}
      <div id="nav" className="flex">
        <div id="logo" className="flex center">
          Product Plan
        </div>
        <div className="flex space-between center grow">
          <div>Candidate Roadmap</div>
          <div>Search</div>
        </div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex space-between">
          <div className="flex grow column">
            <div id="nav-secondary" className="flex space-between">
              <div id="product-roadmap-header" className="flex bottom">
                Product Roadmap
              </div>
              <div id="tabs" className="flex bottom">
                <div className="tab selectable selected">Roadmap</div>
                <div className="tab selectable">Planning Board</div>
                <div className="tab selectable">Parking</div>
              </div>
            </div>
            <div id="board" className="flex grow column">
              <div className="flex space-between">
                <div>2018</div>
                <div>Q1 2019</div>
                <div>Q2</div>
                <div>Q3</div>
                <div>Q4</div>
              </div>
              {lanes.map((lane, i) => (
                <Lane key={i} lane={lane} addBar={addBar} />
              ))}
              <DropZone type={"LANE"} add={addLane} />
            </div>
          </div>
          <div>
            <div className="side-nav-container">
              <DragButton text={"Add lane"} type={"LANE"} />
              <DragButton text={"Add bar"} type={"BAR"} />
            </div>
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default App;
