export default function climbStairs(n: number): number {
  if (n < 1) return 1;

  let dp: number[] = [0, 1, 2];
  for (let i: number = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
