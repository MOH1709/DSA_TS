const data: {
  label?: string;
  input: number[][];
  output: number[];
}[] = [
  {
    input: [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ],
    output: [1, 1, 2, 3, 4, 4, 5, 6],
  },
  {
    input: [],
    output: [],
  },
  {
    input: [[]],
    output: [],
  },
];

export default data;
