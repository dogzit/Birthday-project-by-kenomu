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
  {
    name: ["ujin", "uujee", "juujaa", "vjinxsvn_7", "anu-ujin", "anuka"],
    dob: "2009-08-01",
    password: "VjinX_Svn.7&bM12!",
    page: "ujin/ujin.html"
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
    document.getElementById("passwordDiv").classList.add("hidden");
    document.getElementById("secretMessageDiv").classList.remove("hidden");
  } else {
    alert("Wrong password!");
  }
}

function finalCheck() {
  const msg = document.getElementById("secretMessage").value.trim().toLowerCase();

  // Та хүсвэл secret мессеж бүр хэрэглэгч бүрд өөр байж болно
  const acceptedMessages = ["zoloo is the greatest"];

  if (acceptedMessages.includes(msg)) {
    window.location.href = currentUser.page;
  } else {
    alert("Incorrect secret message. Try again!");
  }
}
