//create reference to container div
let containerDiv = document.querySelector("#container")


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
let counter = 0;

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
    rowDiv.style.width = `${w}vw`;
    rowDiv.style.height =  `${h}vh`;
    rowDiv.style.opacity = 1;
    columnDiv.appendChild(rowDiv);


    rowDiv.addEventListener("mouseenter", () => {
      rowDiv.style.backgroundColor = rgbRandomizer();
      rowDiv.style.transition = `background-color 0.1s ease`;
      //rowDiv.style.opacity += -0.1;
      //counter += 1;
      //console.log(counter);
    });

    rowDiv.addEventListener("mouseleave", () => {
      rowDiv.style.transition =  `background-color 1s ease`;
      rowDiv.style.backgroundColor = `aliceblue`;
      if (rowDiv.style.opacity > 0) {
        let opacity = parseFloat(rowDiv.style.opacity);
        rowDiv.style.opacity = `${opacity - 0.1}`;
      };
      //rowDiv.style.opacity = 1 ;
      
    });
  }
  containerDiv.appendChild(columnDiv);
  /*
  switch (counter) {
    case 1:
      rowDiv.style.opacity = 0.9 ;
    case 2:
      rowDiv.style.opacity = 0.8 ;
    case 3:
      rowDiv.style.opacity = 0.7 ;
    case 4:
      rowDiv.style.opacity = 0.6 ;
    case 5:
      rowDiv.style.opacity = 0.5 ;
    case 6:
      rowDiv.style.opacity = 0.4 ;
    case 7:
      rowDiv.style.opacity = 0.3 ;
    case 8:
      rowDiv.style.opacity = 0.2 ;
    case 9:
      rowDiv.style.opacity = 0.1 ;
      default:
        rowDiv.style.opacity = 0 ;
  }
*/
};
}
createGrid(gridSize);

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

//set a counter, as eventlistener for mouse leave is triggered, add 1 to the counter


//add a switch to counter up to 10, change the opacity with each case

