window.addEventListener("load", ()=> {
  const nameAccess = sessionStorage.getItem("nameItem");
  const mobileAccess = sessionStorage.getItem("mobileItem");
  const emailAccess = sessionStorage.getItem("emailItem");
  const solutionAccess = sessionStorage.getItem("solutionItem");
  const loanAccess = sessionStorage.getItem("loanItem");
  const cardsAccess = sessionStorage.getItem("cardsItem");
  const emiAccess = sessionStorage.getItem("emiItem");
  const fileAccess = sessionStorage.getItem("fileItem");

  document.getElementById("nameDisplay").innerHTML = nameAccess;
  document.getElementById("mobileDisplay").innerHTML = mobileAccess;
  document.getElementById("emailDisplay").innerHTML = emailAccess;
  document.getElementById("solutionDisplay").innerHTML = solutionAccess;
  document.getElementById("loanDisplay").innerHTML = loanAccess;
  document.getElementById("cardsDisplay").innerHTML = cardsAccess;
  document.getElementById("emiDisplay").innerHTML = emiAccess;
  document.getElementById("fileDisplay").innerHTML = fileAccess; 
});