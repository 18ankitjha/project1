console.log('this is project');

const name= document.getElementById('name');
const namevalid= document.getElementById('namevalid');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;


// console.log(name,email,phone);
name.addEventListener('blur', ()=>{
    console.log('name is blurred');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        // namevalid.classList.remove('text-danger');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        // namevalid.classList.add('text-danger');
        validUser = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log('email is blurred');
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your Email is valid');
        email.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your Email is not valid');
        email.classList.add('is-invalid');
        validPhone = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log('phone is blurred');
    let regex = /^([0-9]){10}$/;
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your Phone is valid');
        phone.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your Phone is not valid');
        phone.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    //submit your form here
    if(validEmail && validUser && validPhone){
       

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }
})