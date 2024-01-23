import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cohorts from "./components/aside/Cohorts.jsx";
import StudentCards from "./components/students/StudentCards.jsx";
import Student from "./components/students/Student.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./about.jsx"

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const location = useLocation();

  return (
    <div>
      <Header />
      <main>
        {location.pathname !== '/about' && (
          <aside>
            <Cohorts setSelectedCohort={setSelectedCohort} />
          </aside>
          )}
        <Routes>
          <Route path="/">
            <Route index element={<StudentCards selectedCohort={selectedCohort} />} />
            <Route path=":id" element={<Student />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </main>
      {location.pathname !== '/about' && (
        <Footer />
      )}
    </div>
  );
}

export default App;