
import { Routes, Route } from "react-router-dom";
import Navbar from "./Commponent/Navbar";
import ViewTask from "./Commponent/ViewTask";
import New from "./Commponent/New";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewTask />} />
        <Route path="/New" element={<New />} />
      </Routes>
    </>
  )
}

export default App
