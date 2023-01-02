/**
 * Description
 * @param s input string
 * @returns {Number} length of the longest substring
 * Aim :
 * Given a string s,
 * find the length of the longest substring without repeating characters.
 */

export default function lengthOfLongestSubstring(s: string): number {
  let result: number = 0,
    maxStr: string = "";

  for (let i: number = 0; i < s.length; i++) {
    let index: number = maxStr.indexOf(s[i]);

    if (index !== -1) {
      maxStr = maxStr.substring(index + 1);
    }
    maxStr += s[i];
    result = Math.max(result, maxStr.length);
  }
  return result;
}
