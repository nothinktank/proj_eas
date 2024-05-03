//create reference to container div
let containerDiv = document.querySelector("#container")

/*
let testDiv = document.createElement("div");
testDiv.id = "row";
containerDiv.appendChild(testDiv);
*/

let gridSize = 16; //16 x 16 grid

//create 16 divs and append them horizontally 
for (n = 0; n < 16 ; n++){
 let rowDiv = document.createElement(`div`);
 rowDiv.id = "row";
 containerDiv.appendChild(rowDiv);
}

//create 16 horizontal divs and append them vertically




for (n = 1; n < 16 ; n++){

}