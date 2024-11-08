export default function convertRateToStarWidths(rate: number): number[] {
  let arr = [];
  rate = rate * 100; //eg 3.9 rating -----> 390 so we can dissect the width percentages in an array

  while (true) {
    if (rate < 100) {
      arr.push(rate);
      break;
    }
    rate = rate - 100;
    arr.push(100);
  }

  if (arr[arr.length - 1] < 30) {
    arr.pop();
  }
  return arr;
}
