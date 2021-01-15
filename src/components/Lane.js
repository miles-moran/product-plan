import BarZone from "./BarZone";
export default ({ lane, addBar }) => {
  return (
    <div className="lane">
      <div className="lane-header">Lane</div>
      <BarZone type={"BAR"} add={() => addBar(lane.id)}>
        <div className="bars">
          {lane.bars.map((bar) => (
            <span className="bar">{bar.title}</span>
          ))}
        </div>
      </BarZone>
    </div>
  );
};
