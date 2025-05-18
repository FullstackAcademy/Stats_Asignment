function playWithNumbers() {
  //grab the ticket from the slot
  let ticket = document.getElementById("numberBox").value;
  //turn the ticket into number blocks
  let blocks = ticket.split(",").map((block) => Number(block.trim()));

  //check for bad numbers
  if (blocks.some((block) => isNaN(block))) {
    document.getElementById("results").innerHTML =
      "Oops! You have entered a non-number. Please try again.";
    return;
  }

  //Count blocks with getLength
  let count = getLength(blocks);

  let total = getSum(blocks);

  let mean = getMean(blocks);

  let min = getMin(blocks);

  let max = getMax(blocks);

  let range = getRange(blocks);

  let evens = getEvens(blocks);

  let odds = getOdds(blocks);

  //Display the results
  document.getElementById(
    "results"
  ).innerHTML = `You have ${count} blocks!<br>Total: ${total}<br>Average: ${mean}<br>Minimum: ${min}<br>Maximum: ${max}<br>Range: ${range}<br>Even Numbers: ${evens.join(
    ","
  )}<br>Odd Numbers: ${odds.join(",")}`;
  //Display the results
}

function getLength(blocks) {
  return blocks.length; //counts blocks in the row
}

function getSum(blocks) {
  //start with empty basket
  let basket = 0;
  // Use a for loop to pick each block
  // Add block’s number to basket
  // Return basket total
  for (let i = 0; i < blocks.length; i++) {
    basket = basket + blocks[i];
  }
  return basket;
}

function getMean(blocks) {
  //getMean returns the correct value by calling getSum and getLength
  let sum = getSum(blocks);
  let length = getLength(blocks);
  let average = sum / length;
  return average;
}

function getMin(blocks) {
  let smallest = blocks[0];
  for (let i = 1; i < blocks.length; i++) {
    if (blocks[i] < smallest) {
      smallest = blocks[i];
    }
  }
  return smallest;
}

function getMax(blocks) {
  let largest = blocks[0];
  for (let i = 1; i < blocks.length; i++) {
    if (blocks[i] > largest) {
      largest = blocks[i];
    }
  }
  return largest;
}

function getRange(blocks) {
  let min = getMin(blocks);
  let max = getMax(blocks);
  let range = max - min;
  return range;
}

// Primary purpose: Return an array.Conditionally push to the output array. Return the correct value (all even numbers).
function getEvens(blocks) {
  let evens = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] % 2 === 0) {
      evens.push(blocks[i]);
    }
  }
  return evens;
}

function getOdds(blocks) {
  let odds = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] % 2 !== 0) {
      odds.push(blocks[i]);
    }
  }
  return odds;
}
