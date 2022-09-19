import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xd0c453Ae03d3D140714e5Fd7aBdCa6222D33F115"
);

export default instance;
