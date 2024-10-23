const getColor=()=>{
    const RandomNumber= Math.floor(Math.random()*16777215);    //16777215
    const RandomCode= "#"+RandomNumber.toString(16);
    document.body.style.backgroundColor=RandomCode;
    document.getElementById("color-code").innerText=RandomCode;
    navigator.clipboard.writeText(RandomCode);  // this method to code code on clipbord autometically
}
//event coil
document.getElementById("btn").addEventListener("click",getColor)    //click is a lessonor  
//imit coil
getColor();