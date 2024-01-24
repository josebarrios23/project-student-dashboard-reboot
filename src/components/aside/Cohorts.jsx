import { useState, useEffect } from "react";
import { getAllStudents } from "../../api/fetch";
import { addSpaceToCohort } from "../../../helpers";

export default function Cohorts({ setSelectedCohort }) {
  const [allStudents, setAllStudents] = useState([]);
  const [ascendingCohortCodes, setAscendingCohortCodes] = useState([]);
  const [descendingCohortCodes, setDescendingCohortCodes] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const compareCohortCodes = (a, b, isAscending) => {
    const seasonOrder = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
    const yearA = parseInt(a.slice(-4));
    const yearB = parseInt(b.slice(-4));
    const seasonA = seasonOrder[a.slice(0, -4)];
    const seasonB = seasonOrder[b.slice(0, -4)];

    if (yearA !== yearB) {
      return isAscending ? yearB - yearA : yearA - yearB;
    } else {
      return seasonA - seasonB;
    }
  };

  function grabCohortCode() {
    const unorderedCohortCodes = [];
    allStudents.forEach((student) => {
      const cohortCode = student.cohort ? student.cohort.cohortCode : null;
      if (cohortCode && !unorderedCohortCodes.includes(cohortCode)) {
        unorderedCohortCodes.push(cohortCode);
      }
    });

    const ascendingConversion = [...unorderedCohortCodes].sort((a, b) => compareCohortCodes(a, b, true));
    const descendingConversion = [...unorderedCohortCodes].sort((a, b) => compareCohortCodes(a, b, false));

    setAscendingCohortCodes(ascendingConversion);
    setDescendingCohortCodes(descendingConversion);
  }

  useEffect(() => {
    getAllStudents().then((data) => {
      setAllStudents(data);
    });
  }, []);

  useEffect(() => {
    grabCohortCode();
  }, [allStudents]);

  const toggleCohortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div>
      <h1>Choose A Class By Start Date</h1>
      <button className="toggle-button cohort-season" onClick={toggleCohortOrder}>
        {isAscending ? "Sort Ascending By Year" : "Sort Descending By Year"}
      </button>
      <br />
      <div className="cohort-season" onClick={() => setSelectedCohort(null)}>
        All Students
        <hr />
      </div>
      {(isAscending ? ascendingCohortCodes : descendingCohortCodes).map((code) => (
        <div className="cohort-season" key={code} onClick={() => setSelectedCohort(code)}>
          {addSpaceToCohort(code)}
          <hr />
        </div>
      ))}
    </div>
  );
}
