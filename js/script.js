let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var x, xmlDoc, xhttp;
xhttp = new XMLHttpRequest();
xhttp.open("GET", "teachers.xml", false);
xhttp.send();
xmlDoc = xhttp.responseXML;
x = xmlDoc.getElementsByTagName("teacher");
table = "<tr><th>NAME</th>" + "<th>COURSE</th></tr>";
for (i = 0; i < x.length; i++) {
  table += "<tr onclick='display(" + i + ")'><td>";
  table += x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
  table += "</td><td>";
  table += x[i].getElementsByTagName("course")[0].childNodes[0].nodeValue;
  table += "</td></tr>";
}
document.getElementById("students").innerHTML = table;
function display(i) {
  document.getElementById("info").innerHTML =
    "NAME : " +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "<br>ID : " +
    x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
    "<br>COURSE : " +
    x[i].getElementsByTagName("course")[0].childNodes[0].nodeValue +
    "<br>AGE : " +
    x[i].getElementsByTagName("age")[0].childNodes[0].nodeValue +
    "<br>CONTACT : " +
    x[i].getElementsByTagName("contact")[0].childNodes[0].nodeValue;
}
