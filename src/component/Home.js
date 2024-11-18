import React from "react";
import Resume from "./Resume";
// import Resume2 from './Resume2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Editor from "./Editor";

export default function Home() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* <Route path="/editor" element={<Editor />} /> */}
            {/* <Route path='/' element={<Resume2/>} /> */}
            <Route path="/" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
