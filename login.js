let formField = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formField;

const data = JSON.parse(localStorage.getItem("userData"));

const login = () => {
  event.preventDefault();
  const {signupEmail, signupPassword} = data;

  if(signupEmail == loginEmail.value && signupPassword == loginPassword.value){
    Swal.fire({
        title: "Logged in Successfully congratulating",
        icon: "success"
      });


      setTimeout(()=>{
window.location.href = './dashboard.html';
      },2000)
  }else{
    Swal.fire({
      title: "invalid Username or Password",
      
      icon: "error"
    });
  }
  console.log(loginEmail.value, loginPassword.value);
  console.log(data);
};
