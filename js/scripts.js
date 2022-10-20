function getInputs(event) {
  event.preventDefault();
  const side1 = parseInt(document.getElementById("input1").value);
  const side2 = parseInt(document.getElementById("input2").value);
  const side3 = parseInt(document.getElementById("input3").value);

  let result;
  console.log("side1: " + side1);
  console.log("side2: " + side2);
  console.log("side3: " + side3);

  if (side1+side2<=side3 || side2+side3<=side1 || side1+side3<=side2) {
    result = "Your triangle is not a triangle"
  } else if (side1!==side2 && side2!==side3 && side1!==side3) {
    result = "Your triangle is a scalene triangle"
  } else if (side1===side2 && side2===side3 && side1===side3) {
    result = "Your triangle is an equilateral triangle";
  } else if (side1===side2 || side2===side3 || side1===side3) {
    result = "Your triangle is an isoceles triangle";
  }

  // else {
  //   document.getElementById("error").removeAttribute("class");
  // }

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("tracker");
  form.addEventListener("submit", getInputs);
})