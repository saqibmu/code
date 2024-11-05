// let btn = document.createElement('button');
// btn.innerHTML = 'Click Me!' ;

// btn.style.backgroundColor = 'red' ;
// btn.style.color = 'white'

// document.querySelector('body').prepend(btn);

let form = document.getElementById('form_user');

form.addEventListener('submit' , function(e) {
    let firstname = document.getElementById('firstname').value
    let fname_error = document.getElementById('fname_error');

    if(firstname === ''){
        fname_error.innerHTML = 'First Name is Required'
        e.preventDefault()
    }else{
        fname_error.innerHTML = ''
    }


    let lastname = document.getElementById('lastname').value;
    let lname_error = document.getElementById('lname_error');

    if(lastname === ''){
        lname_error.innerHTML = 'Last Name is Required';
        e.preventDefault();
    }else{
        fname_error.innerHTML = ''
    }

    let age= document.getElementById('age').value;
    let age_error = document.getElementById('age');

    if(age <=18 || age >=65){
        console.log('Age Error');
        age_error.innerHTML = 'Age should be between 18 to 65'
        e.preventDefault();
    }else{
        age_error.innerHTML = '';
    }

    let email = document.getElementById('email').value;
    let email_error = document.getElementById('email_error');

    if(!email.includes('@') || !email.includes('.') ){
        email_error.innerHTML = 'Kindly Enter Proper Email address';
        e.preventDefault();
    }else{
        email_error.innerHTML = ''
    }

    let password = document.getElementById('pwd').value;
    let pwd_error = document.getElementById('pwd_error');

    if(password.includes('123')){
        pwd_error.innerHTML = '' ;
        e.preventDefault();
    }else{
        pwd_error.innerHTML = 'password is incorrect';
    }

 



})

function checked(){
let Fresher = document.getElementById('fresher');
Fresher.checked = true;
}
function checked1() {
let Experienced = document.getElementById('experienced');
Experienced.checked = true;
}
