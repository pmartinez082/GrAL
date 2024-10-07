
const izenaInput = document.getElementById("iz");
const abizenakInput = document.getElementById("ab");
const emaitza = document.getElementById("emaitza");
const form1 = document.getElementById("form1")
let galdera = document.getElementById("galdera");
let hasiera = document.getElementById("hasiera");

form1.addEventListener("submit", (event) =>{
    event.preventDefault();
    const izena = izenaInput.value;
    const abizenak = abizenakInput.value;
    
    galdera.setAttribute("hidden", "hidden");
    emaitza.innerHTML="izena: "+ izena+", abizenak: "+abizenak;
    hasiera.removeAttribute("hidden");
    form1.reset();
    
});

function erakutsi(){
    hasiera.setAttribute("hidden", "hidden");
    galdera.removeAttribute("hidden");
    emaitza.innerHTML = "";

}



