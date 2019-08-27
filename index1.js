var btn=document.getElementById("btnClicked");
function btnClicked(){
   alert("Welcome to our community");
    btn.removeEventListener("click", btnClicked);
}
btn.addEventListener("click" , btnClicked);