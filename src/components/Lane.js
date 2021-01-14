import DropZone from "./DropZone";
export default ({ lane, addBar }) => {
  return (
    <div className="lane">
      <div className="lane-header">Lane</div>
      <DropZone type={"BAR"} add={() => addBar(lane.id)}/>
      <div className="bars">
        {lane.bars.map((bar) => (
          <span className="bar">{bar.title}</span>
        ))}
      </div>
    </div>
  );
};
