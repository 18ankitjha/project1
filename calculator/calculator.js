let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerHTML;
        if (buttonText=='X') {
            buttonText='*';
            screenvalue+=buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='C'){
            screen.value="";
        }
        else if (buttonText=='=') {
            screen.value=eval(screenvalue)
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        
    })
}