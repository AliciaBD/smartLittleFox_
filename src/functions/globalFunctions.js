//this is notworking,not using it
export function randomizeArray(arr) {
  let last = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    const r = Math.floor(Math.random() * last); //between 0-3
    const temp = arr[r];
    arr[r] = arr[last];
    arr[last] = temp;
    last--;
  }
  return arr;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function splitData(allData) {
  let totalSets = Math.ceil(allData.length / 4);
  let sets = [];
  for (let i = 1; i < totalSets + 1; i++) {
    sets[i - 1] = [];
    let indexref = i * 4;
    allData.map((item, index) => {
      if (index >= indexref - 4 && index < indexref) {
        sets[i - 1].push(item);
      }
    });
  }
  return sets;
}

export function createGroups(sets) {
  let groups = [];
  splitData(sets).map((set, index) =>
    groups.push({
      groupNumber: index,
      content: set,
      state: index === 0 ? "unlocked" : "locked",
      finished: false,
    })
  );
  return groups;
}

export function replaceHyphens(hyphenedText) {
  const str = hyphenedText.replace(/-/g, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
}
