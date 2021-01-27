// Implementation and solution for input of fixed, determinate depth
const stadiumMap1 = [
  {
    standName: 'Stand A', areas: [
      {
        tierName: 'Tier 1', areas: [
          'Block 1',
          'Block 2',
          'Block 3',
          'Block 4'
        ]
      },
      {
        tierName: 'Tier 2', areas: [
          'Block 5',
          'Block 6'
        ]
      },
      {
        tierName: 'Tier 3', areas: [
          'Block 7',
          'Block 8',
          'Block 9'
        ]
      }
    ]
  },
  {
    standName: 'Stand B', areas: [
      {
        tierName: 'Tier 4', areas: [
          'Block 10'
        ]
      },
      {
        tierName: 'Tier 5', areas: [
          'Block 11',
          'Block 12',
          'Block 13'
        ]
      }
    ]
  },
];

const findNestedAreKnownDepth = (stadiumMap, soughtArea) => {
  let foundStand, foundTier;
  stadiumMap.forEach(stand => {
    stand.areas.forEach(tier => {
      if (tier.areas.includes(soughtArea)) {
        foundStand = stand.standName;
        foundTier = tier.tierName;
      }
    })
  });
  return [foundStand, foundTier];
};

const res1 = findNestedAreKnownDepth(stadiumMap1, 'Block 13'); // outputs [ 'Stand A', 'Tier 2' ]


// Implementation and solution if input / stadium map representation nested to an unknown depth:
const stadiumMap2 = [
  {
    name: 'Stand A', areas: [
      {
        name: 'Tier 1', areas: [
          { name: 'Block 1' },
          { name: 'Block 2' },
          { name: 'Block 3' },
          { name: 'Block 4' },
        ]
      },
      {
        name: 'Tier 2', areas: [
          { name: 'Block 5' },
          { name: 'Block 6' },
        ]
      },
      {
        name: 'Tier 3', areas: [
          { name: 'Block 7' },
          { name: 'Block 8', areas: [{ name: 'WC' }] },
          { name: 'Block 9' },
        ]
      },
    ]
  },
  {
    name: 'Stand B', areas: [
      {
        name: 'Tier 4', areas: [
          { name: 'Block 10' },
        ]
      },
      {
        name: 'Tier 5', areas: [
          { name: 'Block 11' },
          { name: 'Block 12' },
          { name: 'Block 13' },
        ]
      },
    ]
  },
]; // 

const findNestedAreaUnknownDepth = (nestedMap, areaName) => {
  let found = false;
  const recursiveSearch = (inputArr, foundAreas) => {
    for (let i = 0; i < inputArr.length; i++) {
      let el = inputArr[i];
      if (el.name == areaName) {
        found = true;
        break;
      }
      if (el.areas) {
        foundAreas.push(el.name);
        recursiveSearch(el.areas, foundAreas);
        if (found) break;
      }
    }
    if (found == false) foundAreas.pop();
    return foundAreas;
  };
  return recursiveSearch(nestedMap, [])
};

const resA = findNestedAreaUnknownDepth(stadiumMap2, 'Block 10'); // outputs [ 'Stand B', 'Tier 5' ]
console.log(resA);