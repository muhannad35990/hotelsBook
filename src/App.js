import "./App.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import SideBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";
function App() {
  return (
    <div className="Container">
      <Toolbar />
      <div className="content">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
