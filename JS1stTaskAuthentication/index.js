var DOMSTRINGS = (function(){
var DomName = document.getElementById('name');
var DomContact = document.getElementById('contact');
var DomEmail = document.getElementById('email');
var DomPassword = document.getElementById('password');
var DomConfirmPassword = document.getElementById('c-password');
var DomCheckAccept = document.getElementById('accept-check');
var DomChecklabel = document.getElementById('checklabel');
var DomEyeOpener = document.getElementById('eyeOpener');
var DomSignupButton = document.getElementById('signup');

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
var DomNameError = document.getElementById('nameerror');
var DomEmailError = document.getElementById('emailerror');
var DomContactError = document.getElementById('contacterror');
var DomPasswordError = document.getElementById('passworderror');
//Check icons
var isitEmail = false;
var isitPassword = false;
var isitChecked = false;
   
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
      var regEmail = /^[a-zA-Z0-9]+@(gmail|facebook|yahoo)\.com/;
      var isEmail =  regEmail.test(DOMSTRINGS.email.value);
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
   if(DOMSTRINGS.password.value === "" || DOMSTRINGS.cpassword.value != DOMSTRINGS.password.value ){
      DomPasswordError.style.display="block";
   }

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

