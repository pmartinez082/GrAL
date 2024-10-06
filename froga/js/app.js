
const izenaInput = document.getElementById("iz");
const abizenakInput = document.getElementById("ab");
const emaitza = document.getElementById("emaitza");
const form1 = document.getElementById("form1")


form1.addEventListener("submit", (event) =>{
    event.preventDefault();
    const izena = izenaInput.value;
    const abizenak = abizenakInput.value;
    emaitza.innerHTML="";
    emaitza.append("izena: "+ izena+", abizenak: "+abizenak);
    form1.reset();
    
});

