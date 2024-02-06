document.getElementById("btn");
clcikButton.interHTML ="Clo";
const messageP=document.getElementById("btn");
messageP.interHTML="Hello!";
messageP.classList.add("special");
let pos=0;
const colorSquare=()=>{
    document.getElementById("square").classList.add("rainbow");
};

const moveDown = () =>{
    pos +=10;
    const root=document.querySelector(":root");
    root.computedStyleMap.setProperty("--square-top","200px");
}
const addCircle = () =>{
    console.log("adding a circle");
    /*get text from input box*/
    const color=document.getElementById("txt-color").value;
    const root=document.querySelector(":root");
    const playground= document.getElementById("circle-playground");
    playground.innerHTML+="<section class='circle></section>";
    /* const ball=document.createElement("section"); 
    ball.classList.add("circle");
    playground.append(ball);
    */
}
/*Humberger*/
const showHideNav = () => {
    document.getElementById("nav-item").classList.toggle("hide-small");
}
const changeP =(e) => {
    e.preventDefault();//don't go to another page
    document.getElementById("display").textContent= "Hello Portia";
}
const showMood= () =>{
    const color=document.getElementById
    
}
document.getElementById("txt-mood").onkeyup=showMood;
document.getElementById("btn-color").onclick=colorSquare;
document.getElementById("btn-move-down").onclick=moveDown;
document.getElementById("btn-add-circle").onclick=addCircle;