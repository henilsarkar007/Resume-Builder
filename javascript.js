function addNewAQField(){
   // console.log("new function ");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqob = document.getElementById("aq");
    let aqAddButtonob = document.getElementById("aqAddButton");

    aqob.insertBefore(newNode, aqAddButtonob);
}

function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weob = document.getElementById("we");
    let weAddButtonob = document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonob);

}