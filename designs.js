//Define Variables
const grid = document.querySelector("#pixelCanvas");

//create a function to make a grid
function makeGrid(event){ 
    //Erase grid on submit button click
    grid.innerHTML = "";
    //Take input from users
    let height = document.querySelector("#inputHeight").value;
    let width = document.querySelector("#inputWidth").value;
    event.preventDefault();
    
    // Fill cell with selected color
 	grid.addEventListener("click", function(event){
        const color = document.querySelector("#colorPicker").value;
        event.target.style.backgroundColor = color;
    });
    //when size is submitted by user call makeGrid function
    //draw grid
    for (let h = 1; h <= height; h++){
        let newHeight = document.createElement("tr");
        grid.appendChild(newHeight);
        for (let w = 1; w <= width; w++){
            let newWidth = document.createElement("td");
            newHeight.appendChild(newWidth);
        }
    }
}

document.getElementById("sizePicker").addEventListener("submit", makeGrid);