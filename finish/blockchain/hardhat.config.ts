import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const Private_Key =
  "e9e5a59b091532f43c627dfef570894435e5e0d236a53d5a8dee57384e068407";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/CSO-2F095DvbdZO3FFRDXopGRbI8BHPP`,
      accounts: [`0x${Private_Key}`],
    },
  },
};

export default config;
