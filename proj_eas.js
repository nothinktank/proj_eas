//create reference to container div
let containerDiv = document.querySelector("#container")

/*
let testDiv = document.createElement("div");
testDiv.id = "row";
containerDiv.appendChild(testDiv);
*/
//create a button that prompt the user to enter a number for the size of the grid
let button = document.querySelector(`.button`);



document.addEventListener("DOMContentLoaded",() => {
  button.addEventListener(`click`, () => {
  gridSize = prompt(`Please enter a grid size`, 16) ;
  console.log(`gridsize entered`);
  removeGrid();
  createGrid(Number(gridSize));

});
});

let gridSize = 18; //16 x 16 grid


//create 16 divs and append them horizontally 

//create a div to include the entire row of 16 horizontal divs
//append them vertically through CSS stylesheet
function createGrid(a){
  for (i = 0; i < a; i++){
  let columnDiv = document.createElement(`div`);
  columnDiv.className = `column`;
  

  for (n = 0; n < a ; n++){
    let rowDiv = document.createElement(`div`);
    rowDiv.className = `row`;
    const w = 100/(a + 2);
    const h = 100/(a + 2);
    rowDiv.style.border = `solid 1px darkgoldenrod`;
    rowDiv.style.backgroundColor = `aliceblue`;
    //rowDiv.style.width = `10px`;
    //rowDiv.style.height =  `10px`;
    rowDiv.style.width = `${w}vw`;
    rowDiv.style.height =  `${h}vh`;
    columnDiv.appendChild(rowDiv);


    rowDiv.addEventListener("mouseenter", () => {
      rowDiv.style.backgroundColor = rgbRandomizer();
      rowDiv.style.transition = `background-color 0.1s ease`;
      //console.log("mouse has entered");
    });

    rowDiv.addEventListener("mouseleave", () => {
      rowDiv.style.transition =  `background-color 1s ease`;
      rowDiv.style.backgroundColor = `aliceblue`;
      //console.log("mouse has left");
    });
  }
  containerDiv.appendChild(columnDiv);
  
}
}
createGrid(gridSize);
//let oldGrid = document.getElementsByClassName(`column`);


function removeGrid(){
  let gridBoxes = document.querySelectorAll(`.column`);
  console.log(gridBoxes);

  containerDiv.innerHTML = ``;

}

function rgbRandomizer() {
  let firstNumber = Math.floor(Math.random() * 255);
  let secondNumber = Math.floor(Math.random() * 255);
  let thirdNumber = Math.floor(Math.random() * 255);
  return `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`
  
}
console.log(rgbRandomizer());

/*
gridBoxes.forEach((gridBox) => {
  gridBox.addEventListener(`mouseenter`, () => {
  gridBox.style.backgroundColor = "red";
  //console.log("mouse has entered");
  });
}); 
*/
/*
btns.forEach((btn) => {
  btn.textContent = `this is button ${btn.id}`;
  btn.addEventListener("click", () => {
    alert(btn.id);
  });

});

*/

