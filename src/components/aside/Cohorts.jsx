import { useState, useEffect } from "react";
import { getAllStudents } from "../../api/fetch";

export default function Cohorts({ setSelectedCohort }) {
  const [allStudents, setAllStudents] = useState([]);
  const [ascendingCohortCodes, setAscendingCohortCodes] = useState([]);
  const [descendingCohortCodes, setDescendingCohortCodes] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  function grabCohortCode() {
    const unorderedCohortCodes = [];
    allStudents.forEach((student) => {
      const cohortCode = student.cohort ? student.cohort.cohortCode : null;
      if (cohortCode && !unorderedCohortCodes.includes(cohortCode)) {
        unorderedCohortCodes.push(cohortCode);
      }
    });

    const seasonOrder = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };

    const ascendingConversion = [...unorderedCohortCodes].sort((a, b) => {
      const yearA = parseInt(a.slice(-4));
      const yearB = parseInt(b.slice(-4));
      const seasonA = seasonOrder[a.slice(0, -4)];
      const seasonB = seasonOrder[b.slice(0, -4)];

      if (yearA !== yearB) {
        return yearB - yearA;
      } else {
        return seasonA - seasonB;
      }
    });

    const descendingConversion = [...unorderedCohortCodes].sort((a, b) => {
      const yearA = parseInt(a.slice(-4));
      const yearB = parseInt(b.slice(-4));
      const seasonA = seasonOrder[a.slice(0, -4)];
      const seasonB = seasonOrder[b.slice(0, -4)];
    
      if (yearB !== yearA) {
        return yearA - yearB;
      } else {
        return seasonA - seasonB;
      }
    });

    setDescendingCohortCodes(descendingConversion)
    setAscendingCohortCodes(ascendingConversion);
  }

  function addSpaceToCohort(string){
    let result = '';

    for (let i = 0; i < string.length; i++) {
       if (!isNaN(string[i]) && string[i] !== ' ') { 
          result += ' ' + string[i];
          result += string.slice(i + 1);
          break;
      } else {
          result += string[i];
      }
    }
    return result
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
        {isAscending ? "Sort Descending By Year" : "Sort Ascending By Year"}
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
