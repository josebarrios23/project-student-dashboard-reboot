import { useState, useEffect } from "react";
import { getAllStudents } from "../../api/fetch";

export default function Cohorts({ setSelectedCohort }) {
  const [allStudents, setAllStudents] = useState([]);
  const [cohortCodes, setCohortCodes] = useState([]);

  function grabCohortCode() {
    const uniqueCohortCodes = [];

    allStudents.forEach((student) => {
      const cohortCode = student.cohort ? student.cohort.cohortCode : null;
      if (cohortCode && !uniqueCohortCodes.includes(cohortCode)) {
        uniqueCohortCodes.push(cohortCode);
      }
    });

    setCohortCodes(uniqueCohortCodes);
  }

  useEffect(() => {
    getAllStudents().then((data) => {
      setAllStudents(data);
    });
  }, []);

  useEffect(() => {
    grabCohortCode();
  }, [allStudents]);

  return (
    <div>
      <h1>Choose A Class By Start Date</h1>
      <br />
      <div onClick={() => setSelectedCohort(null)}>
        All Students
        <hr />
      </div>
      {cohortCodes.map((code) => (
        <div key={code} onClick={() => setSelectedCohort(code)}>
          {code}
          <hr />
        </div>
      ))}
    </div>
  );
}