const data = JSON.parse(localStorage.getItem("userData"));

let userName = document.getElementById("name");
let imageProfile = document.getElementById('img')
const showData = () => {
  const { user,userProfile } = data;
  userName.innerText = user;
  imageProfile.src = userProfile;
};
showData();

const logout = () => {
  localStorage.clear();
  window.location.href = "./login.html";
};
