function twoSum(nums: number[], target: number): (number | string)[] {
  let numsMap: Map<number, string> = new Map();

  for (let i in nums) {
    let diff = numsMap.get(target - nums[i]);

    if (diff) {
      return [diff, i]; // returns array containing string type elements
    }
    numsMap.set(nums[i], i);
  }

  return [-1, -1];
}

export default twoSum;
