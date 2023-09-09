function getGradePoint(grade) {
	switch (grade.toUpperCase()) {
	  case 'O':
		return 10;
	  case 'A+':
		return 9;
	  case 'A':
		return 8;
	  case 'B+':
		return 7;
	  case 'B':
		return 6;
	  case 'C':
		return 5;
	  default:
		return 0;
	}
  }
  
  function addCourses() {
	var numCourses = document.getElementById("numCourses").value;
	var coursesDiv = document.getElementById("coursesDiv");
  
	coursesDiv.innerHTML = ""; // clear the div
  
	for (var i = 1; i <= numCourses; i++) {
	  var courseDiv = document.createElement("div");
	  courseDiv.innerHTML = "<h3>Subject " + i + "</h3>" +
		"<label>Grade:</label>" +
		"<select class='grade' required>" +
		"<option value='--'>--</option>" +
		"<option value='O'>O</option>" +
		"<option value='A+'>A+</option>" +
		"<option value='A'>A</option>" +
		"<option value='B+'>B+</option>" +
		"<option value='B'>B</option>" +
		"<option value='C'>C</option>" +
		"<option value='U'>U</option>" +
		"</select>" +
		"<br>" +
		"<label>Credit Points:</label>" +
		"<select class='creditHours' required>" +
		"<option value='0'>0</option>" +
		"<option value='1'>1</option>" +
		"<option value='2'>2</option>" +
		"<option value='3'>3</option>" +
		"<option value='4'>4</option>" +
		"</select>" +
		"<br>";
	  coursesDiv.appendChild(courseDiv);
	}
  }
  
  function calculateCGPA() {
	var grades = document.getElementsByClassName("grade");
	var creditHours = document.getElementsByClassName("creditHours");
	var totalGradePoints = 0;
	var totalCreditHours = 0;
  
	for (var i = 0; i < grades.length; i++) {
	  var grade = grades[i].value;
	  var gradePoint = getGradePoint(grade);
	  var creditHour = parseInt(creditHours[i].value);
  
	  totalGradePoints += gradePoint * creditHour;
	  totalCreditHours += creditHour;
	}
  
	var cgpa = totalGradePoints / totalCreditHours;
  
	document.getElementById("cgpa").innerHTML = "Your CGPA is: " + cgpa.toFixed(2);
  }
  
  document.getElementById("numCourses").addEventListener("change", addCourses);
