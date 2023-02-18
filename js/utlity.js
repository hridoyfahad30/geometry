function getInputValue(inputId) {
  const inputFild = document.getElementById(inputId);
  const inputString = inputFild.value;
  const inputNumber = parseFloat(inputString).toFixed(2);
  return inputNumber;
}

function getInnerText(elementtId) {
  const element = document.getElementById(elementtId);
  const elementInnerText = element.innerText;
  return elementInnerText;
}

function displayBlock(elementId) {
  const block = document.getElementById(elementId);
  block.style.display = "block";
}

function displayNone(elementId) {
  const none = document.getElementById(elementId);
  none.style.display = "none";
}

function clearInput(clearInputId) {
  const input = document.getElementById(clearInputId);
  input.value = "";
}

function randomBackground() {
  let colorLatter = "0123456789ABCDEF";
  let colorCode = "#";

  for (let i = 0; i < 6; i++) {
    colorCode += colorLatter[Math.floor(Math.random() * 16)];
  }
  return colorCode;
};

function tableDataGenerator(calculationName, calculation) {
  const areaCalculationContainer = document.getElementById(
    "calculationContainer"
  );
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td class="border px-2 py-2">${count}</td>
  <td class="border px-2 py-2">${getInnerText(calculationName)}</td>
  <td class="border px-4 py-2 m2Result text-base font-bold">${calculation + "cm²"}</td>
  <td class="border py-2"><button class="bg-blue-500 hover:bg-blue-700 mx-2 px-2 py-2 rounded-lg text-white text-base font-medium c2Tom2">Covert to m²</button></td>
  `;

  areaCalculationContainer.appendChild(tr);

  const resultc2Tom2 = document.getElementsByClassName("c2Tom2");

  for (const c2Tom2Button of resultc2Tom2) {
    c2Tom2Button.addEventListener('click', function(e){
      const m2 = cm2ToM2(calculation);
      
      const m2Result = document.getElementsByClassName('m2Result');
      for (const result of m2Result) {
        result.innerText = (m2 + 'm²');
        
      }
        
    })
  }
}

function cm2ToM2(cm2) {
  return cm2 / 10000;
}
