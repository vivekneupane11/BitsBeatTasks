var DomName = document.getElementById('name');
var DomContact = document.getElementById('contact');
var DomEmail = document.getElementById('email');
var DomPassword = document.getElementById('password');
var DomConfirmPassword = document.getElementById('c-password');
var DomCheckAccept = document.getElementById('accept-check');
var DomChecklabel = document.getElementById('checklabel');
var DomEyeOpener = document.getElementById('eyeOpener');
var DomSignupButton = document.getElementById('signup');
//iconsdomerrors
var DomNameError = document.getElementById('nameerror');
var DomEmailError = document.getElementById('emailerror');
var DomContactError = document.getElementById('contacterror');
var DomPasswordError = document.getElementById('passworderror');
//Check icons
var isitEmail = false;
var isitPassword = false;
var isitChecked = false;
   
DomName.addEventListener('input',function(){  
      DomNameError.style.display = "none";
      if(DomName.value === ""){
         DomNameError.style.display="block";
      }

});
DomContact.addEventListener('input',function(){
   DomContactError.style.display="none";
     if(DomContact.value === "" ){
        DomContactError.style.display="block";
     }
});
DomEmail.addEventListener('input',function(){
      var regEmail = /^[a-zA-Z0-9]+@(gmail|facebook|yahoo)\.com/;
      var isEmail =  regEmail.test(DomEmail.value);
      if(isEmail ){
         DomEmailError.style.display="none";
         isitEmail = true;
      }
      else{
         DomEmailError.style.display="block";
         isitEmail=false;
      } 
      Validator();                                                                
});
DomPassword.addEventListener('input',function(){
   DomPasswordError.style.display="none";
   if(DomPassword.value === "" || DomConfirmPassword.value != DomPassword.value ){
      DomPasswordError.style.display="block";
   }

});
DomConfirmPassword.addEventListener('input',function(){
   DomPasswordError.style.display="none";
   if(DomConfirmPassword.value != DomPassword.value  ){
      DomPasswordError.style.display="block";
      isitPassword = false;
   }
   else{
      isitPassword= true;
   }
   Validator();
});

DomEyeOpener.addEventListener('click',function(){
   if(DomPassword.type == "text"){
      DomPassword.type = "password";
   }
   else   DomPassword.type = "text";
 
});

DomChecklabel.addEventListener('click',function(){
  if(DomCheckAccept.checked){
   isitChecked = false;
  }
  else isitChecked = true;
 
     
      Validator(); 

});


function Validator(){
   if(isitChecked && isitEmail && isitPassword){
      DomSignupButton.disabled = false;
      DomSignupButton.style.backgroundColor= "#00e600";
       DomSignupButton.style.cursor = "pointer";
     
   
      }
      else{
         DomSignupButton.disabled = true;
         DomSignupButton.style.backgroundColor= "red";
          DomSignupButton.style.cursor = "not-allowed";
      }
}