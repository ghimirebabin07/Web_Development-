function adminLogin() {
  const email = document.getElementById("adminEmail").value;
  const pass = document.getElementById("adminPass").value;

  if (email === "admin@college.edu" && pass === "admin123") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Admin Credentials");
  }
}
function studentLogin() {
  const email = document.getElementById("email").value;
  const sid = document.getElementById("sid").value;

  if (!email.endsWith("@college.edu")) {
    alert("Use college email only");
    return;
  }

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const found = students.find(s => s.email === email && s.id === sid);

  if (found) {
    localStorage.setItem("currentStudent", JSON.stringify(found));
    window.location.href = "student-dashboard.html";
  } else {
    alert("Student not found");
  }
}
function addStudent() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  students.push({
    name: sname.value,
    email: semail.value,
    id: sid.value
  });

  localStorage.setItem("students", JSON.stringify(students));
  alert("Student Added");
}
function postNotice() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.push(noticeText.value);

  localStorage.setItem("notices", JSON.stringify(notices));
  alert("Notice Posted");
}
