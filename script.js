

function createDivs (num){
    const gridContainer = document.getElementById("container");
    let numOfDivs;


    for(let i = 0; i < num; i++) {
     const rowDiv = document.createElement("div");
     rowDiv.setAttribute("id", "rowDiv");
     gridContainer.appendChild(rowDiv);
     for(let s = 0; s < num; s++ ) {
        const blockDiv = document.createElement("div");
        blockDiv.setAttribute("id","block");
        rowDiv.appendChild(blockDiv);
     }

    }
};


function paintBlock () {
 const colorMode = document.querySelector("#rgb-color").checked;
 const blocks =document.querySelectorAll("#block");

if(colorMode){
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (event) => {
            event.target.style.Color = randomColor();
        
        })
    })
}

else {
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (event) => {
            event.target.style.Color = "black";
            console.log(enter);
})
    })

}
};



 createDivs(16);



 