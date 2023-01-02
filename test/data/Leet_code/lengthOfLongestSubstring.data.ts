const data: {
  label?: string;
  input: {
    s: string;
  };
  output: number;
}[] = [
  {
    input: {
      s: "abcabcbb",
    },
    output: 3,
  },
  {
    input: {
      s: "bbbbb",
    },
    output: 1,
  },
  {
    input: {
      s: "pwwkew",
    },
    output: 3,
  },
  {
    input: {
      s: "dvdf",
    },
    output: 3,
  },
  {
    input: {
      s: " ",
    },
    output: 1,
  },
];

export default data;
