import Home from "./pages/home/Home.jsx";
import Colleges from "./pages/Colleges/colleges.jsx";
import CollegeOfEngineering from './pages/Colleges/coe';
import CollegeOfManagement from './pages/Colleges/com';
import CollegeOfData from './pages/Colleges/cod';
import CollegeOfDesign from './pages/Colleges/codesign';
import Frontend from "./pages/About/frontend.jsx";
import Backend from "./pages/About/backend";
import Uiux from "./pages/About/uiux";
import Blockchain from "./pages/About/blockchain";
import DataAnalysis from "./pages/About/dataAnalysis";
import DevOps from "./pages/About/devOps";
import Graphic from "./pages/About/graphic";
import Fullstack from "./pages/About/fullstack";
import Java from "./pages/About/java";
import Mobile from "./pages/About/mobile";
import Machine from "./pages/About/machine";
import Product from "./pages/About/product";
import Project from "./pages/About/project";
import Technical from "./pages/About/technical";
import Net from "./pages/About/net";
import Digital from "./pages/About/digital";
import Advance from "./pages/About/advance";


import { Route, Routes } from "react-router-dom";
import { React } from "react";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="colleges" element={<Colleges />} />

        <Route path="college of engineering" element={<CollegeOfEngineering />} />
        <Route path="college of management" element={<CollegeOfManagement />} />
        <Route path="college of data" element={<CollegeOfData />} />
        <Route path="college of design" element={<CollegeOfDesign />} />

        <Route path="About frontend" element={<Frontend />} />
        <Route path="About backend" element={<Backend />} />
        <Route path="About fullstack" element={<Fullstack />} />
        <Route path="About Blockchain Development" element={<Blockchain />} />
        <Route path="About Mobile Development" element={<Mobile/>} />
        <Route path="About Technical Writing" element={<Technical />} />
        <Route path="About Product Management" element={<Product/>} />
        <Route path="About Project Management" element={<Project/>} />
        <Route path="About UIUX" element={<Uiux />} />
        <Route path="About .Net" element={<Net />} />
        <Route path="About Java" element={<Java />} />
        <Route path="About Data Science and Machine Learning" element={<Machine/>} />
        <Route path="About Graphic Design" element={<Graphic />} />
        <Route path="About DevOps" element={<DevOps />} />
        <Route path="About Data Science and Analysis" element={<DataAnalysis />} />
        <Route path="About Digital Marketing" element={<Digital />} />
        <Route path="About Advance Excel" element={<Advance />} />
        
        
      </Routes>
    </div>
  );
};
export default App;
