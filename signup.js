let formField = document.querySelectorAll("form input");
const [userEmail, userName, userPassword,userPic] = formField;

console.log(userEmail, userName, userPassword);
let imgUrl;
const signUp = () => {
  event.preventDefault();
  if(userEmail.value !== "" && userName.value !== "" && userPassword.value !== ""){

    let obj = {
        signupEmail :userEmail.value,
        signupPassword: userPassword.value,
        user: userName.value,
        userProfile : imgUrl,

    }

    Swal.fire({
      title: "Registered Successfully",
      icon: "success"
    });
localStorage.setItem("userData",JSON.stringify(obj));
setTimeout(()=>{
window.location.href = './login.html'
        },2000)


  console.log(userEmail.value, userName.value, userPassword.value);
  }
};



const uploadImage = ()=>{
  let img = userPic.files[0];
  let fileRead = new FileReader();
  fileRead.onload = ()=>{
    imgUrl = fileRead.result
  }
  fileRead.readAsDataURL(img)
}