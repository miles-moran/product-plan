import Modal from "./components/Modal";
const App = () => {
  return (
    <div>
      <div id="nav" className="flex">
        <div id="logo" className="flex center">Product Plan</div>
        <div className="flex space-between center grow">
          <div>Candidate Roadmap</div>
          <div>Search</div>
        </div>
      </div>
      <div id="nav-secondary" className="flex space-between">
        <div id="product-roadmap-header" className="flex bottom">Product Roadmap</div>
        <div id="tabs" className="flex bottom">
          <div className='tab selectable selected'>Roadmap</div>
          <div className='tab selectable'>Planning Board</div>
          <div className='tab selectable'>Parking</div>
        </div>
      </div>
      <div className="flex space-between">
        <div id="board" className="flex grow">
          <div className='flex space-between grow'>
          <div>2018</div>
          <div>Q1 2019</div>
          <div>Q2</div>
          <div>Q3</div>
          <div>Q4</div>
          </div>
        </div>
        <div className='side-nav'>
          <div className='side-nav-button selectable flex center'>Add lane</div>
          <div className='side-nav-button selectable flex center'>Add bar</div>
        </div>
      </div>
    </div>
  );
};

export default App;
