import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import "antd/dist/reset.css";
import Payments from "./pages/Payments";
import Dashboard from "./pages/Dashbord";
import Snapshot from "./pages/Snapshot";

const Security = () => <h1>Security Page</h1>;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-gray-light">
        <div className="border-r border-gray-light1 bg-white">
          <Sidebar collapsed={collapsed} />
        </div>
        <div className="flex-1">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Snapshot" element={<Snapshot />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/settings/security" element={<Security />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
