import { useState, useEffect } from "react";
import { getAllStudents } from "../../api/fetch";
import { Link } from 'react-router-dom';

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

    function formatStudentNames(student) {
      const { preferredName, middleName, surname } = student.names;
      return `${preferredName} ${middleName} ${surname}`;
  }

  function onTrackToGraduate(singleStudent) {
    if (singleStudent.codewars.current.total > 850 &&
        singleStudent.certifications.resume &&
        singleStudent.certifications.linkedin &&
        singleStudent.certifications.github &&
        singleStudent.certifications.mockInterview) {
      return "On Track To Graduate";
        }
  }

  function convertBirthday(birthday){
    const date = new Date(birthday)
    const convertedDob = date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
    return convertedDob
  }

  return (
    <div>
      <h2>Total Students: {filteredStudents.length}</h2>
      {selectedCohort && <p>{selectedCohort}</p>}
      <div className="students">
        {filteredStudents.map((student) => {
          return (
            <div className="card">
                <Link to={`/${student.id}`} key={student.id}>
                <img src={student.profilePhoto} alt="Student profile" />
                <div>{formatStudentNames(student)}</div>
                <div>{student.username}</div>
                <div>DOB: {convertBirthday(student.dob)}</div>
                <br />
                <div>{onTrackToGraduate(student)}</div>
            </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
}