export default function longestCommonPrefix(strs: string[]): string {
  let longComPref: string = strs[0];

  for (const str of strs) {
    if (str === "") return "";

    let i: number = 0;
    while (str.charAt(i) && str.charAt(i) === longComPref.charAt(i)) i++;
    longComPref = longComPref.substring(0, i);
  }

  return longComPref;
}
