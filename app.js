
const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack =document.querySelector('.btn-back');
const checkboxpass=document.querySelector('.checkbox-pass')
const passwordInput = document.querySelector('.password')
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');


btnNext. onclick=(e)=>{

    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(()=>passwordInput.focus(),500);
    loginTitle.innerHTML='wellcome';
    userEmail.innerHTML= emailInput.value;


};

btnBack.onclick=(e)=>{

    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML='login';
    userEmail.innerHTML='please login to use the platform';
    emailInput.focus();
};

checkboxpass.onclick=()=>{
 if(checkboxpass.checked){
    passwordInput.type='text';


 }
 else{
    passwordInput.type='password';
 }

}