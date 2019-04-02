var info= document.getElementById("info");
var input= document.getElementById("input");

var btn =  document.getElementById("btn");
var ul1= document.querySelector('.ul1');

btn.addEventListener('click',addItem);
input.addEventListener('keyup',addItem2);


function focusOnMyInputBox() {
  input.focus();
}

function addItem(){
if(input.value.trim()!==''){
info.textContent='';


newItem= document.createElement('li');
newText= document.createTextNode(input.value);



newItem.appendChild(newText);
newItem.className='items';
ul1.appendChild(newItem);
input.value='';
input.focus();
info.textContent=input2;
}
else{
info.textContent='Please Enter an Item....';
input.focus();

}

}



function addItem2(e){
if(input.value.trim()!==''){
info.textContent='';
if(e.code==='Enter'){


newItem= document.createElement('li');
newText= document.createTextNode(input.value);



newItem.appendChild(newText);
newItem.className='items';
ul1.appendChild(newItem);
input.value='';
input.focus();
}
}

else{
info.textContent='Please Enter an Item....';
input.focus();
}

}
