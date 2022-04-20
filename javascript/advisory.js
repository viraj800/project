let darkFlag = false;
function toggleDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (darkFlag === false) {
    darkFlag = true;
  } else {
    darkFlag = false;
  }
  darkModeFontColor(darkFlag);
}
function darkModeFontColor(a) {
  var b1 = document.getElementById("tabBtn1");
  var b2 = document.getElementById("tabBtn2");
  var b3 = document.getElementById("tabBtn3");
  var b4 = document.getElementById("tabBtn4");
  if (a === true) {
    b1.style.color = "white";
    b2.style.color = "white";
    b3.style.color = "white";
    b4.style.color = "white";
  } else {
    b1.style.color = "white";
    b2.style.color = "black";
    b3.style.color = "black";
    b4.style.color = "black";
  }

}
function table1() {
  var x = document.getElementById("table1");
  var y = document.getElementById("table2");
  var z = document.getElementById("table3");
  var z2 = document.getElementById("table4");
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
  z2.style.display = "none";
  colorchange(1);
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  //   y.style.display = "none";
  // } else {
  //   x.style.display = "none";
  //   y.style.display = "block";
  // }
}
function table2() {
  var x = document.getElementById("table1");
  var y = document.getElementById("table2");
  var z = document.getElementById("table3");
  var z2 = document.getElementById("table4");
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
  z2.style.display = "none";
  colorchange(2);
}
function table3() {
  var x = document.getElementById("table1");
  var y = document.getElementById("table2");
  var z = document.getElementById("table3");
  var z2 = document.getElementById("table4");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";
  z2.style.display = "none";
  colorchange(3);
}
function table4() {
  var x = document.getElementById("table1");
  var y = document.getElementById("table2");
  var z = document.getElementById("table3");
  var z2 = document.getElementById("table4");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  z2.style.display = "block"
  colorchange(4);
}
function colorchange(a) {
  var l1 = document.getElementById("liTabBtn1");
  var b1 = document.getElementById("tabBtn1");
  var l2 = document.getElementById("liTabBtn2");
  var b2 = document.getElementById("tabBtn2");
  var l3 = document.getElementById("liTabBtn3");
  var b3 = document.getElementById("tabBtn3");
  var l4 = document.getElementById("liTabBtn4");
  var b4 = document.getElementById("tabBtn4");
  if (a === 1) {
    l1.style.backgroundColor = "rgb(80, 77, 77)"
    b1.style.color = "white";
    l2.style.backgroundColor = "transparent"
    b2.style.color = "black";
    l3.style.backgroundColor = "transparent"
    b3.style.color = "black";
    l4.style.backgroundColor = "transparent"
    b4.style.color = "black";
  } else if (a === 2) {
    l1.style.backgroundColor = "transparent"
    b1.style.color = "black";
    l2.style.backgroundColor = "rgb(80, 77, 77)"
    b2.style.color = "white";
    l3.style.backgroundColor = "transparent"
    b3.style.color = "black";
    l4.style.backgroundColor = "transparent"
    b4.style.color = "black";
  } else if (a === 3) {
    l1.style.backgroundColor = "transparent"
    b1.style.color = "black";
    l2.style.backgroundColor = "transparent"
    b2.style.color = "black";
    l3.style.backgroundColor = "rgb(80, 77, 77)"
    b3.style.color = "white";
    l4.style.backgroundColor = "transparent"
    b4.style.color = "black";
  } else if (a === 4) {
    l1.style.backgroundColor = "transparent"
    b1.style.color = "black";
    l2.style.backgroundColor = "transparent"
    b2.style.color = "black";
    l3.style.backgroundColor = "transparent"
    b3.style.color = "black";
    l4.style.backgroundColor = "rgb(80, 77, 77)"
    b4.style.color = "white";
  }

}
function scrollToTop() {
  window.scrollTo(0, 0);
}

function notcompleted() {
  alert("You don't have access for this!!");
}