let totalCost = 0;
let divElement = document.getElementById("result");

function calculateMinCost() {
  //your code here
       let inputValue = document.getElementById("rope-lengths").value;
    inputValue = inputValue.split(",").map(str => parseInt(str.trim()));
    console.log(inputValue);
  //your code here
   const sortedArr = inputValue.slice().sort((a, b) => a - b);
    

    while (sortedArr.length > 1) {
        const min1 = sortedArr.shift();
        const min2 = sortedArr.shift();
        const cost = min1 + min2;
        totalCost += cost;
        sortedArr.push(cost);
        sortedArr.sort((a, b) => a - b);
    }

    
    divElement.innerText = totalCost;
  
}  