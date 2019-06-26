let DOMSTRINGS = (function(){
let DomName = document.getElementById('name');
let DomContact = document.getElementById('contact');
let DomEmail = document.getElementById('email');
let DomPassword = document.getElementById('password');
let DomConfirmPassword = document.getElementById('c-password');
let DomCheckAccept = document.getElementById('accept-check');
let DomChecklabel = document.getElementById('checklabel');
let DomEyeOpener = document.getElementById('eyeOpener');
let DomSignupButton = document.getElementById('signup');

return {
	name: DomName,
	contact:DomContact,
	email:DomEmail,
	password:DomPassword,
	cpassword:DomConfirmPassword,
	checkaccept:DomCheckAccept,
	checklabel : DomChecklabel,
	eyeopener: DomEyeOpener,
	signup:DomSignupButton
	
}

})();
//iconsdomerrors
let DomNameError = document.getElementById('nameerror');
let DomEmailError = document.getElementById('emailerror');
let DomContactError = document.getElementById('contacterror');
let DomPasswordError = document.getElementById('passworderror');
//Check icons
let isitEmail = false;
let isitPassword = false;
let isitChecked = false;
   
DOMSTRINGS.name.addEventListener('input',function(){  
      DomNameError.style.display = "none";
      if(DOMSTRINGS.name.value === ""){
         DomNameError.style.display="block";
      }

});
DOMSTRINGS.contact.addEventListener('input',function(){
   DomContactError.style.display="none";
     if(DOMSTRINGS.contact.value === "" ){
        DomContactError.style.display="block";
     }
});
DOMSTRINGS.email.addEventListener('input',function(){
      let regEmail = /^[a-zA-Z0-9]+@(gmail|facebook|yahoo)\.com/;
      let isEmail =  regEmail.test(DOMSTRINGS.email.value);
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
DOMSTRINGS.password.addEventListener('input',function(){
   DomPasswordError.style.display="none";
   if(DOMSTRINGS.cpassword.value != DOMSTRINGS.password.value || DOMSTRINGS.cpassword.value === ""  ){
      DomPasswordError.style.display="block";
      isitPassword = false;
   }
   else{
      isitPassword= true;
   }
   Validator();

});
DOMSTRINGS.cpassword.addEventListener('input',function(){
   DomPasswordError.style.display="none";
   if(DOMSTRINGS.cpassword.value != DOMSTRINGS.password.value || DOMSTRINGS.cpassword.value === ""  ){
      DomPasswordError.style.display="block";
      isitPassword = false;
   }
   else{
      isitPassword= true;
   }
   Validator();
});
DOMSTRINGS.eyeopener.addEventListener('click',function(){
   if(DOMSTRINGS.password.type == "text"){
      DOMSTRINGS.password.type = "password";
   }
   else   DOMSTRINGS.password.type = "text";
 
});

DOMSTRINGS.checklabel.addEventListener('click',function(){
  if(DOMSTRINGS.checkaccept.checked){
   isitChecked = false;
   document.getElementById('checkicons').style.color = "#00e600";
  }
  else isitChecked = true;
 
     
      Validator(); 

});


function Validator(){
   if(isitChecked && isitEmail && isitPassword){
      DOMSTRINGS.signup.disabled = false;
      DOMSTRINGS.signup.style.backgroundColor= "#00e600";
      DOMSTRINGS.signup.style.cursor = "pointer";
     
   
      }
      else{
         DOMSTRINGS.signup.disabled = true;
         DOMSTRINGS.signup.style.backgroundColor= "red";
         DOMSTRINGS.signup.style.cursor = "not-allowed";
      }
}

