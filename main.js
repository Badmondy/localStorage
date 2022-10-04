


const secretData = document.getElementById('loggedIn');
let userInterFace = document.getElementById('userInterFace');
let text = document.getElementById("text");
let welcomeText = document.getElementById('welcomeScreen');
let news = document.getElementById("news");

document.querySelector('.loginBtn').addEventListener("click", logIn);
document.querySelector('.checker').addEventListener("click", validUser);
document.addEventListener("keypress", keyPressed);

let userIsLoggedInAlready = localStorage.getItem("anvandare");



if (userIsLoggedInAlready == "Sara") {
  welcomeText.style.display = "none";
  userInterFace.style.display = "none";
  secretData.style.display = "flex";
  text.innerHTML = `Inloggad som: ${userIsLoggedInAlready} `;
  news.style.display = "flex";
}



function logIn() {
  welcomeText.style.display = "none";
  userInterFace.style.display = "flex";

}


function keyPressed(event) {
  if (event.key == "Enter") {
    validUser();
  }
}


function logOut() {
  localStorage.clear();
  window.location.reload();
}



function validUser() {
  let password = document.getElementById("losenord").value;
  let user = document.getElementById("namn").value;
  if (user == "Sara" && password == "qwe123") { 
    secretData.style.display = "flex";
    userInterFace.style.display = "none";
    text.innerHTML = `Inloggad som: ${user} `;
    localStorage.setItem("anvandare", "Sara");
    news.style.display = "flex";

  }

  else {
    alert("Du har skrivit fel lösenord/användarnamn!")
  }
}
