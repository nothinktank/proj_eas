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
//append them vertically through CSS stylesheet

for (i = 0; i < 16; i++){
  let columnDiv = document.createElement(`div`);
  columnDiv.id = `column`;

  for (n = 0; n < 16 ; n++){
    let rowDiv = document.createElement(`div`);
    rowDiv.id = `row`;
    const w = 100/18;
    const h = 100/18;
    rowDiv.style.width = `${w}vw`;
    rowDiv.style.height =  `${h}vh`
    columnDiv.appendChild(rowDiv);
/*
    rowDiv.addEventListener("hover", () => {
      rowDiv.style.backgroundColor = `red`;
    })
    */
    rowDiv.addEventListener("mouseenter", () => {
      rowDiv.style.backgroundColor = `red`;
      console.log("mouse has entered");
    });

    rowDiv.addEventListener("mouseleave", () => {
      rowDiv.style.backgroundColor = ``;
      console.log("mouse has left");
    });
  }
  containerDiv.appendChild(columnDiv);
  
}

const gridBoxes = document.querySelectorAll(`row`);

containerDiv.addEventListener(`mouseenter`, () => {
  console.log("entrance recorded");
});

gridBoxes.forEach((gridBox) => {
  gridBox.addEventListener(`mouseenter`, () => {
  gridBox.style.backgroundColor = "red";
  console.log("mouse has entered");
  });
}); 

/*
btns.forEach((btn) => {
  btn.textContent = `this is button ${btn.id}`;
  btn.addEventListener("click", () => {
    alert(btn.id);
  });

});

*/



for (n = 1; n < 16 ; n++){

}