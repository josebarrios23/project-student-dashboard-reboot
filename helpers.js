export function formatStudentNames(student) {
    const { preferredName, middleName, surname } = student.names;
    return `${preferredName} ${middleName} ${surname}`;
}

export function onTrackToGraduate(student) {
    if (student.codewars.current.total > 850 &&
        student.certifications.resume &&
        student.certifications.linkedin &&
        student.certifications.github &&
        student.certifications.mockInterview) {
        return "On Track To Graduate";
    }
}

export function convertBirthday(birthday){
    const date = new Date(birthday);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

export function addSpaceToCohort(string){
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
    return result;
}