const data: {
  label?: string;
  input: {
    l1: number[];
    l2: number[];
  };
  output: number[];
}[] = [
  {
    input: {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
    },
    output: [7, 0, 8],
  },
  {
    input: {
      l1: [0],
      l2: [0],
    },
    output: [0],
  },
  {
    input: {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
    },
    output: [8, 9, 9, 9, 0, 0, 0, 1],
  },
];

export default data;