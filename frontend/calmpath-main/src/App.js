import "./App.css";
import Journal from "./components/Journal";
import JournalPage from "./components/JournalPage";
import Video from "./components/Video";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Journal />}></Route>
        <Route path="/JournalPage" element={<JournalPage />}></Route>
        <Route path="/Video" element={<Video />}></Route>
      </Routes>
    </>
  );
}

export default App;
