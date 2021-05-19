const body = document.querySelector("body");
userName = document.querySelector("#userName");
userPassword = document.querySelector("#userPassword");
text = document.querySelector("#text");
text2 = document.querySelector("#text2");
btn = document.querySelector("#btn");
output = document.querySelector("#output");

userName.onkeyup = () => {
  let isNumber;
  for (let i = 0; i < userName.value.length; i++) {
    if (Number(userName.value[i])) {
      isNumber = true;
    }
  }

  if (userName.value.length == 0) {
    text.textContent = "Enter Username:";
    text.classList.add("backColor");
    text.classList.remove("success");
    text.classList.remove("error");
  } else if (isNumber == true) {
    text.textContent = "Enter only text";
    text.classList.add("error");
    text.classList.remove("success");
  } else if (userName.value.length <= 5) {
    text.textContent = "Poor";
    text.classList.add("error");
    text.classList.remove("success");
  } else if (isNumber !== true) {
    text.textContent = "Excelllent";
    text.classList.add("success");
    text.classList.remove("error");
  }
};

userPassword.onkeyup = () => {
  if (userPassword.value.length == 0) {
    text2.textContent = "Enter Password:";
    text2.classList.add("backColor");
    text2.classList.remove("success");
    text2.classList.remove("error");
  } else if (userPassword.value.length <= 5) {
    text2.textContent = "Poor";
    text2.classList.add("error");
    text2.classList.remove("success");
  } else {
    text2.textContent = "Excelllent";
    text2.classList.add("success");
    text2.classList.remove("error");
  }
};

btn.onclick = () => {
  body.classList.add("green");
  output.textContent = "Submitted Successfully";
  text.classList.add("green");
  text2.classList.add("green");
  output.classList.add("output");
  btn.classList.add("green");
  userName.value = "";
  userPassword.value = "";
};
