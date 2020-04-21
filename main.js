let eye_ball = document.getElementById("eye-ball");
                                                    
document.onmousemove = function () {
let x = event.clientX * 100 / window.innerWidth + "%";
let y = event.clientY * 100 / window.innerHeight + "%";

eye_ball.style.left = x;
eye_ball.style.top = y;
}

//Prepared By Peshraw_Saleh on instagram