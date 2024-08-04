const commands: Fig.Generator = {
  script: ["mac", "commands"],
  postProcess: (output) => {
    return output.split("\n").map((command) => {
      return { name: command };
    });
  },
};

const commonWifi: Fig.Generator = {
  script: ["mac", "common_wifi"],
  postProcess: (output) => {
    return output.split("\n").map((wifiname) => {
      return { name: wifiname };
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
    {
      name: "terminal_proxy_toggle",
      description: "Used to set proxy for terminal",
    },
    {
      name: "connect_wifi",
      description: "Used to connect to wifi",
      args: [
      {
        name: "name",
        description: "Enter wifi name",
        generators: commonWifi,
      },
      {
        name: "password",
        description: "Enter wifi password",
        isOptional: true,
      },
    ]
    },
  ],
};
export default completionSpec;