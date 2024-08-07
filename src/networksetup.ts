const hardwareports: Fig.Generator = {
  script: ["networksetup", "-listallhardwareports"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      suggestions.push({
        name: match[1],
        description: `Interface: ${match[2]}`,
      });
    }
    return suggestions;
  },
};

const networkservices: Fig.Generator = {
  script: ["networksetup2", "-listallnetworkservices"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const lines = out.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (
        trimmedLine ===
        "An asterisk (*) denotes that a network service is disabled."
      ) {
        continue;
      }
      if (trimmedLine.length > 0) {
        const serviceName = trimmedLine.replace(/^\* /, "").trim();
        const description = trimmedLine.startsWith("*")
          ? "Disabled network service"
          : "Network service";
        suggestions.push({ name: serviceName, description });
      }
    }
    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "networksetup",
  description: "Configuration tool for network settings in System Preferences",
  subcommands: [
    {
      name: "-listnetworkserviceorder",
      description:
        "Displays a list of network services in the order they are contacted for a connection, along with the corresponding port and device for each",
    },
    {
      name: "-listallnetworkservices",
      description:
        "Displays a list of all the network services on the server's hardware ports",
    },
    {
      name: "-listallhardwareports",
      description:
        "Displays list of hardware ports with corresponding device name and ethernet address",
    },
    {
      name: "-detectnewhardware",
      description:
        "Detects new network hardware and creates a default network service on the hardware",
    },
    {
      name: "-getmacaddress",
      description:
        "Displays ethernet (or Wi-Fi) address for hardwareport or device specified",
      args: {
        name: "hardwareport",
        generators: hardwareports,
      },
    },
    {
      name: "-getcomputername",
      description: "Displays the computer name",
    },
    {
      name: "-setcomputername",
      description:
        "Sets computer name to <computername>. This name is used by AFP",
      args: {
        name: "computername",
        description: "The new name for your computer on the network",
      },
    },
    {
      name: "-getinfo",
      description:
        "Displays the IP address, subnet mask, router, and hardware address for the <networkservice> that you specify",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
  ],
};

export default completionSpec;
