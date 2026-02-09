import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Home } from "./Pages/Home";
import EditEmp from "./Pages/EditEmp";
import { AddEmp } from "./Pages/AddEmp";
import { ViewEmp } from "./Pages/ViewEmp";
import { Layout } from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      {/* 🔥 Toast yahin add hota hai */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editemployee/:id" element={<EditEmp />} />
          <Route path="addemployee" element={<AddEmp />} />
          <Route path="viewemployee/:id" element={<ViewEmp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
