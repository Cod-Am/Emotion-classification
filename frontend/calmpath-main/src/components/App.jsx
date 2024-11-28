import JournalPage from "./JournalPage";
import Login from "./Login";
import Private from "./Private";
import Register from "./Register";
import Video from "./Video";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/journal" element={<Private />}>
          <Route path="" element={<JournalPage />} />
          {/* <Route path="Profile" element={<Profile />} /> */}
        {/* </Route>
        <Route path="/journal" element={<JournalPage />} />

        <Route path="/Video" element={<Video />}></Route> */}
      </Routes>
    </>
    // <div>
    //   <Journal />
    // </div>
    // <>
    //   <Video />
    // </>
  );
}
