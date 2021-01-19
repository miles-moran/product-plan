import BarZone from "./BarZone";
export default ({ lane, addBar }) => {
  return (
    <div className="lane">
      <div className="lane-header">Lane</div>
      <div className="bars">
        {lane.bars.map((row, rowId) =>
          row.map((bar, barId) => (
            <BarZone key={barId} type={"BAR"} add={() => addBar(lane.id, rowId, barId)}>
              <span className={bar ? "bar" : "bar empty"}></span>
            </BarZone>
          ))
        )}
      </div>
    </div>
  );
};
