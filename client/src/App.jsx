import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Undefined from "./pages/Undefined";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Undefined />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
