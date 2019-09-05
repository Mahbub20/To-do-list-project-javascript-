var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li");//create list element
    li.appendChild(document.createTextNode(input.value));// takes text from input field and make list text
    ul.appendChild(li);// add li to ul
    input.value = "";//Reset input field to take another text input from user

    function crossout(){
        li.classList.toggle("done");
     }

     li.addEventListener("click",crossout);//when complete any to-dos then its go green

     var dbbtn = document.createElement("button");
     dbbtn.appendChild(document.createTextNode("X"));
     li.appendChild(dbbtn);
     dbbtn.addEventListener("click",deleteListItem);

     function deleteListItem(){
         li.classList.add("delete");
     }

}

function addListAfterClick(){
    //console.log(input.value.length);
    //console.log(input.value);
    //debugger;
    if(inputLength()>0)createListElement();
}

function addListAfterKeyPress(event){
    if(inputLength()>0 && event.which==13)createListElement();
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);