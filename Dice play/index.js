let randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
let path1='/images/dice'+randomNumber1+'.png'
document.querySelector(".img1").setAttribute("src",path1);

let randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
let path2='/images/dice'+randomNumber2+'.png'
document.querySelector(".img2").setAttribute("src",path2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerText="🚩Player 1 wins!"
    
}
else if (randomNumber1<randomNumber2) {
    document.querySelector(".container h1").innerText="Player 2 wins!🚩"
}
else  {
    document.querySelector(".container h1").innerText="Draw!"
}