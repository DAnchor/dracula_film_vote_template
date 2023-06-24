/**
 * autohor Dmitriy Jakovlevs
 */
// debugger
debugger;
// cookie
const date = new Date();
const year = date.getFullYear();
const domain = "\"id=45; domain=www.webdevcit.com; date="
document.cookie = domain + year.toString + ";\""
/**
 * declaring variables
 */
// elements
var valid = true;
const inputs = document.getElementById("form").getElementsByTagName("input");
const elementPwd = document.getElementsByClassName("pwdAlert");
const elementMsg = document.getElementsByClassName("msgAlert");
const elementName = document.getElementsByClassName("nameAlert");
const elementCheckBox = document.getElementsByTagName("input");
const elementChkAlert = document.getElementsByClassName("checkAlert");
// regular expressions
const nameSurnameMatch = new RegExp("^[A-Za-z'\" ]*[A-Za-z'\"]*$");
const emailMatch = new RegExp("^$|[a-zA-Z0-9].(?=[@]).{2,}$");
// values
const visible = "visibility: visible;";
const hidden = "visibility: hidden;";

/**
 * declaring array
 * with movies
 */
var films = [
  { poster: "img/dracula1931.jpg", film: "Dracula (1931)" },
  { poster: "img/dracula1958.jpg", film: "Dracula (1958)" },
  { poster: "img/dracula1970.jpg", film: "Dracula (1970)" },
  { poster: "img/dracula1979.jpg", film: "Dracula (1979)" },
  { poster: "img/dracula1992.jpg", film: "Bram Stoker's Dracula (1992)" },
  { poster: "img/dracula2000.jpg", film: "Dracula (2000)" },
  { poster: "img/nosferatu1922.jpg", film: "Nosferatu (1922)" },
  { poster: "img/nosferatu1979.jpg", film: "Nosferatu (1979)" }
];

// Movie title
(() => {
  for (let i = 0; i < films.length; i++) {
    let xDiv = document.createElement("div"); // creating new element
    xDiv.className = "child"; // assigning to class
    document.getElementById("parent").appendChild(xDiv);

    let xPoster = films[i].poster; // individual index key
    var xImg = document.createElement("img"); // creating new object/element
    xImg.className = "img"; // assigning to class
    xImg.innerHTML = xPoster; // attaching elements to html
    document.getElementsByClassName("child")[i].appendChild(xImg);

    var x = document.getElementsByTagName("img");
    x[i].src = films[i].poster;

    let xFilm = films[i].film; // individual index key
    var xTitle = document.createElement("div"); // creating new object/element
    xTitle.className = "xTitle"; // assigning to class
    xTitle.innerHTML = xFilm; // attaching elements to html
    document.getElementsByClassName("child")[i].appendChild(xTitle);

    var xCheckBox = document.createElement("input"); // creating new object/element
    xCheckBox.type = "checkbox";
    xCheckBox.name = films[i].film;
    xCheckBox.className = "xCheckBox"; // assigning to class
    document.getElementsByClassName("child")[i].appendChild(xCheckBox);
  }
})();

/**
 *
 * checking multiple input
 * fields for validation
 */
// check empty fields
function checkInputs(e) {
  if (inputs[0].value == "") {
    nameAlertBoxEmpty();
    valid = false;
  }
  if (inputs[1].value == "") {
    emailAlertBoxEmpty();
    valid = false;
  }
  if (inputs[2].value == "") {
    pwdAlertBoxEmpty();
    valid = false;
  }
  if (!valid) e.preventDefault();
}
// name/surname
function checkName(e) {
  if (!nameSurnameMatch.test(inputs[0].value)) {
    nameAlertBox();
    valid = false;
  } else {
    valid = true;
  }
  if (!valid) e.preventDefault();
}
// email
function checkEmail(e) {
  if (!emailMatch.test(inputs[1].value)) {
    emailAlertBox();
    valid = false;
  } else {
    valid = true;
  }
  if (!valid) e.preventDefault();
}

// another way to check password complexity with regex patern
var checkPwd = function(e) {
  if (!inputs[2].value.match(/^$|[a-zA-Z0-9].(?=.*[\w])(?=.*[@#$%^&+=]).{7,31}$/)) {
    pwdAlertBox();
    valid = false;
  } else {
    valid = true;
  }
  if (!valid) e.preventDefault();
};

// checkbox check
var checkBox = function(e) {
  var xBox = 0;
  for (let i = 0; i < elementCheckBox.length; i++) {
    if (elementCheckBox[i].checked == true) {
      xBox = xBox + 1;
    }
  }
  if (xBox > 0) {
    valid = true;
  } else {
    valid = false;
    checkBoxAlertBoxEmpty();
  }
  if (!valid) e.preventDefault();
}

/**
 * custom alert messages for
 * name, email, and password
 */
// name/surname box
const nameAlertBox = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "nameAlert";
  xDiv.innerHTML =
    '<br>Error: wrong name/surname input!<br>Please input name/surname in following format:<br>"John Smith"<br>';
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};
const nameAlertBoxEmpty = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "nameAlert";
  xDiv.innerHTML =
    "<br>Error: empty field!<br>Please input name/surname...<br>";
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};
// email box
const emailAlertBox = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "msgAlert";
  xDiv.innerHTML =
    '<br>Error: wrong email input!<br>Please input email address in following format:<br>"example@mail.com"<br>';
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};
const emailAlertBoxEmpty = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "msgAlert";
  xDiv.innerHTML = "<br>Error: empty field!<br>Please input email...<br>";
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};
// password box
const pwdAlertBox = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "pwdAlert";
  xDiv.innerHTML =
    "<br>Error: wrong password input!<br>Please input password in following format:<br>Minimum password length 8 characters<br>At least 1 digit: 1234567890<br>At least 1 special character from selection: @#$%^&+=<br>";
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};
const pwdAlertBoxEmpty = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "pwdAlert";
  xDiv.innerHTML = "<br>Error: empty field!<br>Please input password...<br>";
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};

const checkBoxAlertBoxEmpty = function() {
  var xDiv = document.createElement("p");
  xDiv.className = "checkAlert";
  xDiv.innerHTML = "<br>Error: empty field!<br>Please tick checkbox...<br>";
  xVisible();
  document.getElementById("p").appendChild(xDiv);
};

/**
 * changing visibility
 * of alert-box
 */
// visible box
const xVisible = function() {
  document.getElementsByClassName("menu-hide-unhide")[0].style = visible;
};
// hidden box
var xHidden = function() {
  document.getElementsByClassName("menu-hide-unhide")[0].style = hidden;
  // removing elements from custom-alert-box when "close" button is pressed
  while (elementPwd.length > 0) elementPwd[0].remove();
  while (elementMsg.length > 0) elementMsg[0].remove();
  while (elementName.length > 0) elementName[0].remove();
  while (elementChkAlert.length > 0) elementChkAlert[0].remove();
};

/**
 * loading functions
 */
function init() {
  // adding event to the form
  document.getElementById("xform").addEventListener("submit", checkInputs);
  document.getElementById("xform").addEventListener("submit", checkName);
  document.getElementById("xform").addEventListener("submit", checkEmail);
  document.getElementById("xform").addEventListener("submit", checkPwd);
  document.getElementById("xform").addEventListener("submit", checkBox);
}
// adding event to the window object
window.addEventListener("load", init);
// adding event to alert-box "close" div
document.getElementById("close").addEventListener("click", xHidden, false);
