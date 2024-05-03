//create reference to container div
let containerDiv = document.querySelector("#container")

/*
let testDiv = document.createElement("div");
testDiv.id = "row";
containerDiv.appendChild(testDiv);
*/

let gridSize = 16; //16 x 16 grid

//create 16 divs and append them horizontally 

//create a div to include the entire row of 16 horizontal divs

for (i = 0; i < 16; i++){
  let columnDiv = document.createElement(`div`);
  columnDiv.id = `column`

  for (n = 0; n < 16 ; n++){
    let rowDiv = document.createElement(`div`);
    rowDiv.id = `row`;
    columnDiv.appendChild(rowDiv);
  }
  containerDiv.appendChild(columnDiv);

}



//create 16 horizontal divs and append them vertically




for (n = 1; n < 16 ; n++){

}