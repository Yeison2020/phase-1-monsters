const makeEl = (e) => document.createElement(e);
const BASE_URL = "http://localhost:3000/monsters";
//------Create My Elements
//Form
const labelName = makeEl("label");
// labelName.textContent = "Name";
// labelAge.textContent = "Age";
// labelDescription.textContent = "Description";
const labelAge = makeEl("label");
const labelDescription = makeEl("label");
const form = makeEl("form");
form.id = "fom-Create";
const input1 = makeEl("input");
input1.type = "text";
input1.name = "username";

const input2 = makeEl("input");
input2.type = "text";
input2.name = "username";

const input3 = makeEl("input");
input3.type = "text";
input3.name = "username";

// Button =
const btnSubmit = makeEl("input");
btnSubmit.type = "submit";
btnSubmit.name = "Create";

/// Body Of the text display
//Labels
labelName.innerText = " Name: ";
labelAge.innerText = " Age: ";
labelDescription.innerText = " Description: ";
//----------------------------------------

const h2 = makeEl("h2");
const h4 = makeEl("h4");
const p = makeEl("p");
// ------Adding to the DOM

form.append(
  labelName,
  input1,
  labelAge,
  input2,
  labelDescription,
  input3,
  btnSubmit
);
let divParent = document.getElementById("create-monster");
divParent.append(form);

// Monster Container
const monsterContainer = document.getElementById("monster-container");
/// Creating My fetch Data to be display
fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((data) => renderInformation(data));
// Here the data is coming as Array of Objects

function renderInformation(data) {
  const data50 = data;
  console.log(data50);
  const divsInfo = makeEl("div");

  for (let e = 0; e < data50.length; e++) {
    h2.textContent = data50[e].name;
    h4.textContent = data50[e].age;
    p.textContent = data50[e].description;
    divsInfo.append(h2, h4, p);
  }
  monsterContainer.append(divsInfo);
}

// console.log(data.slice(0, 51));
