let count = 0;

document.getElementById('blogButton').addEventListener('click', function(){
  window.location.href = "blog.html"
});

document
  .getElementById("triangleCalculate")
  .addEventListener("click", function () {
    count += 1;
    const triangleInput1 = parseFloat(getInputValue("triangleInput1"));

    if (isNaN(triangleInput1) || triangleInput1 < 0) {
      displayBlock("triangleErr");
      return;
    } else {
      displayNone("triangleErr");
    }

    const triangleInput2 = parseFloat(getInputValue("triangleInput2"));

    if (isNaN(triangleInput2) || triangleInput2 < 0) {
      displayBlock("triangleErr");
      return;
    } else {
      displayNone("triangleErr");
    }

    const triangleArea = parseFloat(
      (0.5 * (triangleInput1 * triangleInput2)).toFixed(2)
    );

    tableDataGenerator ('triangleH2', triangleArea);

    clearInput("triangleInput1");
    clearInput("triangleInput2");
  });

document
  .getElementById("rectangleCalculate")
  .addEventListener("click", function () {
    count += 1;
    const rectangleInput1 = parseFloat(getInputValue("rectangleInput1"));
    if (isNaN(rectangleInput1) || rectangleInput1 < 0) {
      displayBlock("rectangleErr");
      return;
    } else {
      displayNone("rectangleErr");
    }
    const rectangleInput2 = parseFloat(getInputValue("rectangleInput2"));
    if (isNaN(rectangleInput2) || rectangleInput2 < 0) {
      displayBlock("rectangleErr");
      return;
    } else {
      displayNone("rectangleErr");
    }
    const rectangleArea = parseFloat(
      (rectangleInput1 * rectangleInput2).toFixed(2)
    );
    
    tableDataGenerator ('rectangleH2', rectangleArea);

    clearInput("rectangleInput1");
    clearInput("rectangleInput2");
  });

document
  .getElementById("parallelogramCalculate")
  .addEventListener("click", function () {
    count += 1;
    const parallelogramInput1 = parseFloat(
      getInputValue("parallelogramInput1")
    );
    if (isNaN(parallelogramInput1) || parallelogramInput1 < 0) {
      displayBlock("parallelogramErr");
      return;
    } else {
      displayNone("parallelogramErr");
    }
    const parallelogramInput2 = parseFloat(
      getInputValue("parallelogramInput2")
    );
    if (isNaN(parallelogramInput2) || parallelogramInput2 < 0) {
      displayBlock("parallelogramErr");
      return;
    } else {
      displayNone("parallelogramErr");
    }
    const parallelogramArea = parseFloat(
      (parallelogramInput1 * parallelogramInput2).toFixed(2)
    );

    tableDataGenerator ('parallelogramH2', parallelogramArea);

    clearInput("parallelogramInput1");
    clearInput("parallelogramInput2");
  });

document
  .getElementById("rhombusCalculate")
  .addEventListener("click", function () {
    count += 1;
    const rhombusInput1 = parseFloat(getInputValue("rhombusInput1"));
    if (isNaN(rhombusInput1) || rhombusInput1 < 0) {
      displayBlock("rhombusErr");
      return;
    } else {
      displayNone("rhombusErr");
    }
    const rhombusInput2 = parseFloat(getInputValue("rhombusInput2"));
    if (isNaN(rhombusInput2) || rhombusInput2 < 0) {
      displayBlock("rhombusErr");
      return;
    } else {
      displayNone("rhombusErr");
    }
    const rhombusArea = parseFloat(
      (0.5 * rhombusInput1 * rhombusInput2).toFixed(2)
    );

    tableDataGenerator ('rhombusH2', rhombusArea);

    clearInput("rhombusInput1");
    clearInput("rhombusInput2");
  });

document
  .getElementById("pentagonCalculate")
  .addEventListener("click", function () {
    count += 1;
    const pentagonInput1 = parseFloat(getInputValue("pentagonInput1"));
    if (isNaN(pentagonInput1) || pentagonInput1 < 0) {
      displayBlock("pentagonErr");
      return;
    } else {
      displayNone("pentagonErr");
    }
    const pentagonInput2 = parseFloat(getInputValue("pentagonInput2"));
    if (isNaN(pentagonInput2) || pentagonInput2 < 0) {
      displayBlock("pentagonErr");
      return;
    } else {
      displayNone("pentagonErr");
    }
    const pentagonArea = parseFloat(
      (0.5 * pentagonInput1 * pentagonInput2).toFixed(2)
    );

    tableDataGenerator ('pentagonH2', pentagonArea);

    clearInput("pentagonInput1");
    clearInput("pentagonInput2");
  });

document
  .getElementById("ellipseCalculate")
  .addEventListener("click", function () {
    count += 1;
    const ellipseInput1 = parseFloat(getInputValue("ellipseInput1"));
    if (isNaN(ellipseInput1) || ellipseInput1 < 0) {
      displayBlock("ellipseErr");
      return;
    } else {
      displayNone("ellipseErr");
    }
    const ellipseInput2 = parseFloat(getInputValue("ellipseInput2"));
    if (isNaN(ellipseInput2) || ellipseInput2 < 0) {
      displayBlock("ellipseErr");
      return;
    } else {
      displayNone("ellipseErr");
    }
    const ellipseArea = parseFloat(
      (3.14 * ellipseInput1 * ellipseInput2).toFixed(2)
    );

    tableDataGenerator ('ellipseH2', ellipseArea);

    clearInput("ellipseInput1");
    clearInput("ellipseInput2");
  });

document
  .getElementById("triangleContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("triangleContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("triangleContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("triangleContainer");
    div.style.backgroundColor = "white";
  });
document
  .getElementById("rectangleContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("rectangleContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("rectangleContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("rectangleContainer");
    div.style.backgroundColor = "white";
  });
document
  .getElementById("parallelogramContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("parallelogramContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("parallelogramContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("parallelogramContainer");
    div.style.backgroundColor = "white";
  });
document
  .getElementById("rhombusContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("rhombusContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("rhombusContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("rhombusContainer");
    div.style.backgroundColor = "white";
  });
document
  .getElementById("pentagonContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("pentagonContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("pentagonContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("pentagonContainer");
    div.style.backgroundColor = "white";
  });
document
  .getElementById("ellipseContainer")
  .addEventListener("mouseover", function (e) {
    const div = document.getElementById("ellipseContainer");
    div.style.backgroundColor = randomBackground();
  });

document
  .getElementById("ellipseContainer")
  .addEventListener("mouseout", function (e) {
    const div = document.getElementById("ellipseContainer");
    div.style.backgroundColor = "white";
  });


