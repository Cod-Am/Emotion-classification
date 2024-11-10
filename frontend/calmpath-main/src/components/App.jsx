import Journal from './Journal'
import JournalPage from './JournalPage'
import Video from './Video'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Journal />}></Route>
        <Route path="/JournalPage" element={<JournalPage />}></Route>
        <Route path="/Video" element={<Video />}></Route>
      </Routes>
    </>
    // <div>
    //   <Journal />
    // </div>
    // <>
    //   <Video />
    // </>
  )
}
