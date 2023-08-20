let inputValue = document.getElementById("rope-lengths");

function calculateMinCost() {
  //your code here
   const sortedArr = inputValue.slice().sort((a, b) => a - b);
    let totalCost = 0;

    while (sortedArr.length > 1) {
        const min1 = sortedArr.shift();
        const min2 = sortedArr.shift();
        const cost = min1 + min2;
        totalCost += cost;
        sortedArr.push(cost);
        sortedArr.sort((a, b) => a - b);
    }

    return totalCost;
  
  
}  
const arr = [4, 2, 7, 6, 9];