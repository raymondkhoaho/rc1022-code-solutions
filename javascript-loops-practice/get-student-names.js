/* exported getStudentNames */
function getStudentNames(students) {
  var newName = [];
  for (var i = 0; i < students.length; i++) {
    newName.push(students[i].name);
  }
  return newName;
}
