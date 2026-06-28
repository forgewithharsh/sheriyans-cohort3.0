// Local Storage

function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem('reg-users') || '[]')
}

function saveRegisteredUsers(arr){
  localStorage.setItem('reg-users', JSON.stringify(arr))
}

// Login and Register

function showAuthScreen(scr) {
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");

  if (scr === "login") {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
  } else {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
  }
}

function doRegister(){
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value;

  if(!username || !password){
    alert('Please fill all the fields.')
    return
  }

  const users = getRegisteredUsers();

  if(users.find(user => user.username === username)){
    alert("Username already taken");
    return;
  }

  users.push({
    username,
    password
  })

   saveRegisteredUsers(users);

  alert("Registered Successfully!");

  document.getElementById("register-username").value = "";
  document.getElementById("register-password").value = "";

  showAuthScreen("login");


}

function doLogin() {
   const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  if (!username || !password) {
    alert('Please fill all the fields.')
    return;
  }




}
