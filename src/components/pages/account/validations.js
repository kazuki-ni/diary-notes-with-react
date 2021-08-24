const checkNull = (form_list) => {
  let isNotNull = true;
  form_list.forEach( elem => {
    const val = document.sign_form[elem].value;
    const node = document.getElementsByClassName(elem)[0];
    if ( val === "" ) {
      node.style.display = "block";
      node.innerText = "Invalid (Empty)";
      isNotNull = false;
    } else {
      console.log(val, node, elem)
      // node.style.display = "none";
      // node.innerText = "";
    }
  })
  return isNotNull;
}

const comparePassword = (_) => {
  const pwd = document.sign_form.pwd.value;
  const co_pwd = document.sign_form.co_pwd.value;
  const co_pwd_node = document.getElementsByClassName('co_pwd')[0];

  if ( pwd === co_pwd ) {
    co_pwd_node.style.display = "none";
    // co_pwd_node.innerText = "Passwords match.";
    console.log("The password and confirm password fields match.");
    return true;
  } else {
    co_pwd_node.style.display = "block";
    co_pwd_node.innerText = "Passwords do not match.";
    return false;
  }
}

const signUpFormList = ["name", "email", "id", "pwd", "co_pwd"];
const logInFormList = ["email", "id", "pwd"];
const signUpValidations =	[ checkNull, comparePassword ];
const logInValidations =	[ checkNull ];

const validateFormData = (signup_login) => {
  let form_list, validation_list;
  switch (signup_login) {
    case "signup":
      form_list = signUpFormList;
      validation_list = signUpValidations;
      break;
    case "login":
      form_list = logInFormList;
      validation_list = logInValidations;
      break;
    default: ;
  }
  const isValid = validation_list.every( func => func(form_list) );
  if (isValid) {
    const formDict = {};
    form_list.forEach( elem => formDict[elem] = document.sign_form[elem].value );
    return formDict;
  }
  return false;
}

export {
  validateFormData
};