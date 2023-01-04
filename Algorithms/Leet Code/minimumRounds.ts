/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks: number[]): number {
  let countMap: Map<number, number> = new Map();
  let round: number = 0;

  for (let task of tasks) {
    let count: number = countMap.get(task) ?? 0;
    countMap.set(task, count + 1);
  }

  for (let [, count] of countMap) {
    if (count === 1) {
      return -1;
    }

    round += Math.ceil(count / 3);
  }

  return round;
};
