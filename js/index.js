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
input2.name = "userAge";

const input3 = makeEl("input");
input3.type = "text";
input3.name = "userDescription";

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

let h2 = makeEl("h2");
let h4 = makeEl("h4");
let p = makeEl("p");
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
// Add btn foward 50
const btnForward = document.getElementById("forward");
const btnBack = document.getElementById("back");
// Event listener btn forward

btnForward.addEventListener("click", () => foward());

function foward() {
  let numberFoward = 51;

  /// Creating My fetch Data to be display
  return (numberFoward += 50);
  {
  }
}

// Using POST TO ADD New monster to the dbd.json WORLKING
fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((data) => {
    const data50 = data.slice(0, foward());
    data50.forEach(renderInformation);
  });
// Here the data is coming as Array of Objects

function renderInformation(e) {
  const divsInfo = makeEl("div");
  let h2 = makeEl("h2");
  let h4 = makeEl("h4");
  let p = makeEl("p");
  h2.textContent = e.name;
  h4.textContent = e.age;
  p.textContent = e.description;
  divsInfo.append(h2, h4, p);
  monsterContainer.append(divsInfo);
}

function PostCreateMonster(e) {
  e.preventDefault();
  const name = e.target.username.value;
  const age = e.target.userAge.value;
  const description = e.target.userDescription.value;
  const dataObject = {
    name: name,
    age: age,
    description: description,
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(dataObject),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Success !");
      console.log(data);
    });
  form.reset();
}

//
form.addEventListener("submit", (e) => PostCreateMonster(e));
