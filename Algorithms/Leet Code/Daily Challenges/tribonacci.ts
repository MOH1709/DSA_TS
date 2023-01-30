export default function tribonacci(n: number): number {
  let dp: number[] = [0, 1, 1];

  for (let num: number = 3; num <= n; num++) {
    dp[num % 3] = dp[0] + dp[1] + dp[2];
  }

  return dp[n % 3];
}
