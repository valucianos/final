var addEle = document.createElement("div");
var userBox = document.body.querySelector(".user");
var passBox = document.body.querySelector(".pass");
var nameBox = document.body.querySelector(".name");
var gradeBox = document.body.querySelector(".grade");
var messageBox = document.body.querySelector(".message");
var messageBox1 = document.body.querySelector(".message1");
var list = [];
document.body.querySelector(".submit").addEventListener("click", function () {
  messageBox.innerHTML = "";
  if (userBox.value == "cool" && passBox.value == "password") {
    grades.call(name,grade);
  } else if (userBox.value != "cool") {
    messageBox.innerHTML = "You have entered an incorrect username. Try again.";
    userBox.style.border = "solid 3px red";
  } else if (passBox.value != "password") {
    messageBox.innerHTML = "You have entered an incorrect password. Try again.";
    passBox.style.border = "solid 3px red";
  }
  if (userBox.value != "cool" && passBox.value != "password") {
    messageBox.innerHTML =
      "You've entered a wrong combination of username and password. Try again";
    userBox.style.border = "solid 3px red";
    passBox.style.border = "solid 3px red";
  }
});
function grades(){
    messageBox.innerHTML = "";
  list.push({
    name: nameBox.value,
    grade: gradeBox.value
  });
  // addGrades();
  renderList();
  messageBox.innerHTML = "";
}
function addGrades(name,grade) {
  messageBox.innerHTML = "";
  messageBox1.innerHTML = "";
  if (nameBox.value == Number || nameBox.value == "") {
    messageBox1.innerHTML =
      "You have entered an invalid value for 'Name'. Try again.";
    nameBox.style.border = "solid 3px red";
  }
  if (
    gradeBox.value > 101 ||
    gradeBox.value < -1 ||
    gradeBox.value == "" ||
    gradeBox == ""
  ) {
    messageBox.innerHTML =
      "You have entered an invalid value for 'Grade', enter a value between 0-100. Try again.";
    gradeBox.style.border = "solid 3px red";
  }
  list.push({
    name: nameBox.value,
    grade: gradeBox.value
  });
  renderList();
}
function renderList() {
  document.body.querySelector(".list").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var itemEle = document.createElement("h6");
    itemEle.innerHTML = "Name: " + list[i].name + ", Grade: " + list[i].grade;
    document.body.querySelector(".list").appendChild(itemEle);
  }
}
document.body
  .querySelector(".viewButton")
  .addEventListener("click", function () {
    grades();
  });
document.body.querySelector(".submitg").addEventListener("click", function () {
  addGrades();
});