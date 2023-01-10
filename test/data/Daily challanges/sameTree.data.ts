const data: {
  label?: string;
  input: {
    p: number[];
    q: number[];
  };
  output: boolean;
}[] = [
  {
    // label: "",
    input: {
      p: [1, 2, 3],
      q: [1, 2, 3],
    },
    output: true,
  },
  {
    // label: "",
    input: {
      p: [1, 2],
      q: [1, 0, 2],
    },
    output: false,
  },
  {
    // label: "",
    input: {
      p: [1, 2, 1],
      q: [1, 1, 2],
    },
    output: false,
  },
];

export default data;
