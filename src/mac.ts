const commands: Fig.Generator = {
  script: ["mac", "commands"],
  postProcess: (output) => {
    return output.split("\n").map((command) => {
      return { name: command };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "mac",
  description: "My personal commands",
  subcommands: [
    {
      name: "open",
      description: "Used to open important files, folders and links",
      args: {
        name: "command",
        description: "Enter command",
        generators: commands,
      },
    },
    {
      name: "commands",
      description: "Used to show all commands available",
    },
  ],
};
export default completionSpec;