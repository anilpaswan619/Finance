window.addEventListener("load", ()=> {
  const nameAccess = sessionStorage.getItem("nameItem");
  const mobileAccess = sessionStorage.getItem("mobileItem");
  const emailAccess = sessionStorage.getItem("emailItem");
  const solutionAccess = sessionStorage.getItem("solutionItem");
  const checkAccess = sessionStorage.getItem("checkItem");
  const fileAccess = sessionStorage.getItem("fileItem");

  document.getElementById("nameDisplay").innerHTML = nameAccess;
  document.getElementById("mobileDisplay").innerHTML = mobileAccess;
  document.getElementById("emailDisplay").innerHTML = emailAccess;
  document.getElementById("solutionDisplay").innerHTML = solutionAccess;
  document.getElementById("checkDisplay").innerHTML = checkAccess;
  document.getElementById("fileDisplay").innerHTML = fileAccess; 
});