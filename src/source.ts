const completionSpec: Fig.Spec = {
  name: "source",
  description: "Source files in shell",
  subcommands: [
    {
      name: "terminal_proxy_off",
      description: "Used to turn off proxy in terminal",
    },
    {
      name: "terminal_proxy_on",
      description: "Used to turn on proxy in terminal",
    },
  ],
  args: {
    isVariadic: true,
    name: "File to source",
    template: "filepaths",
  },
};

export default completionSpec;
