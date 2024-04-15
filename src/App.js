import logo from './logo.svg';
import Accordian from "./components/Accordian"
import './App.css';
import RandomColor from './components/RandomColor';
import StarRating from './components/StarRating';
import SliderImages from './components/SliderImages';
import LoadData from './components/LoadData';
import TreeView from './components/TreeView';
import menus from "./components/TreeView/data.js"
import Qrcode from './components/Qrcode';
import ChangeModeComponent from './components/ChangeModeComponent';
import ScrollIndicators from './components/ScrollIndicator';
import Tabs from './components/Tabs';
import ModalTest from './components/modal-test';
import GithubFinder from './components/github-fiinder';
import AutoComplete from './components/search-autocomplete';
import TicTacToe from './components/Tictactoe';
import FeatureFlag from './components/featureFlag';
import OutSideClickTest from './components/OutSideClick/test';
import UseResize from './components/useResize';


function App() {
  const url = "https://picsum.photos/v2/list"
  return (
    <div className="App">
      {/* react-devtools */}
      {/*    <RandomColor /> */}
      {/* <StarRating stars={15} /> */}
      {/*   <SliderImages url={url} page={1} limit={10} /> */}
      {/*     <LoadData /> */}
      {/*    <TreeView menus={menus} /> */}
      {/*      <Qrcode /> */}
      {/* <ChangeModeComponent /> */}
      {/*       <ScrollIndicators url={"https://dummyjson.com/posts?limit=100"} />
 */}
      {/*  <Tabs /> */}
      {/*    <ModalTest
      /> */}
      {/*  <GithubFinder /> */}
      {/*  <AutoComplete /> */}
      {/*  <TicTacToe />
      <FeatureFlag /> */}
      {/*  <OutSideClickTest /> */}
      {/* <UseResize /> */}
      <Accordian />
    </div>
  );
}

export default App;
