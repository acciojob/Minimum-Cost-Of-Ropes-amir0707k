function calculateMinCost() {
  //your code here
      const inputElement = document.getElementById("rope-lengths").value;
    const sortedArr = inputElement.split(",").map((val) => parseInt(val.trim()));
    sortedArr.sort((a,b) => a-b);
    let totalCost = 0;
    while(sortedArr.length > 1){
      const min1 = sortedArr.shift();
      const min2 = sortedArr.shift();
      const cost = min1 + min2;
      totalCost += cost;
      sortedArr.push(cost);
      sortedArr.sort((a,b) => a-b);
    }
      document.getElementById("result").innerText = totalCost;
} 