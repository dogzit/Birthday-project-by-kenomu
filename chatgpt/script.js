// Users' info – энэ хэсгийг өөрөө 15 хүний мэдээллээр дүүргэ
const users = [
  {
    name: "Zoloo",
    dob: "2009-07-10", // ← ийм ISO формат хэрэгтэй!
    password: "happy16",
    message: "Happy Birthday, Zoloo! You're awesome!"
  },
   {
    name: "Eku",
    dob: "2009-04-18", // ← ийм ISO формат хэрэгтэй!
    password: "Ekubaba*123",
    message: "Halooooo"
  },
];

let currentUser = null;

function checkUser() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  const found = users.find(user => user.name.toLowerCase() === name.toLowerCase() && user.dob === dob);

  if (found) {
    currentUser = found;
    document.getElementById("passwordDiv").classList.remove("hidden");
  } else {
    alert("No match found. Please check your name and birthdate.");
  }
}

function checkPassword() {
  const enteredPass = document.getElementById("password").value;

  if (currentUser && enteredPass === currentUser.password) {
    document.getElementById("greeting").innerText = currentUser.message;
    document.getElementById("greeting").classList.remove("hidden");
  } else {
    alert("Wrong password!");
  }
}
