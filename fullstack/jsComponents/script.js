var icon = document.querySelector("#icon"); 
icon.onclick = () => { 
    document.body.classList.toggle("dark-mode");
     

if (document.body.classList.contains("dark-mode")) {
    icon.src = "./images/day-mode.png";

} else {
    icon.src = "./images/moon.png"
}

;}