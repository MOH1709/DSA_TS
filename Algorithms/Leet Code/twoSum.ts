function twoSum(nums: number[], target: number): (number | string)[] {
  let numsMap = new Map();

  for (let i in nums) {
    let diff = target - nums[i];

    if (numsMap.has(diff)) {
      return [numsMap.get(diff), i]; // returns array containing string type elements
    }
    numsMap.set(nums[i], i);
  }

  return [-1, -1];
}

export default twoSum;
