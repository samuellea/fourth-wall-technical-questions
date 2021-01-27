const seatingPlan = [
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1]
]

// with reduce and for loop
const findAdjacentSeatsLoop = (ticketCount, seatPlan) => {
  return seatPlan.reduce((matchingRows, row, index) => {
    let match = [];
    let matching = false;
    for (let i = 0; i < row.length; i++) {
      if (row[i] == 1) match.push(1);
      if (row[i] == 0) match = [];
      if (match.length == ticketCount) matching = true;
    };
    if (matching == true) matchingRows.push(index + 1);
    return matchingRows;
  }, []);
};

findAdjacentSeatsLoop(3, seatingPlan); // outputs [ 2, 3 ]

// with reduce and regex
const findAdjacentSeatsRegex = (ticketCount, seatPlan) => seatPlan.reduce((acc, row, index) => {
  let regex = new RegExp(`1{${ticketCount}}`, 'i');
  if (regex.test(row.join(''))) acc.push(index + 1);
  return acc;
}, []);

findAdjacentSeatsRegex(3, seatingPlan); // outputs [ 2, 3 ]