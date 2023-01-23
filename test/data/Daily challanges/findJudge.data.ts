const data: {
  label?: string;
  input: {
    n: number;
    trust: number[][];
  };
  output: number;
}[] = [
  {
    // label: "",
    input: {
      n: 2,
      trust: [[1, 2]],
    },
    output: 2,
  },
  {
    // label: "",
    input: {
      n: 3,
      trust: [
        [1, 3],
        [2, 3],
      ],
    },
    output: 3,
  },
  {
    // label: "",
    input: {
      n: 3,
      trust: [
        [1, 3],
        [2, 3],
        [3, 1],
      ],
    },
    output: -1,
  },
];

export default data;
