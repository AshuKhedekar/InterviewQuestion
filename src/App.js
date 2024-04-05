import './App.css';
import DivLeftRight from './component/DivLeftRight';
import ListItem from './component/InsertArrayAtPosition';
import CounterList from './component/ReplaceArrayValue';
// import DeleteArray from './component/DeleteArray';
// import NestedObj from './component/NestedObj';
// import ObjWithSpread from './component/ObjWithSpread';
// import List from './component/StateWithArray';
import ShapeEditor from './component/TransformArray';
function App() {
  return (
    <div className="App">
      {/* <ObjWithSpread/>
      <NestedObj/>
      <List/>
      <DeleteArray/> */}
      <ShapeEditor/>
      <CounterList/>
      <ListItem/>
      <DivLeftRight/>
    </div>
  );
}

export default App;
