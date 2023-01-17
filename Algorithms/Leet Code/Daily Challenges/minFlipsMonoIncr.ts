/**
 * @param {string} str
 * @return {number}
 */
export default function minFlipsMonoIncr(str: string): number {
  let onesAlreadySeen: number = 0;
  let res: number = 0;

  for (let char of str) {
    if (char === "0") {
      res = Math.min(
        res + 1, // flip this '0' to '1'
        onesAlreadySeen // flip all '1' we've seen before to '0'
      );
    } else {
      onesAlreadySeen++; // char is '1'
    }
  }

  return res;
}
