//getting my html element
var myNodelist = document.getElementsByTagName("li");
var error = document.querySelector('.error');
const add = document.querySelector('.add');
const inputCon = document.querySelector('.form');
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
// var li = document.createElement("li");

// error message
var errortext = "Please input a Tittle";

// create close btn 
for(let i = 0; i < myNodelist.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
  
  var closes = document.getElementsByClassName("close");
  function myClose(){
    for (var j = 0; j < closes.length; j++) {
      closes[j].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  myClose();
  

//  click to add items
function letsAdd(){
  var inputMatch = inputCon.value;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var txtNode = document.createTextNode(inputMatch);
    var li = document.createElement("li");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(txtNode);
    li.appendChild(span);

    if (inputMatch === '') {
        error.textContent = errortext;
      } else {
        document.getElementById("mylist").appendChild(li);
        error.textContent = "";
      }
      inputCon.value = "";
      myClose();
}
// to add item using the keyboard
document.addEventListener('keydown', function(e){
  if(e.key == "Enter"){
    letsAdd();
  }
})
add.addEventListener('click', letsAdd);


