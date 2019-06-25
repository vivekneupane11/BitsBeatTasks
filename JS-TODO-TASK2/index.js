(function(){
  
    var list = document.getElementById("list");
        form = document.getElementById("form");
        item = document.getElementById("item");
        addButton = document.getElementById("addButton");

    addButton.addEventListener('click',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(event){
      var listevent = event.target;
      console.log(listevent.parentNode);
      if(listevent.classList.contains('checked')){
        listevent.parentNode.removeChild(listevent);
      } else {
        listevent.classList.add('checked');
      }
      store();
    },false)
    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '<li>Our first task</li>'+
                         '<li>Our second task</li>'+
                         '<li>Our third task</li>';
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
   })();