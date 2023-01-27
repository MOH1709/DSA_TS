export default function majorityElement(nums: number[]): number {
  let count: number = 0;
  let result: number = 0;

  for (let num of nums) {
    if (count === 0) {
      result = num;
    }

    count += num === result ? 1 : -1;
  }

  return result;
}
