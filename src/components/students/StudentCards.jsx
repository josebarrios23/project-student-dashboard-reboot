import { useState, useEffect } from "react";
import { getAllStudents } from "../../api/fetch";
import { Link } from 'react-router-dom';
import { formatStudentNames } from "../../../helpers";
import { onTrackToGraduate } from "../../../helpers";
import { convertBirthday } from "../../../helpers";
import { addSpaceToCohort } from "../../../helpers";

export default function StudentCards({ selectedCohort }) {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    getAllStudents().then((data) => {
      setAllStudents(data);
    });
  }, []);

  const filteredStudents = selectedCohort 
    ? allStudents.filter(student => student.cohort && student.cohort.cohortCode === selectedCohort)
    : allStudents;

  return (
    <div>
      <h2 className="total-students">Total Students: {filteredStudents.length}</h2>
      {selectedCohort && <p className="selected-cohort">{addSpaceToCohort(selectedCohort)}</p>}
      <div className="students">
        {filteredStudents.map((student) => {
          return (
            <div className="card">
                <Link className="card-link" to={`/${student.id}`} key={student.id}>
                <img className="card-img" src={student.profilePhoto} alt="Student profile" />
                <div>{formatStudentNames(student)}</div>
                <div>{student.username}</div>
                <div>DOB: {convertBirthday(student.dob)}</div>
                <br />
                <div className="on-track">{onTrackToGraduate(student)}</div>
            </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
}