const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("D20", function () {
  it("D20 should be deployable", async function () {
    const D20 = await ethers.getContractFactory("D20");

    const deploy = async () => {
      const d20 = await D20.deploy();
      await d20.deployed();
    };

    expect(deploy).to.not.throw();
  });
});
