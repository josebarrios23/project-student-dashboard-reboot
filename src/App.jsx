import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cohorts from "./components/aside/Cohorts.jsx";
import StudentCards from "./components/students/StudentCards.jsx";
import Student from "./components/students/Student.jsx";
import Header from "./components/common/Header.jsx";

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cohorts setSelectedCohort={setSelectedCohort} />
        </aside>
        <Routes>
          <Route path="/">
            <Route index element={<StudentCards selectedCohort={selectedCohort} />} />
            <Route path=":id" element={<Student />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;