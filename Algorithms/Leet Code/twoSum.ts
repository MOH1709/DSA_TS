function twoSum(nums: number[], target: number): number[] {
  let numsMap: Map<number, string> = new Map();

  for (let i in nums) {
    let diff = numsMap.get(target - nums[i]);

    if (diff !== undefined) {
      return [+diff, +i];
    }
    numsMap.set(nums[i], i);
  }

  return [-1, -1];
}

export default twoSum;
