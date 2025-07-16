// Хэрэглэгчдийн мэдээлэл
const users = [
  {
    name: ["zoloo", "kenomu", "zolbayar"],
    dob: "2009-07-10",
    password: "Kenomu*123",
    page: "zoloo/zoloo.html"
  },
  {
    name: ["eku", "egshiglen", "ekustein"],
    dob: "2009-04-18",
    password: "Ekubaba*123",
    page: "eku/eku.html"
  },
];

let currentUser = null;

function checkUser() {
  const inputName = document.getElementById("name").value.trim().toLowerCase();
  const inputDob = document.getElementById("dob").value;

  const found = users.find(user =>
    user.name.some(n => n.toLowerCase() === inputName) &&
    user.dob === inputDob
  );

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
    window.location.href = currentUser.page;
  } else {
    alert("Wrong password!");
  }
}
