import React from "react";
import Updown from "./Components/Updown/updownmain";
import Mypage from "./Components/Mypage/mypage";
import Updownsub from "./Components/Updownsub/postshow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Mentor-Mentee" element={<Updown />} />
            <Route path="/sidewrite" element={<Write />} />
            <Route path="/Signuppage" element={<Signup />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/52562893" element={<Portfoliosub />} />
            <Route path="/Updownsub" element={<Updownsub />} />
            <Route path="/CompetitionSub" element={<CompetitionSub />} />
            <Route path="/12362153" element={<Park />} />
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
