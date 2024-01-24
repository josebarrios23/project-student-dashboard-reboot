import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneStudent } from "../../api/fetch";

export default function Student() {
    const [singleStudent, setSingleStudent] = useState(null);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    function formatStudentNames(student) {
        const { preferredName, middleName, surname } = student.names;
        return `${preferredName} ${middleName} ${surname}`;
    }

    function onTrackToGraduate(student) {
        if (student.codewars.current.total > 850 &&
            student.certifications.resume &&
            student.certifications.linkedin &&
            student.certifications.github &&
            student.certifications.mockInterview) {
            return "On Track To Graduate";
        }
    }

    function convertBirthday(birthday){
        const date = new Date(birthday)
        const convertedDob = date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
        return convertedDob
    }

    function handleSubmit(event) {
        event.preventDefault();
        const author = event.target.author.value;
        const commentText = event.target.comment.value;
        
        setComments([...comments, { author, commentText }]);
        
        event.target.author.value = '';
        event.target.comment.value = '';
    }

    useEffect(() => {
        getOneStudent(id).then((data) => {
          setSingleStudent(data);
        });
    }, [id]);

    return (
        <div className="card-container" key={id}>
            {singleStudent && (
                <>
                    <div className="card">
                        <img src={singleStudent.profilePhoto} alt="Student profile" />
                        <div>{formatStudentNames(singleStudent)}</div>
                        <div>{singleStudent.username}</div>
                        <div>DOB: {convertBirthday(singleStudent.dob)}</div>
                    </div>
                    <div>
                    <section className="student-stats">
                        {singleStudent.codewars && singleStudent.codewars.current && (
                            <div className="codewars">
                                <h2>Codewars</h2>
                                Current Total: {singleStudent.codewars.current.total}
                                <br />
                                Last Week: {singleStudent.codewars.current.lastWeek}
                                <br />
                                Goal: {singleStudent.codewars.goal.total}
                                <br />
                                Percentage Achieved: {((singleStudent.codewars.current.total / singleStudent.codewars.goal.total) * 100).toFixed(2)}%
                            </div>
                        )}
                        {singleStudent.cohort && singleStudent.cohort.scores && (
                            <div className="scores">
                                <h2>Scores</h2>
                                Assignments: {singleStudent.cohort.scores.assignments * 100}%
                                <br />
                                Projects: {singleStudent.cohort.scores.projects * 100}%
                                <br />
                                Assessments: {singleStudent.cohort.scores.assessments * 100}%
                            </div>
                        )}
                        <div className="certifications">
                            <h2>Certifications</h2>
                            Resume: {singleStudent.certifications.resume ? '✅' : '❌'}
                            <br />
                            LinkedIn: {singleStudent.certifications.linkedin ? '✅' : '❌'}
                            <br />
                            GitHub: {singleStudent.certifications.github ? '✅' : '❌'}
                            <br />
                            Mock Interview: {singleStudent.certifications.mockInterview ? '✅' : '❌'}
                        </div>
                        </section>
                        <h1 className="student-track">{onTrackToGraduate(singleStudent)}</h1>
                        <div className="notes">
                            <h2>1:1 Notes</h2>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <input 
                                        type="text" 
                                        name="author" 
                                        placeholder="Author" 
                                        required 
                                    /><br />
                                    <textarea 
                                        name="comment" 
                                        placeholder="Comment" 
                                        required
                                    ></textarea><br />
                                    <button type="submit">Submit Comment</button>
                                </form>
                                <div className="comment-section">
                                    <h2>Comments (Count: {comments.length})</h2>
                                    {comments.map((comment, index) => (
                                        <div key={index}>
                                            <strong>{comment.author}</strong>: {comment.commentText}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
