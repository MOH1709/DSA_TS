const data: {
  label?: string;
  input: {
    nums: number[];
    target: number;
  };
  output: number[];
}[] = [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    output: [0, 1],
  },
  {
    input: {
      nums: [3, 2, 4],
      target: 6,
    },
    output: [1, 2],
  },
  {
    input: {
      nums: [3, 3],
      target: 6,
    },
    output: [0, 1],
  },
];

export default data;
